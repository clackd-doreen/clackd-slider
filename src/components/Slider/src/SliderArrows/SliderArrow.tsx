import React, { forwardRef } from 'react'

import * as FeatherIcons from 'react-icons/fi'

import { handleSlider } from '@components/Slider/utils'
import { useSlider } from '@components/Slider/src'
import { toTitleCase } from '@utils/helpers'

import {
	createClassList,
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { IconType } from 'react-icons/lib'

import type {
	ArrowsList,
	ArrowVariants,
	IconsList,
} from '@/types/icons'

import type {
	HandleSliderProps,
	SliderArrowProps,
	SliderArrowPropsList,
} from '@components/Slider/src'

import './SliderArrows.module.scss'


const defaultProps: Partial<SliderArrowProps> = {
	icon: 'chevron',
}


const getArrowsByIconName = (icon: ArrowVariants = 'arrow') => {
	const arrows = {
		'arrow': {
			'down': 'FiArrowDown',
			'left': 'FiArrowLeft',
			'right': 'FiArrowRight',
			'up': 'FiArrowUp',
		},
		'chevron': {
			'down': 'FiChevronown',
			'left': 'FiChevronLeft',
			'right': 'FiChevronRight',
			'up': 'FiChevronUp',
		},
		'circle': {
			'down': 'FiArrowDownCircle',
			'left': 'FiArrowLeftCircle',
			'right': 'FiArrowRightCircle',
			'up': 'FiArrowUpCircle',
		},
		'doubleChevron': {
			'down': 'FiChevronsDown',
			'left': 'FiChevronsLeft',
			'right': 'FiChevronsRight',
			'up': 'FiChevronsUp',
		},
		'skip': {
			'down': null,
			'left': 'FiSkipBack',
			'right': 'FiSkipForward',
			'up': null,
		},
	}[`${icon}`] as ArrowsList

	return arrows
}

const SliderArrow = forwardRef<HTMLButtonElement, SliderArrowPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			// specific
			icon,
			type,
			...rest
		} = getDefaultProps<SliderArrowProps>(defaultProps, props)

		const {
			onArrowNextClick,
			onArrowPrevClick,
		} = useSlider()

		const arrowIcon = getArrowsByIconName(icon)

		const arrows = {
			'next': {
				icon: arrowIcon.right,
				onClick: onArrowNextClick,
			},
			'prev': {
				icon: arrowIcon.left,
				onClick: onArrowPrevClick,
			},
		}[`${type}`] as {
				icon: IconsList
				onClick: () => void
			}

		const FiArrowIcon: IconType = FeatherIcons[`${arrows.icon}`]
		const onArrowClick = () => arrows.onClick()

		const classes = createClassList(
			'slider-arrow',
			'',
			{ type },
			{ className }
		)

		const handlers = {
			...props as HandleSliderProps,
			...{ onClick: onArrowClick },
		}

		const attributes = getOptionalAttributes<Partial<SliderArrowPropsList>>(props, {}),
			  events = handleSlider(handlers),
			  others = filterProps<SliderArrowProps, HandleSliderProps>(rest, events)

		const args = {
			...others,
			...events,
			...attributes,
		}

		const label = toTitleCase(`slider ${type} arrow`)

		return (
			<button
				{ ...args }
				aria-label={ label }
				className={ classes }
				ref={ ref }
				type="button"
			>
				<FiArrowIcon />
			</button>
		)
	}
)


SliderArrow.displayName = 'SliderArrow'

export {
	SliderArrow,
	defaultProps,
}

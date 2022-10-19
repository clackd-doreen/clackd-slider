import React, { forwardRef } from 'react'

import * as TablerIcons from 'react-icons/tb'

// import { Component } from '@components/Structure/Component'
import { handleSlider } from '@components/Slider/utils'
import { useSlider } from '@components/Slider/src'
import { toTitleCase } from '@utils/helpers'

import {
	createClassList,	// change to generateUtilityClasses?
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { IconType } from 'react-icons/lib'

import type {
	ArrowsList,
	ArrowVariants,
	IconsList,
} from '@typings/icons'

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
			'down': 'TbArrowDown',
			'left': 'TbArrowLeft',
			'right': 'TbArrowRight',
			'up': 'TbArrowUp',
		},
		'chevron': {
			'down': 'TbChevronown',
			'left': 'TbChevronLeft',
			'right': 'TbChevronRight',
			'up': 'TbChevronUp',
		},
		'circle': {
			'down': 'TbArrowDownCircle',
			'left': 'TbArrowLeftCircle',
			'right': 'TbArrowRightCircle',
			'up': 'TbArrowUpCircle',
		},
		'doubleChevron': {
			'down': 'TbChevronsDown',
			'left': 'TbChevronsLeft',
			'right': 'TbChevronsRight',
			'up': 'TbChevronsUp',
		},
		'skip': {
			'down': null,
			'left': 'TbSkipBack',
			'right': 'TbSkipForward',
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

		const TbArrowIcon: IconType = TablerIcons[`${arrows.icon}`]
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
			// ...{ onKeyPress: event => event.key === 'Enter' && onArrowClick() }
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
				<TbArrowIcon />
			</button>
		)
	}
)


SliderArrow.displayName = 'SliderArrow'

export {
	SliderArrow,
	defaultProps,
}

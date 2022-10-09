import React, { forwardRef } from 'react'

import { SliderArrow } from './SliderArrow'

import {
	createClassList,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type {
	SliderArrowsProps,
	SliderArrowsPropsList,
} from '@components/Slider/src'


const defaultProps: Partial<SliderArrowsProps> = {
	icon: 'chevron',
}


const SliderArrows = forwardRef<HTMLDivElement, SliderArrowsPropsList>(
	(props, ref) => {
		const {
			children,
			className,
			displayAs,
			isDisabled,
			// specific
			icon,
			...rest
		} = getDefaultProps<SliderArrowsProps>(defaultProps, props)

		const classes = createClassList(
			'slider-arrows',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderArrowsPropsList>>(props, {})

		const args = {
			...rest,
			...attributes,
		}

		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<SliderArrow icon={ icon } type="prev" />
				{ children }
				<SliderArrow icon={ icon } type="next" />
			</div>
		)
	}
)


SliderArrows.displayName = 'SliderArrows'

export {
	SliderArrows,
	defaultProps,
}

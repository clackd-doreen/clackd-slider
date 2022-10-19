import React, { forwardRef } from 'react'

// import { Component } from '@components/Structure/Component'
import { useSlider } from '@components/Slider/src'

import {
	createClassList,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type {
	SliderIndicatorProps,
	SliderIndicatorPropsList,
} from '@components/Slider/src'

import './SliderIndicator.module.scss'


const defaultProps: Partial<SliderIndicatorProps> = {
	//
}


const SliderIndicator = forwardRef<HTMLDivElement, SliderIndicatorPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			...rest
		} = getDefaultProps<SliderIndicatorProps>(defaultProps, props)

		const classes = createClassList(
			'slider-indicator',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderIndicatorPropsList>>(props, {})

		const args = {
			...rest,
			...attributes,
		}

		// component-specific

		const {
			sliderInfo: {
				active: activeSlide,
				total: totalSlides,
			},
		} = useSlider()

		const currentSlide = activeSlide === 0
			? totalSlides
			: activeSlide

		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<p className="slider-indicator__group">
					<span className="slider-indicator__active">{ currentSlide }</span>
					of
					<span className="slider-indicator__total">{ totalSlides }</span>
				</p>
			</div>
		)
	}
)


SliderIndicator.displayName = 'SliderIndicator'

export {
	SliderIndicator,
	defaultProps,
}

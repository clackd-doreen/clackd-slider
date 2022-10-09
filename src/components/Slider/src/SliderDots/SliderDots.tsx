import React, { forwardRef } from 'react'

import { Controller } from 'swiper'
import { Swiper } from 'swiper/react'
import { SliderDot } from './SliderDot'

import { getControllerIfControlExists } from '@components/Slider/utils'
import { useSlider } from '@components/Slider/src'

import {
	createClassList,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperProps } from 'swiper/react'

import type {
	SliderDotsProps,
	SliderDotsPropsList,
} from '@components/Slider/src'


const defaultProps: Partial<SliderDotsProps> = {
	count: 5,
	gutter: 20,
}


const SliderDots = forwardRef<HTMLDivElement, SliderDotsPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			// specific
			count,
			gutter,
			...rest
		} = getDefaultProps<SliderDotsProps>(defaultProps, props)

		const classes = createClassList(
			'slider-dots',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderDotsPropsList>>(props, {})

		const args = {
			...rest,
			...attributes,
		}

		const {
			controls: {
				dots: {
					controller: { control: dotControl },
					onSwiper: handleSwiper,
				},
			},
			sharedControlOptions,
			sliderInfo: {
				active: activeSlide,
				initial: initialSlide,
				slides,
			},
		} = useSlider()

		const controller = getControllerIfControlExists(dotControl)

		const swiperDotsOptions: SwiperProps = {
			...sharedControlOptions,
			...controller,
			initialSlide,
			modules: [Controller],
			onSwiper: (swiper: SwiperClass) => handleSwiper(swiper),
			slidesPerGroup: count,
			spaceBetween: gutter,
			width: 20,
		}


		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<Swiper className="slider-dots__swiper" { ...swiperDotsOptions }>
					{ slides.map((_, k) => {
						const activeDotClass = activeSlide === k + 1
							? 'slide-dot--active'
							: ''

						console.log(activeSlide)

						return (
							<SliderDot className={ activeDotClass } key={ `dot-${k}` } />
						)
					})}
				</Swiper>
			</div>
		)
	}
)


SliderDots.displayName = 'SliderDots'

export {
	SliderDots,
	defaultProps,
}

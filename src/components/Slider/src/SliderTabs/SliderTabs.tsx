import React, { forwardRef } from 'react'

import { Controller } from 'swiper'
import { Swiper } from 'swiper/react'
import { SliderTab } from './SliderTab'

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
	SliderTabsProps,
	SliderTabsPropsList,
} from '@components/Slider/src'


const defaultProps: Partial<SliderTabsProps> = {
	count: 3,
	gutter: 30,
}


const SliderTabs = forwardRef<HTMLDivElement, SliderTabsPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			// specific
			count,
			gutter,
			...rest
		} = getDefaultProps<SliderTabsProps>(defaultProps, props)

		const classes = createClassList(
			'slider-tabs',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderTabsPropsList>>(props, {})

		const args = {
			...rest,
			...attributes,
		}

		const {
			controls: {
				tabs: {
					controller: { control: tabControl },
					onSwiper: handleSwiper,
				},
			},
			sharedControlOptions,
			sliderInfo: {
				initial: initialSlide,
				slides,
			},
		} = useSlider()

		const controller = getControllerIfControlExists(tabControl)

		const swiperTabsOptions: SwiperProps = {
			...sharedControlOptions,
			...controller,
			initialSlide,
			modules: [Controller],
			onSwiper: (swiper: SwiperClass) => handleSwiper(swiper),
			slidesPerView: count,
			spaceBetween: gutter,
		}

		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<Swiper className="slider-tabs__swiper" { ...swiperTabsOptions }>
					{ slides.map((slide, j) => <SliderTab item={ slide } key={ `tab-${j}` } />)}
				</Swiper>
			</div>
		)
	}
)


SliderTabs.displayName = 'SliderTabs'

export {
	SliderTabs,
	defaultProps,
}

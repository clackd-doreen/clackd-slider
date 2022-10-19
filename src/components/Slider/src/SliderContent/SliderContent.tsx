import React, {
	forwardRef,
	useCallback,
	// useState,
} from 'react'

import {
	Swiper,
	SwiperSlide,
} from 'swiper/react'

// import { Component } from '@components/Structure/Component'
import { getImageDetails } from '@utils/helpers/elements'
import { useSlider } from '@components/Slider/src'

import {
	getControllerIfControlExists,
	getSwiperNavigation,
	handleSlider,
} from '@components/Slider/utils'

import {
	createClassList,
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperProps } from 'swiper/react'

import type {
	KeyboardEvent,
	MouseEvent,
} from 'react'

import type {
	HandleSliderProps,
	SliderContentProps,
	SliderContentPropsList,
} from '@components/Slider/src'

import './SliderContent.module.scss'


const defaultProps: Partial<SliderContentProps> = {
	count: 3,
	gutter: 50,
}


const SliderContent = forwardRef<HTMLDivElement, SliderContentPropsList>(
	(props, ref) => {
		const {
			children,
			className,
			displayAs,
			isDisabled,
			// specific
			count,
			gutter,
			...rest
		} = getDefaultProps<SliderContentProps>(defaultProps, props)

		const classes = createClassList(
			'slider-content',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderContentPropsList>>(props, {}),
			  events = handleSlider(props as HandleSliderProps),
			  others = filterProps<SliderContentProps, HandleSliderProps>(rest, events)

		const args = {
			...others,
			...events,
			...attributes,
		}

		// component-specific

		// const [slideItemClasses, setSlideItemClasses] = useState('slide-item')

		const {
			controls: {
				content: {
					controller: { control: contentControl },
					onSwiper: handleSwiper,
				},
			},
			handleLightboxToggle,
			handleSetActiveSlide,
			navigation,
			sharedControlOptions,
			sliderInfo: {
				// active: activeSlide,
				initial: initialSlide,
				slides,
			},
		} = useSlider()

		// const getSlideItemClasses = useCallback((
		// 	// direction: 'next' | 'prev',
		// 	index: number
		// ) => {
		// 	let directionalClass = ''

		// 	const i = index + 1

		// 	if (activeSlide + 2 === i) directionalClass = 'swiper-slide-next-next'
		// 	if (activeSlide - 2 === i) directionalClass = 'swiper-slide-prev-prev'

		// 	console.log(`active: ${activeSlide}`)
		// 	console.log(i)

		// 	return ([
		// 		'slide-item',
		// 		directionalClass,
		// 	] as string[]).join(' ')
		// }, [activeSlide])

		const handleImageClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
			const target = event.target as HTMLImageElement
			const clickedImageDetails = getImageDetails<HTMLImageElement>(
				target,
				'slide-item__body'
			)

			handleLightboxToggle(clickedImageDetails)
		}, [])

		const handleImageKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
			const target = event.target as HTMLImageElement
			const pressedImageDetails = getImageDetails<HTMLImageElement>(
				target,
				'slide-item__body'
			)

			handleLightboxToggle(pressedImageDetails)
		}, [])

		const controller = getControllerIfControlExists(contentControl)
		const navigationOptions = getSwiperNavigation(navigation)

		const swiperContentOptions: SwiperProps = {
			...sharedControlOptions,
			...navigationOptions,
			...controller,
			grabCursor: true,
			initialSlide,
			onActiveIndexChange: (swiper: SwiperClass) => {
				handleSetActiveSlide(swiper.realIndex)
				// const slideItemClassList = getSlideItemClasses(swiper.realIndex)
				// setSlideItemClasses(slideItemClassList)
				// console.log(slideItemClassList)
			},
			onSwiper: (swiper: SwiperClass) => handleSwiper(swiper),
			preloadImages: true,
			slidesPerView: count,
			spaceBetween: gutter,
		}

		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<Swiper className="slider-content__swiper" { ...swiperContentOptions }>
					{ slides.map((slide, i) => (
						<SwiperSlide className="slide-item" key={ `content-${i}` }>
							{/* <div className="slide-item__heading">
								<h2 className="slide-item__title">{ slide.title }</h2>
							</div> */}
							<div className="slide-item__body">
								<div
									aria-hidden="true"
									className="slide-item__toggle"
									onClick={ event => handleImageClick(event) }
									onKeyDown={ event => handleImageKeyDown(event) }
									role="presentation"
								>
									<img
										alt={ slide.title }
										className="slide-item__image"
										src={ slide.url }
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{ children }
			</div>
		)
	}
)


SliderContent.displayName = 'SliderContent'

export {
	SliderContent,
	defaultProps,
}

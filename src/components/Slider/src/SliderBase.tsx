/* eslint-disable @typescript-eslint/dot-notation */

import React, {
	forwardRef,
	useCallback,
	useEffect,
	useState,
} from 'react'

import { SliderContext } from './Slider.context'
import { getImageUrls } from '@utils/helpers/files'

import {
	generateSlidesList,
	useSliderControls,
} from '../utils'

import {
	createClassList,
	getChildrenDisplayNames,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperProps } from 'swiper/react'

import type {
	NavigationControlGroup,
	SliderProps,
	SliderPropsList,
	SingleLightbox,
	SingleSlide,
	SingleSlideWithDimensions,
} from './Slider.types'

import 'swiper/css'


const defaultProps: Partial<SliderProps> = {
	centerSlides: true,
	direction: 'horizontal',
	enableKeyboardControl: true,
	enableMousewheelControl: true,
	initialSlide: 0,
	loopSlides: true,
}

const globs = import.meta.glob('@components/Slider/assets/*')


const SliderBase = forwardRef<HTMLDivElement, SliderPropsList>(
	(props, ref) => {
		const {
			children,
			className,
			displayAs,
			isDisabled,
			// specific
			centerSlides,
			direction,
			enableKeyboardControl,
			enableMousewheelControl,
			initialSlide,
			isLoading,
			loopSlides,
			...rest
		} = getDefaultProps<SliderProps>(defaultProps, props)

		const classes = createClassList(
			'slider',
			'',
			{ className }
		)

		const otherAttributes = {
			'data-loading': isLoading,
		} as Partial<SliderPropsList>

		const attributes = getOptionalAttributes<Partial<SliderPropsList>>(props, otherAttributes)

		const args = {
			...rest,
			...attributes,
		}

		// component-specific

		const {
			activeSlide,
			handleSetActiveSlide,
			handleSetSwiperContentInstance,
			handleSetSwiperDotsInstance,
			handleSetSwiperTabsInstance,
			onArrowNextClick,
			onArrowPrevClick,
			onDotClick,
			onTabClick,
			swiperContent,
			swiperDots,
			swiperTabs,
		} = useSliderControls(initialSlide)

		const [images, setImages] = useState<string[]>([])
		const [lightbox, setLightbox] = useState<SingleLightbox>(
			{} as SingleSlideWithDimensions
		)
		const [slides, setSlides] = useState<SingleSlide[]>([])
		const [totalSlides, setTotalSlides] = useState(0)

		const getControllersList = useCallback(() => {
			const childrenDisplayNames = getChildrenDisplayNames(children)
			const controls = [] as (SwiperClass | undefined)[]

			childrenDisplayNames.forEach(displayName => {
				const componentName = displayName.toLowerCase()

				if (componentName.includes('dot'))
					controls.push(swiperDots)

				if (componentName.includes('tab'))
					controls.push(swiperTabs)
			})

			if (controls.length > 1) return controls

			return controls[0]
		}, [
			children,
			swiperContent,
			swiperDots,
			swiperTabs,
		])

		const handleLightboxToggle = useCallback((slide: SingleLightbox) => {
			if (Object.keys(slide).length > 0)
				setLightbox(slide)
			else
				setLightbox({})
		}, [])

		useEffect(() => {
			if (!swiperContent || !swiperDots || !swiperTabs) return

			console.log(swiperContent)
			console.log(swiperDots)
			console.log(swiperTabs)
		}, [
			swiperContent,
			swiperDots,
			swiperTabs,
		])

		// sets the list of image urls
		useEffect(() => {
			if (Object.keys(globs).length === 0) return
			getImageUrls(globs, setImages)
		}, [globs])

		// creates the slides based off of the list of image urls
		useEffect(() => {
			if (images.length > 0 && images.length >= Object.keys(globs).length) {
				const slidesList = generateSlidesList(images)
				setSlides(slidesList)
				setTotalSlides(slidesList.length)
			}
		}, [images])

		const contentControllers = getControllersList()
		console.log(contentControllers)

		const controls = {
			content: {
				controller: { control: swiperTabs },
				onSwiper: handleSetSwiperContentInstance,
			},
			dots: {
				controller: { control: swiperContent },
				onSwiper: handleSetSwiperDotsInstance,
			},
			tabs: {
				controller: { control: swiperContent },
				onSwiper: handleSetSwiperTabsInstance,
			},
		}

		const navigation = {
			keyboard: enableKeyboardControl!,
			mousewheel: enableMousewheelControl!,
		} as NavigationControlGroup

		const centerSlidesOptions = {
			centeredSlides: true,
			centeredSlidesBounds: true,
		} as SwiperProps

		const loopAdditionalSlides = totalSlides !== 0
			? totalSlides * 2
			: 50

		const loopedOptions = loopSlides && {
			loop: true,
			loopAdditionalSlides,
			loopPreventsSlide: true,
		} as SwiperProps

		const sharedControlOptions: SwiperProps = {
			...centerSlidesOptions,
			...loopedOptions,
			direction,
			preventInteractionOnTransition: true,
			speed: 600,
			touchRatio: 0.2,
			updateOnImagesReady: true,
			updateOnWindowResize: true,
			watchOverflow: true,
		}

		const sliderInfo = {
			active: activeSlide,
			initial: initialSlide || (defaultProps.initialSlide ?? 0),
			slides,
			total: totalSlides,
		}

		return (
			<SliderContext.Provider
				value={ {
					controls,
					handleLightboxToggle,
					handleSetActiveSlide,
					lightbox,
					navigation,
					onArrowNextClick,
					onArrowPrevClick,
					onDotClick,
					onTabClick,
					sharedControlOptions,
					sliderInfo,
				} }
			>
				<div
					{ ...args }
					className={ classes }
					ref={ ref }
				>
					{ children }
				</div>
			</SliderContext.Provider>
		)
	}
)


SliderBase.displayName = 'SliderBase'

export {
	SliderBase,
	defaultProps,
}

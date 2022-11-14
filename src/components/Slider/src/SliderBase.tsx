/* eslint-disable @typescript-eslint/dot-notation */

import React, {
	forwardRef,
	useCallback,
	useEffect,
	useState,
} from 'react'

// import { Component } from '@components/Structure/Component'
import { SliderContext } from './Slider.context'
import { getImageUrls } from '@utils/helpers/files'

import {
	generateSlidesList,
	useSliderControls,
} from '../utils'

import {
	createClassList,
	filterChildrenByDisplayName,
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
// import 'swiper/css/controller'
// import 'swiper/css/keyboard'
// import 'swiper/css/mousewheel'


const defaultProps: Partial<SliderProps> = {
	centerSlides: true,
	direction: 'horizontal',
	enableKeyboardControl: true,
	enableMousewheelControl: true,
	initialSlide: 0,
	loopSlides: true,
}


// type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>
// type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>

const globsList = import.meta.glob('@assets/images/slider/*')

// const getImageUrl = (fileName: string) => (
//	new URL(`/images/${fileName}.jpg`,
//	import.meta.url).href
// )

// const useImage = (fileName: string) => {
// 	const [error, setError] = useState(null)
// 	const [image, setImage] = useState(null)
// 	const [loading, setLoading] = useState(true)

// 	useEffect(() => {
// 		const fetchImage = async () => {
// 			try {
//			 	// change relative path to suit your needs
// 				const response = await import(`/images/${fileName}`)
// 				setImage(response.default)
// 			} catch (err) {
// 				setError(err)
// 			} finally {
// 				setLoading(false)
// 			}
// 		}

// 		fetchImage()
// 	}, [fileName])

// 	return {
// 		error,
// 		image,
// 		loading,
// 	}
// }

type GlobsList = Record<string, () => Promise<unknown>>

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

		const [contentHasLoaded, toggleContentLoaded] = useState(false)
		const [globs, setGlobs] = useState<GlobsList>({})
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

		// useEffect(() => {
		// 	if (!swiperContent || !swiperDots || !swiperTabs) return

		// 	// console.log(swiperContent)
		// 	// console.log(swiperDots)
		// 	// console.log(swiperTabs)
		// }, [
		// 	swiperContent,
		// 	swiperDots,
		// 	swiperTabs,
		// ])

		useEffect(() => {
			// const globsTest = import.meta.glob('@components/Data/Slider/demo/*')
			// setGlobs(globsTest)
			setGlobs(globsList)
		}, [])

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
				setTimeout(() => {
					toggleContentLoaded(true)
				}, 2000)
			}
		}, [images])

		// content: controller swiperDots
		// dots: controller swiperTabs
		// tabs: controller swiperContent

		// const controls = {
		// 	content: {
		// 		// controller: { control: [swiperDots, swiperTabs] },
		// 		// controller: { control: contentControllers },
		// 		controller: { control: swiperDots },
		// 		onSwiper: handleSetSwiperContentInstance,
		// 	},
		// 	dots: {
		// 		// controller: { control: swiperTabs },
		// 		controller: { control: swiperTabs },
		// 		onSwiper: handleSetSwiperDotsInstance,
		// 	},
		// 	tabs: {
		// 		controller: { control: swiperContent },
		// 		onSwiper: handleSetSwiperTabsInstance,
		// 	},
		// }

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
			// centerInsufficientSlides: true,
		} as SwiperProps

		const loopAdditionalSlides = totalSlides !== 0
			? totalSlides * 2
			: 50

		const loopedOptions = loopSlides && {
			loop: true,
			loopAdditionalSlides,
			loopPreventsSlide: true,
			// loopedSlides,
			// loopFillGroupWithBlank: true,
		} as SwiperProps

		const sharedControlOptions: SwiperProps = {
			...centerSlidesOptions,
			...loopedOptions,
			allowTouchMove: false,
			direction,
			grabCursor: false,
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

		const fadeOutClass = contentHasLoaded
			? 'animate--fadeOut'
			: ''

		const classes = createClassList(
			'slider',
			'',
			{ loading: !contentHasLoaded },
			{ className }
			// { ' animate--fadeIn': contentHasLoaded },
		)

		const otherAttributes = {
			'data-loading': isLoading,
		} as Partial<SliderPropsList>

		const attributes = getOptionalAttributes<Partial<SliderPropsList>>(props, otherAttributes)

		const args = {
			...rest,
			...attributes,
		}

		const allowedSubcomponents = [
			'SliderArrows',
			'SliderContent',
			'SliderDots',
			'SliderHeader',
			'SliderIndicator',
			'SliderLightbox',
			'SliderTabs',
			'SliderThumbs',
		]

		const filteredChildren = filterChildrenByDisplayName(children, allowedSubcomponents)

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
				<div className={ `loader loader--fullPage ${fadeOutClass}` }>
					<div className="loader__wrapper">
						<div className="loader__item"><span>...loading</span></div>
						<div className="loader__item" />
						<div className="loader__item" />
					</div>
				</div>

				<div
					{ ...args }
					className={ classes }
					ref={ ref }
				>
					{ filteredChildren }
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

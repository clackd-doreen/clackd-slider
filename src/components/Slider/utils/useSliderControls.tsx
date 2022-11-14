import React, {
	useCallback,
	useState,
} from 'react'

import type { Swiper as SwiperClass } from 'swiper'


const useSliderControls = (initialSlide = 0) => {
	const [activeSlide, setActiveSlide] = useState<number>(initialSlide)
	// const [slides, setSlides] = useState()
	const [swiperContent, setSwiperContent] = useState<SwiperClass>()
	const [swiperDots, setSwiperDots] = useState<SwiperClass>()
	const [swiperTabs, setSwiperTabs] = useState<SwiperClass>()

	const handleSetSwiperContentInstance = useCallback(
		(swiper: SwiperClass) => setSwiperContent(swiper),
		[]
	)

	const handleSetSwiperDotsInstance = useCallback(
		(swiper: SwiperClass) => setSwiperDots(swiper),
		[]
	)

	const handleSetSwiperTabsInstance = useCallback(
		(swiper: SwiperClass) => setSwiperTabs(swiper),
		[]
	)

	const handleSetActiveSlide = useCallback((index: number) => {
		console.log(`handle active slide: ${index}`)
		setActiveSlide(index)
	}, [])

	// const handleSetSlides = useCallback((index: number) => {
	// 	console.log(`handle active slide: ${index}`)
	// 	setActiveSlide(index)
	// }, [])

	const onArrowNextClick = useCallback(
		() => {
			if (swiperContent)
				swiperContent.slideNext(600)

			// if (swiperContent && swiperDots) {
			// 	swiperDots.slideTo(swiperContent.realIndex)
			// 	console.log(swiperDots)
			// 	// swiperDots?.slideNext(600)
			// 	// setTimeout(() => {
			// 	// 	swiperDots.slideTo(swiperContent.realIndex)
			// 	// 	swiperDots.updateSlidesClasses()
			// 	// 	swiperDots.updateSlides()
			// 	// 	// console.log(swiperDots)
			// 	// 	// console.log(swiperContent.realIndex)
			// 	// }, 600)
			// }
		},
		[swiperContent]
	)

	const onArrowPrevClick = useCallback(
		() => {
			if (swiperContent)
				swiperContent.slidePrev(600)

			// if (swiperContent && swiperDots) {
			// 	swiperDots.slideTo(swiperContent.realIndex)
			// 	console.log(swiperDots)
			// }
		},
		[swiperContent]
	)

	const onDotClick = useCallback((index: number) => {
		// if (swiperDots) {
		// 	const dotWidth = swiperDots
		// 	console.log(dotWidth)
		// }

		if (swiperContent && swiperDots) {
			if (activeSlide !== swiperDots.clickedIndex)
				swiperContent.slideTo(swiperDots.clickedIndex, 600)
		}
	}, [swiperContent, swiperDots])

	const onTabClick = useCallback(() => {
		if (swiperContent && swiperTabs) {
			swiperContent.slideTo(swiperTabs.clickedIndex, 600)
			console.log(swiperTabs.clickedIndex)
		}
	}, [swiperContent, swiperTabs])


	return {
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
	}
}

export { useSliderControls }

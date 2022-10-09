import React, {
	useCallback,
	useEffect,
	useState,
} from 'react'

import type { Swiper as SwiperClass } from 'swiper'


const useSliderControls = (initialSlide = 0) => {
	const [activeSlide, setActiveSlide] = useState<number>(initialSlide)
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

	const onArrowNextClick = useCallback(
		() => swiperContent?.slideNext(600),
		[swiperContent]
	)

	const onArrowPrevClick = useCallback(
		() => swiperContent?.slidePrev(600),
		[swiperContent]
	)

	const onDotClick = useCallback(() => {
		if (swiperContent && swiperDots)
			swiperContent.slideTo(swiperDots.clickedIndex, 600)
	}, [swiperContent, swiperDots])

	const onTabClick = useCallback(() => {
		if (swiperContent && swiperTabs)
			swiperContent.slideTo(swiperTabs.clickedIndex, 600)
	}, [swiperContent, swiperTabs])

	useEffect(() => {
		if (swiperContent)
			swiperContent.slideTo(initialSlide, 600)
	}, [])


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

import React, {
	createContext,
	useContext,
} from 'react'

// import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperProps } from 'swiper/react'

import type {
	ControlGroup,
	NavigationControlGroup,
	SingleLightbox,
	SingleSlide,
	SingleSlideWithDimensions,
} from './Slider.types'


type SliderContextData = {
	controls: {
		content: ControlGroup
		dots: ControlGroup
		tabs: ControlGroup
	}
	handleLightboxToggle: (slide: SingleLightbox) => void
	handleSetActiveSlide: (index: number) => void
	lightbox: Record<string, never> | SingleSlideWithDimensions
	navigation: NavigationControlGroup
	onArrowNextClick: () => void
	onArrowPrevClick: () => void
	onDotClick: (index: number) => void
	onTabClick: () => void
	sharedControlOptions?: SwiperProps
	sliderInfo: {
		active: number
		initial: number
		slides: SingleSlide[]
		total: number
	}
}

const SliderContext = createContext({} as SliderContextData)

const useSlider = () => {
	const context = useContext(SliderContext)

	if (Object.keys(context).length === 0)
		throw new Error('useSlider must be used within SliderContext')
	else
		return context
}

export {
	SliderContext,
	useSlider,
}


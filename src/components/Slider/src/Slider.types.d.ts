/* eslint-disable @typescript-eslint/no-empty-interface */
import type { Swiper as SwiperClass } from 'swiper'

import type { ArrowVariants } from '@/types/icons'
import type { RequireFields } from '@/types/fields'

import type {
	FocusEvents,
	KeyboardEvents,
	MouseEvents,
} from '@/types/events'

import type {
	Alignment,
	CommonProps,
	Orientation,
	Shapes,
} from '@/types/props-common'


// core

type HandleSliderProps =
	FocusEvents<HTMLButtonElement | HTMLDivElement> &
	Pick<KeyboardEvents<HTMLButtonElement | HTMLDivElement>,
	| 'onKeyPress'
	> &
	Pick<MouseEvents<HTMLButtonElement | HTMLDivElement>,
	| 'onClick'
	>

type SliderProps = RequireFields<CommonProps, 'children'> & {
	// aligns text to its parent
	alignText?: Alignment

	// displays the slides as centered
	centerSlides?: boolean

	// sets orientation of the slider
	direction?: Orientation

	// enables navigation through the slider via keyboard
	enableKeyboardControl?: boolean

	// enables navigation through the slider via mouse wheel
	enableMousewheelControl?: boolean

	// sets the initial slide
	initialSlide?: number

	// comments
	isLoading?: boolean

	// infinitely loop the slider
	loopSlides?: boolean
}


// single typings

type SingleControl = (SwiperClass | undefined)[] | SwiperClass
type SingleLightbox = Record<string, never> | SingleSlideWithDimensions

type SingleSlide = {
	title: string
	url: string
}

type SingleSlideWithDimensions = SingleSlide & {
	height: number
	width: number
	xPos: number
	yPos: number
}


// controls

type ControlGroup = {
	controller: { control?: SingleControl }
	onSwiper: (swiper: SwiperClass) => void
}

type NavigationControlGroup = {
	keyboard: boolean
	mousewheel: boolean
}

type SharedControlOptions = Omit<CommonProps, 'children'> & {
	count?: number
	gutter?: number
}

// types: subcomponents - group / parent

type SliderArrowsProps = CommonProps & {
	alignArrows?:
	| 'grouped'
	| 'spaced'

	icon?: ArrowVariants
}

type SliderDotsProps = SharedControlOptions & {
	shape?: Shapes
}

type SliderTabsProps = SharedControlOptions & {
	//
}


// types: subcomponents - group / child

type SliderArrowProps = Omit<SliderArrowsProps, 'children'> & {
	shape?: Shapes

	type:
	| 'next'
	| 'prev'
}

type SliderDotProps = SliderDotsProps & {
	//
}

type SliderTabProps = SliderTabsProps & {
	item: SingleSlide
}


// types: subcomponents - orphans

type SliderContentProps = SharedControlOptions & {
	//
}

type SliderIndicatorProps = Omit<CommonProps, 'children'> & {
	//
}

type SliderLightboxProps = Omit<CommonProps, 'children'> & {
	// comments
	isLoading?: boolean
}


// interfaces: subcomponents - group / parent

interface SliderArrowsPropsList extends SliderArrowsProps {}
interface SliderDotsPropsList extends SliderDotsProps {}
interface SliderTabsPropsList extends SliderTabsProps {}


// interfaces: subcomponents - group / child

interface SliderArrowPropsList extends SliderArrowProps, HandleSliderProps {}
interface SliderDotPropsList extends SliderDotProps, HandleSliderProps {}
interface SliderTabPropsList extends SliderTabProps, HandleSliderProps {}


// interfaces: subcomponents - orphans

interface SliderPropsList extends SliderProps {}
interface SliderContentPropsList extends SliderContentProps {}
interface SliderIndicatorPropsList extends SliderIndicatorProps {}
interface SliderLightboxPropsList extends SliderLightboxProps {}


export type {
	// core
	HandleSliderProps,
	SliderProps,
	SliderPropsList,

	// single typings
	SingleControl,
	SingleLightbox,
	SingleSlide,
	SingleSlideWithDimensions,

	// controls
	ControlGroup,
	NavigationControlGroup,
	SharedControlOptions,

	// subcomponents - group / parent
	SliderArrowsProps,
	SliderArrowsPropsList,
	SliderDotsProps,
	SliderDotsPropsList,
	SliderTabsProps,
	SliderTabsPropsList,

	// subcomponents - group / child
	SliderArrowProps,
	SliderArrowPropsList,
	SliderDotProps,
	SliderDotPropsList,
	SliderTabProps,
	SliderTabPropsList,

	// subcomponents - orphans
	SliderContentProps,
	SliderContentPropsList,
	SliderIndicatorProps,
	SliderIndicatorPropsList,
	SliderLightboxProps,
	SliderLightboxPropsList,
}

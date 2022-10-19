import React from 'react'

import {
	Controller,
	Keyboard,
	Mousewheel,
} from 'swiper'

import {
	compareEveryTo,
	deepTypeOf,
	shuffleArray,
} from '@utils/helpers'

import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperProps } from 'swiper/react'

import type {
	NavigationControlGroup,
	SingleControl,
	SingleSlide,
} from '../src/Slider.types'


const generateSlidesList = (list: string[]) => {
	const uniqueList = shuffleArray([...new Set(list)]) as string[]
	const output = [] as SingleSlide[]

	uniqueList.forEach(url => {
		const fileName = url.split('/').pop()

		if (!fileName)
			throw new Error('image src url does not exist')

		const [title] = fileName.replaceAll('%20', ' ').replaceAll('e%CC%81', 'é')
			.split(' - ')[1]
			.split('.')

		const newSlide = {
			title,
			url,
		} as SingleSlide

		output.push(newSlide)
	})

	return output
}

const getControllerIfControlExists = (controlSet?: SingleControl) => {
	if (controlSet) {
		const controller = { controller: { control: controlSet as SwiperClass } }

		if (deepTypeOf(controlSet) === 'array')
			return !compareEveryTo(controlSet as SwiperClass[], undefined) && controller

		return controller
	}

	return {}
}

const getSwiperNavigation = ({
	keyboard,
	mousewheel,
}: NavigationControlGroup) => {
	const modules = [Controller]

	const navOptions = { modules } as SwiperProps

	switch ([keyboard, mousewheel].join(', ')) {
		case 'true, true':
			modules.push(Keyboard)
			modules.push(Mousewheel)

			return {
				...navOptions,
				keyboard: true,
				mousewheel: true,
			}
		case 'true, false':
			modules.push(Keyboard)

			return {
				...navOptions,
				keyboard: true,
			}
		case 'false, true':
			modules.push(Mousewheel)

			return {
				...navOptions,
				mousewheel: true,
			}
		case 'false, false':
		default:
			return navOptions
	}
}


export {
	getControllerIfControlExists,
	getSwiperNavigation,
	generateSlidesList,
}


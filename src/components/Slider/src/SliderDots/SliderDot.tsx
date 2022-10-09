import React, { forwardRef } from 'react'
import { SwiperSlide } from 'swiper/react'

import { handleSlider } from '@components/Slider/utils'
import { useSlider } from '@components/Slider/src'
import { toTitleCase } from '@utils/helpers'

import {
	createClassList,
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type {
	HandleSliderProps,
	SliderDotProps,
	SliderDotPropsList,
} from '@components/Slider/src'

import './SliderDots.module.scss'


const defaultProps: Partial<SliderDotProps> = {
	//
}


const SliderDot = forwardRef<HTMLButtonElement, SliderDotPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			// specific
			...rest
		} = getDefaultProps<SliderDotProps>(defaultProps, props)

		const classes = createClassList(
			'slide-dot',
			'',
			{ className }
		)

		const { onDotClick } = useSlider()

		const handlers = {
			...props as HandleSliderProps,
			...{ onClick: onDotClick },
		}

		const attributes = getOptionalAttributes<Partial<SliderDotPropsList>>(props, {}),
			  events = handleSlider(handlers),
			  others = filterProps<SliderDotProps, HandleSliderProps>(rest, events)

		const args = {
			...others,
			...events,
			...attributes,
		}

		const label = toTitleCase('slider pagination dot')


		return (
			<>
				<SwiperSlide className={ classes }>
					<button
						{ ...args }
						aria-label={ label }
						className="slide-dot__btn"
						onClick={ onDotClick }
						ref={ ref }
						type="button"
					>
						<span />
					</button>
				</SwiperSlide>
			</>
		)
	}
)


SliderDot.displayName = 'SwiperSlide'

export {
	SliderDot,
	defaultProps,
}

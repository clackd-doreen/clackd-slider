import React, { forwardRef } from 'react'
import { SwiperSlide } from 'swiper/react'

import { handleSlider } from '@components/Slider/utils'
import { useSlider } from '@components/Slider/src'

import {
	createClassList,
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type {
	HandleSliderProps,
	SliderTabProps,
	SliderTabPropsList,
} from '@components/Slider/src'

import './SliderTabs.module.scss'


const defaultProps: Partial<SliderTabProps> = {
	//
}


const SliderTab = forwardRef<HTMLButtonElement, SliderTabPropsList>(
	(props, ref) => {
		const {
			className,
			displayAs,
			isDisabled,
			// specific
			item,
			...rest
		} = getDefaultProps<SliderTabProps>(defaultProps, props)

		const classes = createClassList(
			'slide-tab',
			'',
			{ className }
		)

		const { onTabClick } = useSlider()

		const handlers = {
			...props as HandleSliderProps,
			...{ onClick: onTabClick },
		}

		const attributes = getOptionalAttributes<Partial<SliderTabPropsList>>(props, {}),
			  events = handleSlider(handlers),
			  others = filterProps<SliderTabProps, HandleSliderProps>(rest, events)

		const args = {
			...others,
			...events,
			...attributes,
		}

		return (
			<>
				<SwiperSlide className={ classes }>
					<button
						{ ...args }
						aria-label={ item.title }
						className="slide-tab__btn"
						onClick={ onTabClick }
						ref={ ref }
						type="button"
					>
						<span>{ item.title }</span>
					</button>
				</SwiperSlide>
			</>
		)
	}
)


SliderTab.displayName = 'SwiperSlide'

export {
	SliderTab,
	defaultProps,
}

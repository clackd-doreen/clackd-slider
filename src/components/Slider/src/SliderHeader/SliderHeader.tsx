import React, { forwardRef } from 'react'

// import { Component } from '@components/Structure/Component'

import {
	createClassList,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type {
	SliderHeaderProps,
	SliderHeaderPropsList,
} from '@components/Slider/src'

import './SliderHeader.module.scss'


const defaultProps: Partial<SliderHeaderProps> = {
	//
}


const SliderHeader = forwardRef<HTMLDivElement, SliderHeaderPropsList>(
	(props, ref) => {
		const {
			children,
			className,
			displayAs,
			isDisabled,
			// specific
			...rest
		} = getDefaultProps<SliderHeaderProps>(defaultProps, props)

		const classes = createClassList(
			'slider-header',
			'',
			{ className }
		)

		const attributes = getOptionalAttributes<Partial<SliderHeaderPropsList>>(
			props,
			{}
		)

		const args = {
			...rest,
			...attributes,
		}

		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				{ children }
			</div>
		)
	}
)


SliderHeader.displayName = 'SliderHeader'

export {
	SliderHeader,
	defaultProps,
}

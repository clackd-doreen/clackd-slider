import React from 'react'
import styled from 'styled-components'

import {
	SliderBase,
	defaultProps,
} from './SliderBase'

import type { RequireFields } from '@/types/fields'
import type { SliderProps } from './Slider.types'

import type {
	Alignment,
	// ComponentSizes,
	// SpacingRem,
} from '@/types/props-common'

import styles from './Slider.module.scss'


type SliderStylesProps =
	RequireFields<
	SliderProps,
	| 'alignText'
	// | 'size'
	>

const {
	alignText: dpAlignText,
	// size: dpSize,
} = defaultProps as SliderStylesProps

// const sizes = {
// 	xs: '.8125rem .75rem',
// 	sm: '.95rem 1.125rem',
// 	md: '1.125rem 1.625rem',
// 	lg: '1.375rem 2.5rem',
// 	xl: '1.625rem 3.25rem',
// } as Record<ComponentSizes, SpacingRem>

// outputting prop styles

const outputAlignText = ({ alignText = dpAlignText }: {
	alignText: Alignment
}) => ({
	'left': { textAlign: 'left' },
	'center': { textAlign: 'center' },
	'right': { textAlign: 'right' },
}[`${alignText}`])


// const outputSizes = ({
// 	size = dpSize,
// }: {
// 	size: ComponentSizes
// }) => ({ padding: sizes[`${size}`] })

const outputStyles = (props: SliderStylesProps) => {
	const {
		alignText,
		// size,
	} = props

	const output = {
		...outputAlignText({ alignText }),
		// ...outputSizes({ size }),
	} as Record<string, number | string>

	return output
}


const Slider = styled(SliderBase).attrs(props => {
	// disabling certain props if a css property that belongs to the prop is
	// overwritten by styled-components
	// (since attrs is applied first)
	// https://styled-components.com/docs/basics#attaching-additional-props

	// const {
	// 	alignText,
	// 	// size,
	// } = props

	console.log(props)
	const classList = [styles.Slider] as string[]

	// if (size === 'xs' || size === 'sm') {
	// 	// classList.push(styles[`tmplt--${size}`])

	// 	if (size === 'sm')
	// 		props.alignText = 'right'
	// }

	return { className: classList.join(' ') }
})<SliderProps>`
	${(props: SliderProps) => outputStyles(props as SliderStylesProps)}
`

Slider.displayName = 'Slider'
// Slider.Arrows = SliderArrows
// Slider.Arrow = SliderArrow
// Slider.Dots = SliderDot
// Slider.Dot = SliderDot


export {
	Slider,
}


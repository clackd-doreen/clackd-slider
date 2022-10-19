/* eslint-disable @typescript-eslint/dot-notation */
import React, {
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

// import { Component } from '@components/Structure/Component'
import { useSlider } from '@components/Slider/src'

import {
	createClassList,
	filterChildrenByDisplayName,
	getDefaultProps,
	getOptionalAttributes,
} from '@utils/helpers/components'

import type { CSSProperties } from 'react'

import type {
	SliderLightboxProps,
	SliderLightboxPropsList,
} from '@components/Slider/src'

import './SliderLightbox.module.scss'


const defaultProps: Partial<SliderLightboxProps> = {
	//
}


const SliderLightbox = forwardRef<HTMLDivElement, SliderLightboxPropsList>(
	(props, ref) => {
		const {
			children,
			className,
			displayAs,
			isDisabled,
			// specific
			isLoading,
			...rest
		} = getDefaultProps<SliderLightboxProps>(defaultProps, props)

		const {
			handleLightboxToggle,
			lightbox,
		} = useSlider()

		const lightboxImgRef = useRef<HTMLImageElement>(null)
		const [imagePosition, setImagePosition] = useState<Record<string, number>>()
		const [deactivated, setDeactivation] = useState(false)
		// const [isLightboxToggled, toggleLightboxVisibility] = useState(false)

		const isLightboxToggled = Object.hasOwn(lightbox, 'url')

		const classes = createClassList(
			'slider-lightbox',
			'',
			{ 'toggled': isLightboxToggled },
			{ deactivated },
			{ className }
		)

		const otherAttributes = {
			'data-loading': isLoading,
		} as Partial<SliderLightboxPropsList>

		const attributes = getOptionalAttributes<Partial<SliderLightboxPropsList>>(
			props,
			otherAttributes
		)

		const args = {
			...rest,
			...attributes,
		}

		const onLightboxContentClick = useCallback(() => {
			if (Object.keys(lightbox).length > 0) return

			setDeactivation(true)

			setTimeout(() => {
				handleLightboxToggle({})
				setDeactivation(false)
			}, 1300)

			setTimeout(() => {
				setImagePosition(prevState => ({
					...prevState,
					marginTop: 0,
				}))
			}, 1325)
		}, [])

		useEffect(() => {
			if (lightboxImgRef.current && Object.hasOwn(lightbox, 'url')) {
				setDeactivation(false)
				// toggleLightboxVisibility(true)

				const lightboxBoundingRect = lightboxImgRef.current.getBoundingClientRect()
				const lightboxYposition = lightboxBoundingRect.top

				const sliderYposition = Object.hasOwn(lightbox, 'yPos')
					? lightbox.yPos
					: 0

				const yPositionDifference = lightboxYposition - sliderYposition

				setImagePosition(prevState => ({
					...prevState,
					marginTop: yPositionDifference,
				}))
			}
		}, [lightbox, lightboxImgRef])


		const imageStyles = {
			marginTop: `${(imagePosition?.marginTop || 0) * -1}px`,
			minHeight: lightbox.height,
			minWidth: lightbox.width,
		} as CSSProperties

		const allowedSubcomponents = [
			'Image',
			'Text',
		]

		const filteredChildren = filterChildrenByDisplayName(children, allowedSubcomponents)


		return (
			<div
				{ ...args }
				className={ classes }
				ref={ ref }
			>
				<div
					aria-hidden="true"
					className="slider-lightbox__content"
					onClick={ () => onLightboxContentClick() }
					onKeyPress={ () => onLightboxContentClick() }
					role="presentation"
				>
					<img
						alt={ lightbox.title }
						className="slider-lightbox__image"
						ref={ lightboxImgRef }
						src={ lightbox.url }
						style={ imageStyles }
					/>
					{ filteredChildren }
				</div>
			</div>
		)
	}
)


SliderLightbox.displayName = 'SliderLightbox'

export {
	SliderLightbox,
	defaultProps,
}

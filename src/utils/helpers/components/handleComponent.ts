import React from 'react'

import { deepTypeOf } from '@utils/helpers/types'

import {
	extractFrom,
	omitKeysIn,
} from '@utils/helpers/objects'

import type { CommonProps } from '@/types/props-common'
import type { EventsList } from '@/types/events'


interface UseComponentProps<T, > extends
	EventsList<T>,
	Pick<CommonProps, 'isDisabled'> {}


const getComponentEventHandlers = <P, >(
	props: EventsList<P>,
	ignoredList: string[] = []
) => {
	let handlers = omitKeysIn(props, ignoredList)
	handlers = extractFrom(/^on[A-Z]/, handlers)

	return handlers
}

// useComponent will handle all events that are related to the component

const handleComponent = <P, >(props: P) => {
	const { isDisabled } = props as UseComponentProps<P>

	const eventHandlers = getComponentEventHandlers<P>(
		props as EventsList<P>
	) as Record<keyof EventsList<P>, () => void>

	// helpers

	const checkValidity = (func: unknown): boolean => !isDisabled
	&& !!(func && deepTypeOf(func) === 'function')

	const handleCallback = (callback: (() => void)) => {
		if (checkValidity(callback))
			callback()
	}

	// event handler functions

	// check if ref.current has blur??
	const handleBlur = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onBlur))
			eventHandlers.onBlur()

		handleCallback(callback)
	}

	// check if ref.current was clicked on
	const handleClick = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onClick))
			eventHandlers.onClick()

		handleCallback(callback)

		// if (checkValidity(eventHandlers.onClick))
		// 	console.log('handle component click')
	}

	// check if ref.current is focused
	const handleFocus = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onFocus))
			eventHandlers.onFocus()

		handleCallback(callback)
	}

	// idk tbh
	const handleMouseDown = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onMouseDown))
			eventHandlers.onMouseDown()

		handleCallback(callback)
	}

	// check if mouse has entered ref.current
	const handleMouseEnter = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onMouseEnter))
			eventHandlers.onMouseEnter()

		handleCallback(callback)
	}

	// check if mouse has left ref.current
	const handleMouseLeave = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onMouseLeave))
			eventHandlers.onMouseLeave()

		handleCallback(callback)
	}

	// idk tbh
	const handleMouseUp = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onMouseUp))
			eventHandlers.onMouseUp()

		handleCallback(callback)
	}

	// check if user has pressed the down arrow key while ref.current is focused??
	const handleKeyDown = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onKeyDown))
			eventHandlers.onKeyDown()

		handleCallback(callback)
	}

	// check if user has pressed a key while ref.current is focused??
	const handleKeyPress = (key: string, callback: (() => void)) => {
		if (checkValidity(eventHandlers.onKeyPress))
			eventHandlers.onKeyPress()

		handleCallback(callback)
	}

	// check if user has pressed the down arrow key while ref.current is focused??
	const handleKeyUp = (callback: (() => void)) => {
		if (checkValidity(eventHandlers.onKeyUp))
			eventHandlers.onKeyUp()

		handleCallback(callback)
	}

	return {
		// animation events
		// handleAnimationEnd,
		// handleAnimationIteration,
		// handleAnimationStart,

		// clipboard events
		// handleCopy,
		// handleCut,
		// handlePaste,

		// mouse drag events
		// handleDrag,
		// handleDragEnd,
		// handleDragEnter,
		// handleDragExit,
		// handleDragLeave,
		// handleDrop,

		// focus events
		handleBlur,
		handleFocus,

		// form events
		// handleChange,
		// handleInput,
		// handleInvalid,
		// handleReset,
		// handleSubmit,

		// keyboard events
		handleKeyDown,
		handleKeyPress,
		handleKeyUp,

		// mouse events
		handleClick,
		handleMouseDown,
		handleMouseEnter,
		handleMouseLeave,
		// handleMouseMove,
		// handleMouseOut,
		// handleMouseOver,
		handleMouseUp,

		// touchscreen events
		// handleTouchCancel,
		// handleTouchEnd,
		// handleTouchMove,
		// handleTouchStart,

		// generic events
		// handleError,
		// handleLoad,
		// handleSelect,
		// handleToggle,

		// misc events
		// handleScroll,
		// handleTransitionEnd,
		// handleOnWheel,
	}
}

export { handleComponent }
export type { UseComponentProps }

import { handleComponent } from '@utils/helpers'

import type { HandleSliderProps } from '../src/Slider.types'


// useComponent will handle all events that are related to the component

type SliderEventsList = keyof HandleSliderProps

const handleSlider = (
	props: HandleSliderProps
): HandleSliderProps => {
	// const {
	// 	// className,
	// 	// href,
	// 	// iconDirection,
	// 	isDisabled,
	// 	onBlur,
	// 	onClick,
	// 	onFocus,
	// 	// onKeyDown,
	// 	// onKeyPress,
	// 	// onKeyUp,
	// 	onMouseDown,
	// 	onMouseEnter,
	// 	onMouseLeave,
	// 	onMouseUp
	// } = props

	// console.log(props)
	// const useSliderTestProps = {
	// 	'className': 123
	// } as GenericPropsWithChildren<T>

	const eventHandlers = handleComponent<HandleSliderProps>(props)

	// console.log(props)

	// handlers.onBlur()
	const handleBlur = () => ''

	const combineHandlers = (type: SliderEventsList) => {
		console.log(`handler type: ${type}`)
		// const target = new EventTarget()
		// target.addEventListener('click', event => console.log(event))
		// console.log(target)
		// console.log('use Slider click')
	}

	const createHandleClick = () => {
		// console.log('handle slider click')
		// console.log(event)
		eventHandlers.handleClick(() => combineHandlers('onClick'))
		// console.log(event)
	}

	// handlers.onFocus()
	const handleFocus = () => ''

	// // handlers.onKeyPress()
	// event: KeyboardEvent
	const createHandleKeyPress = () => {
		// console.log(event.key)
		// console.log('handle slider key press')
		eventHandlers.handleKeyPress('Enter', () => combineHandlers('onKeyPress'))
	}

	return {
		onBlur: handleBlur,
		onClick: createHandleClick,
		onFocus: handleFocus,
		onKeyPress: createHandleKeyPress,
		// onClick: event => createHandleClick(event),
		// onKeyPress: event => createHandleKeyPress(event),
	}
}

export { handleSlider }

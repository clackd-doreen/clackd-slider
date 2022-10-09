const animationEventsList = [
	'onAnimationEnd',
	'onAnimationIteration',
	'onAnimationStart',
] as const

const clipboardEventsList = [
	'onCopy',
	'onCut',
	'onPaste',
] as const

const dragEventsList = [
	'onDrag',
	'onDragEnd',
	'onDragEnter',
	'onDragExit',
	'onDragLeave',
	'onDrop',
] as const

const focusEventsList = [
	'onBlur',
	'onFocus',
] as const

const formEventsList = [
	'onChange',
	'onInput',
	'onInvalid',
	'onReset',
	'onSubmit',
] as const

const genericEventsList = [
	'onError',
	'onLoad',
	'onSelect',
	'onToggle',
] as const

const keyboardEventsList = [
	'onKeyDown',
	'onKeyPress',
	'onKeyUp',
] as const

const mouseEventsList = [
	'onClick',
	'onMouseDown',
	'onMouseEnter',
	'onMouseLeave',
	'onMouseMove',
	'onMouseOut',
	'onMouseOver',
	'onMouseUp',
] as const

const touchEventsList = [
	'onTouchCancel',
	'onTouchEnd',
	'onTouchMove',
	'onTouchStart',
] as const

const scrollEventsList = ['onScroll'] as const
const transitionEventsList = ['onTransitionEnd'] as const
const wheelEventsList = ['onWheel'] as const

const eventsList = [
	...animationEventsList,
	...clipboardEventsList,
	...dragEventsList,
	...focusEventsList,
	...formEventsList,
	...genericEventsList,
	...keyboardEventsList,
	...mouseEventsList,
	...touchEventsList,
]


export {
	animationEventsList,
	clipboardEventsList,
	dragEventsList,
	eventsList,
	focusEventsList,
	formEventsList,
	genericEventsList,
	keyboardEventsList,
	mouseEventsList,
	scrollEventsList,
	touchEventsList,
	transitionEventsList,
	wheelEventsList,
}

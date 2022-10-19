import { asLiterals } from '@typings/fields'

import {
	animationEventsList,
	clipboardEventsList,
	dragEventsList,
	focusEventsList,
	formEventsList,
	genericEventsList,
	keyboardEventsList,
	mouseEventsList,
	scrollEventsList,
	touchEventsList,
	transitionEventsList,
	wheelEventsList,
} from '@utils/constants'

import type {
	AnimationEventHandler,
	ClipboardEventHandler,
	DragEventHandler,
	FocusEventHandler,
	FormEventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
	ReactEventHandler,
	TouchEventHandler,
	TransitionEventHandler,
	UIEventHandler,
	WheelEventHandler,
} from 'react'


const AnimationEventsTuple = asLiterals(animationEventsList),
	  ClipboardEventsTuple = asLiterals(clipboardEventsList),
	  DragEventsTuple = asLiterals(dragEventsList),
	  FocusEventsTuple = asLiterals(focusEventsList),
	  FormEventsTuple = asLiterals(formEventsList),
	  GenericEventsTuple = asLiterals(genericEventsList),
	  KeyboardEventsTuple = asLiterals(keyboardEventsList),
	  MouseEventsTuple = asLiterals(mouseEventsList),
	  ScrollEventsTuple = asLiterals(scrollEventsList),
	  TouchEventsTuple = asLiterals(touchEventsList),
	  TransitionEventsTuple = asLiterals(transitionEventsList),
	  WheelEventsTuple = asLiterals(wheelEventsList)

type AnimationEvents<T, > = Partial<{
	[K in typeof AnimationEventsTuple[number]]
	: AnimationEventHandler<T> }>

type ClipboardEvents<T, > = Partial<{
	[K in typeof ClipboardEventsTuple[number]]
	: ClipboardEventHandler<T> }>

type DragEvents<T, > = Partial<{
	[K in typeof DragEventsTuple[number]]
	: DragEventHandler<T> }>

type FocusEvents<T, > = Partial<{
	[K in typeof FocusEventsTuple[number]]
	: FocusEventHandler<T> }>

type FormEvents<T, > = Partial<{
	[K in typeof FormEventsTuple[number]]
	: FormEventHandler<T> }>

type GenericEvents<T, > = Partial<{
	[K in typeof GenericEventsTuple[number]]
	: ReactEventHandler<T> }>

type KeyboardEvents<T, > = Partial<{
	[K in typeof KeyboardEventsTuple[number]]
	: KeyboardEventHandler<T> }>

type MouseEvents<T, > = Partial<{
	[K in typeof MouseEventsTuple[number]]
	: MouseEventHandler<T> }>

type ScrollEvents<T, > = Partial<{
	[K in typeof ScrollEventsTuple[number]]
	: UIEventHandler<T> }>

type TouchEvents<T, > = Partial<{
	[K in typeof TouchEventsTuple[number]]
	: TouchEventHandler<T> }>

type TransitionEvents<T, > = Partial<{
	[K in typeof TransitionEventsTuple[number]]
	: TransitionEventHandler<T> }>

type WheelEvents<T, > = Partial<{
	[K in typeof WheelEventsTuple[number]]
	: WheelEventHandler<T> }>


// all event handlers as an intersection type

// interface EventsList<GenericA, GenericB> extends

type EventsList<T, > =
	& AnimationEvents<T>
	& ClipboardEvents<T>
	& DragEvents<T>
	& FocusEvents<T>
	& FormEvents<T>
	& GenericEvents<T>
	& KeyboardEvents<T>
	& MouseEvents<T>
	& ScrollEvents<T>
	& TouchEvents<T>
	& TransitionEvents<T>
	& WheelEvents<T>

// each event handler located within a union type

type SingleEvent<T, > =
	| AnimationEvents<T>
	| ClipboardEvents<T>
	| DragEvents<T>
	| FocusEvents<T>
	| FormEvents<T>
	| GenericEvents<T>
	| KeyboardEvents<T>
	| MouseEvents<T>
	| ScrollEvents<T>
	| TouchEvents<T>
	| TransitionEvents<T>
	| WheelEvents<T>


// fill missing types with https://stackoverflow.com/questions/49401866/all-possible-keys-of-an-union-type

export type {
	AnimationEvents,
	ClipboardEvents,
	DragEvents,
	EventsList,
	FocusEvents,
	FormEvents,
	GenericEvents,
	KeyboardEvents,
	MouseEvents,
	ScrollEvents,
	SingleEvent,
	TouchEvents,
}

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/


// https://stackoverflow.com/questions/54383386/react-typescript-correct-type-for-event-handler-prop
// https://blog.logrocket.com/react-onclick-event-handlers-guide/

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1349b640d4d07f40aa7c1c6931f18e3fbf667f3a/types/react/index.d.ts#L1302

// interface AnimationEvents {
// 	onAnimationEnd?: AnimationEventHandler
// 	onAnimationIteration?: AnimationEventHandler
// 	onAnimationStart?: AnimationEventHandler
// 	onTransitionEnd?: TransitionEventHandler
// }

// interface ClipboardEvents {
// 	onCopy?: ClipboardEventHandler
// 	onCut?: ClipboardEventHandler
// 	onPaste?: ClipboardEventHandler
// }

// interface FocusEvents {
// 	onBlur?: FocusEventHandler
// 	onFocus?: FocusEventHandler
// }

// handleInput(event: SyntheticEvent)
// interface FormEvents {
// 	onInput?: FormEventHandler
// 	onInvalid?: FormEventHandler
// 	onReset?: FormEventHandler
// 	onSubmit?: FormEventHandler
// }

// interface GenericEvents {
// 	// onChange?: ChangeEventHandler
// 	onError?: ReactEventHandler
// 	onLoad?: ReactEventHandler
// 	onSelect?: ReactEventHandler
// 	onToggle?: ReactEventHandler
// }

// interface KeyboardEvents {
// 	onKeyDown?: KeyboardEventHandler
// 	onKeyPress?: KeyboardEventHandler
// 	onKeyUp?: KeyboardEventHandler
// }

// interface MouseDragEvents {
// 	onDrag?: DragEventHandler
// 	onDragEnd?: DragEventHandler
// 	onDragEnter?: DragEventHandler
// 	onDragExit?: DragEventHandler
// 	onDragLeave?: DragEventHandler
// 	onDrop?: DragEventHandler
// }

// MouseEventHandler<HTMLButtonElement>
// handleClick(event: MouseEvent<HTMLButtonElement>)
// https://fettblog.eu/typescript-react/events/
// interface MouseEvents {
// 	onClick?: MouseEventHandler
// 	onMouseDown?: MouseEventHandler
// 	onMouseEnter?:MouseEventHandler
// 	onMouseLeave?: MouseEventHandler
// 	onMouseMove?: MouseEventHandler
// 	onMouseOut?: MouseEventHandler
// 	onMouseOver?: MouseEventHandler
// 	onMouseUp?: MouseEventHandler
// }

// https://bobbyhadz.com/blog/typescript-react-onscroll-event-type
// UIEvent<HTMLElement>
// interface ScrollEvents {
// 	onScroll?: UIEventHandler
// 	onWheel?: WheelEventHandler
// }

// interface TouchEvents {
// 	onTouchCancel?: TouchEventHandler
// 	onTouchEnd?: TouchEventHandler
// 	onTouchMove?: TouchEventHandler
// 	onTouchStart?: TouchEventHandler
// }


// https://stackoverflow.com/questions/66718201/typescript-pass-variable-as-generic-type-parameter

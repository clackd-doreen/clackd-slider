import type {
	ElementType,
	ReactElement,
	ReactFragment,
	ReactNode,
	ReactPortal,
} from 'react'

import type {
	alignments,
	componentSizes,
	directions,
	orientations,
	priorities,
	rotations,
	shapes,
} from '@utils/constants'


// common

type Alignment = typeof alignments[number]

// type Alignment =
// 	| 'center'
// 	| 'left'
// 	| 'right'

type CommonProps = {
	// button label

	children?: ReactNode

	// children?:
	// | ReactElement<unknown>[]
	// | ReactFragment
	// | ReactPortal
	// | boolean
	// | number
	// | string

	// adds additional classes
	className?: string

	// queue custom element for component
	// should be under CommonProps??
	// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Button.tsx
	displayAs?: ElementType

	// adds additional classes
	id?: string

	// if `true`, the component will be disabled
	isDisabled?: boolean

	// adds additional inline CSS
	style?: Record<string, unknown>
}

type ComponentSizes = typeof componentSizes[number]
type Directions = typeof directions[number]

type LoaderVariants =
	| 'progress'
	| 'pulse'
	| 'spinner'

type Orientation = typeof orientations[number]
type PriorityRating = typeof priorities[number]
type Rotation = typeof rotations[number]
type Shapes = typeof shapes[number]

type SpacingRem =
	| `${string}rem ${string}rem`
	| `${string}rem`

// for stories

type ValueOf<T> = T[keyof T]
// boolean | number | string
// type SinglePropValues = boolean | number | string | ReactNode | Record<string, unknown>
type SingleProp = readonly Record<string, unknown>

type PropName<V extends SingleProp> = Extract<keyof V, string>
type PropNamesList<V extends SingleProp> = readonly PropName<V>[]
// type PropValue<V extends SingleProp> = ValueOf<V>

type PropsGroup<V extends SingleProp> = Record<PropName<V>, unknown>
// type PropsGroup<V extends SingleProp> = Record<PropName<V>, SinglePropValues>
type PropsList<V extends SingleProp> = PropsGroup<V>[]
type PropsNestedList<V extends SingleProp> = PropsList<V>[]


export type {
	Alignment,
	CommonProps,
	ComponentSizes,
	Directions,
	LoaderVariants,
	Orientation,
	PriorityRating,
	PropName,
	PropNamesList,
	PropsGroup,
	PropsList,
	PropsNestedList,
	Rotation,
	SingleProp,
	Shapes,
	SpacingRem,
}


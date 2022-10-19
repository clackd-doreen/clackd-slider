import type * as TablerIcons from 'react-icons/tb'
// import type { IconType } from 'react-icons/lib'

import type { Directions } from './props-common'


type IconsList = keyof typeof TablerIcons
type ArrowsList = Record<Directions, IconsList>

type ArrowVariants =
	| 'arrow'
	| 'chevron'
	| 'circle'
	| 'doubleChevron'
	| 'skip'


export type {
	ArrowsList,
	ArrowVariants,
	IconsList,
}


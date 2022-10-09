import type * as FeatherIcons from 'react-icons/fi'
// import type { IconType } from 'react-icons/lib'

import type { Directions } from './props-common'


type IconsList = keyof typeof FeatherIcons
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


import type { ReactNode } from 'react'
import type { StyledComponent } from 'styled-components'

import type {
	PropName,
	PropNamesList,
	PropsList,
	PropsNestedList,
	SingleProp,
} from './props-common'

// import { RequireFields } from '@typings/fields'

// import type { Story } from '@storybook/react'
// import type { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'

import type {
	Args,
	ArgTypes,
	Story,
} from '@storybook/react'


// interface ArgType<T> extends BaseArgType {
// 	control?: Control<T> | Control<T>['type'] | Disable;
// 	defaultValue?: T;
// 	table?: Table;
// 	[key: string]: unknown;
// }

type ControlsList<T extends SingleProp> = PropNamesList<T>
type StoryOverwiteList<T extends SingleProp> = Partial<Record<PropName<T>, unknown>>

type StoryItems = {
	children?: ReactNode | string
	label: string
}

type StoryFilter<T, > = {
	filter?: string
	list: boolean[] | ControlsList<T>
	prop: PropName<T>
}

type StoryList<T extends SingleProp> = StoryFilter<T> & StoryItems & {
	disabledControls?: PropNamesList<T>
}

// list: PropsList<readonly P> | readonly StoryOptions[]
type StoryOptions<T extends SingleProp> = Omit<StoryFilter<T>, 'list'> & StoryItems & {
	controls?: {
		disable?: ControlsList<T>
		enable?: Record<'default', boolean>
		overwrite?: StoryOverwiteList<T>
	}
	list: PropNamesList<T> | readonly StoryOptions[]
}

// templates

type CommonStoryOptions<T extends SingleProp> = Omit<StoryOptions<T>, 'controls'> & {
	// args?: Record<Extract<keyof P, string>, unknown>
	args?: Args
	argTypes?: ArgTypes<T>
}

type StoryTemplate<T extends SingleProp> = CommonStoryOptions<T> & StoryList<T> & {
	component: StyledComponent
	enableDefaultValue?: boolean
	includeStories?: RegExp
	template: Story<CommonStoryOptions<T>>
}

type StoryComponent<T extends SingleProp> = CommonStoryOptions<T> & {
	items:
	| PropsList<T>
	| PropsNestedList<T>
}

type TemplateGroup<T extends SingleProp> = CommonStoryOptions<T> & {
	group: PropsList<T>
}

// controls

// type ControlOverwrite<P, > = {
// 	controlsList: Record<string, Record<string, unknown>>
// 	newValue?: boolean | number | string
// 	prop: P
// }

type ControlOverwrite<P extends SingleProp> = {
	controlsList: ArgTypes<P>
	newValue?: unknown
	prop: PropName<P>
}

type DisabledPropControl = Record<string, {
	table: { disable: true }
}>

export type {
	// CommonStoryOptions,
	ControlsList,
	ControlOverwrite,
	DisabledPropControl,
	StoryComponent,
	StoryTemplate,
	StoryFilter,
	StoryOptions,
	StoryOverwiteList,
	StoryList,
	// StoryTemplate,
	TemplateGroup,
}

import {
	Children,
	isValidElement,
} from 'react'

import type {
	FunctionComponent,
	ReactNode,
} from 'react'


const filterChildrenByDisplayName = (
	children: ReactNode,
	filter: string[]
) => {
	const allowedComponents = [] as ReactNode[]

	Children.toArray(children).forEach(child => {
		if (isValidElement(child)) {
			const { displayName } = child.type as FunctionComponent

			if (displayName) {
				if (filter.includes(displayName))
					allowedComponents.push(child)
				else
					console.error(`${displayName} is not a valid component`)
			}
		}
	})

	return allowedComponents
}

const getChildrenDisplayNames = (
	children: ReactNode
) => {
	const componentNames = [] as string[]

	Children.toArray(children).forEach(child => {
		if (isValidElement(child)) {
			const { displayName } = child.type as FunctionComponent

			if (displayName)
				componentNames.push(displayName)
		}
	})

	return componentNames
}

const findParentElementByClass = (
	element: HTMLElement | null | undefined,
	targetClass: string
): HTMLElement | null | undefined => {
	let result = null

	const parent = element?.parentElement,
		  parentClassList = parent?.classList.toString()

	if (element === null) result = null
	else if (parent === null) result = null
	else if (parent === undefined) result = undefined
	else if (parentClassList?.includes(targetClass)) result = parent
	else result = findParentElementByClass(parent, targetClass)

	return result
}

// const detectIfChildExists


export {
	getChildrenDisplayNames,
	findParentElementByClass,
	filterChildrenByDisplayName,
}

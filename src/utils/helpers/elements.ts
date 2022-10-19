import { findParentElementByClass } from './components/children'


// gets height, width, and x/y position of element

const getElementDetails = <T extends HTMLElement>(element: T, parentClass: string) => {
	const scaledElement = findParentElementByClass(element, parentClass)
	let height = 0,
		scaleValue = 1,
		width = 0,
		xPos = 0,
		yPos = 0

	if (scaledElement) {
		const elBoundingRect = scaledElement.getBoundingClientRect(),
				elStyle = window.getComputedStyle(scaledElement)

		const leftValue = elBoundingRect.left + window.scrollX,
				topValue = elBoundingRect.top + window.scrollY,
				transformValue = elStyle.transform

		const matrix = new WebKitCSSMatrix(transformValue)

		scaleValue = matrix.m22
		height = element.offsetHeight * scaleValue
		width = element.offsetWidth * scaleValue
		xPos = leftValue
		yPos = topValue
	}

	return {
		height,
		width,
		xPos,
		yPos,
	}
}


// gets element's height, width, and x/y position
// in addition, alt and src

const getImageDetails = <T extends HTMLImageElement>(target: T, parentClass: string) => {
	const elementDetails = getElementDetails<HTMLImageElement>(target, parentClass)

	return {
		...elementDetails,
		title: target.alt,
		url: target.src,
	}
}


export {
	getElementDetails,
	getImageDetails,
}

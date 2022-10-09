import {
	clean,
	extractFrom,
	omitBy,
	updateWith,
} from '@utils/helpers/objects'


const filterProps = <T extends Record<string, unknown>, U extends Record<string, unknown>>(
	props: Partial<T>,
	filter: Partial<U>
): T => {
	let filteredList = omitBy(props, filter)
	filteredList = extractFrom(/^is[A-Z]/, filteredList)

	return filteredList as T
}


const getDefaultProps = <T extends Record<string, unknown>>(
	defaultProps: Partial<T>,
	props: T
): T => updateWith(defaultProps, props) as T


const getOptionalAttributes = <T extends Record<string, unknown>>(
	defaultAttributes: T,
	attributes: Record<string, never> | T = {}
): T => {
	const {
		id,
		isDisabled,
		style,
	} = defaultAttributes

	const defaultOptional = {
		'data-disabled': isDisabled,
		id,
		style,
	} as Record<string, unknown>

	let attributesList = Object.keys(attributes).length > 0
		? updateWith(defaultOptional, attributes)
		: defaultAttributes

	attributesList = clean(attributesList)

	return attributesList as T
}


export {
	filterProps,
	getDefaultProps,
	getOptionalAttributes,
}

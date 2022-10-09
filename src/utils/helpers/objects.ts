/* eslint-disable no-extra-parens */
import { deepTypeOf } from '@utils/helpers/types'


// removes all keys whose values equal undefined

const clean = (
	list: Record<string, unknown>
) => (
	Object.fromEntries(
		Object.entries(list).filter(([_, val]) => val !== undefined)
	)
)

// check if all values within object are the same

const compareEveryTo = (
	list: Record<string, unknown> | unknown[],
	target: unknown
) => Object.values(list).every(value => value === target)

// target can be either stirng or regex

const extractFrom = <T extends Record<string, unknown>>(
	target: Record<string, unknown> | RegExp | string,
	props: T
) => (
	Array.from(
		Object.entries(props)
			.filter(([key, val]) => (
				deepTypeOf(target) === 'string'
					? key.startsWith(target as string)
					: (target as RegExp).exec(key)
				&& deepTypeOf(val) === 'function'
			))
	).reduce(
		(newObj, [key, value]) => Object.assign(newObj, { [key]: value }),
		{}
	)
)

// takes an object and check if any values in `targets` is a key in `list`
// keysIn = compares keys, valueIn = compares values
// previously was pickBy()

const keysIn = (
	list: Record<string, unknown>,
	targets: string[]
) => (
	Object.keys(targets).length > 0
		? Object.keys(list)
			.filter(key => targets.includes(key))
			.reduce((newObj: Record<string, unknown>, key) => (
				newObj[`${key}`] = list[`${key}`], newObj
			), {})
		: {}
)

// removes duplicated keys
// mergeWith makes more sensee?
// omitBy = takes in an object (compares to another object); omitKeysIn = takes a list of strings

const omitBy = (
	original: Record<string, unknown>,
	updated: Record<string, unknown>
) => (
	Object.keys(updated).length > 0
		? Object.keys(original)
			.filter(key => !Object.keys(updated).includes(key))
			.reduce((newObj: Record<string, unknown>, key) => (
				newObj[`${key}`] = updated[`${key}`], newObj
			), {})
		: original
)


const omitKeysIn = (
	list: Record<string, unknown>,
	targets: string[]
) => (
	Object.keys(targets).length > 0
		? Object.keys(list)
			.filter(key => !targets.includes(key))
			.reduce((newObj: Record<string, unknown>, key) => (
				newObj[`${key}`] = list[`${key}`], newObj
			), {})
		: list
)


// shuffles values in array

const shuffleArray = (array: unknown[]) => array
	.map(value => ({ sort: Math.random(), value }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value)


// get all keys from `updated` that don't belong in `original`
// create a new array of keys from unshared updated
// create a new object whose values will be overwritten by an object of overwritten updated

const updateWith = <T extends Record<string, unknown>>(
	original: Partial<T>,
	updated: Record<string, unknown> = {}
) => (
	Object.keys(updated).length > 0
		? Object.keys(original)
			.filter(key => !Object.keys(updated).includes(key))
			.reduce(
				(newObj: Record<string, unknown>, key) => (
					newObj[`${key}`] = original[`${key}`], newObj
				),
				Object.keys(updated).reduce(
					(newObj2: Record<string, unknown>, k) => (
						newObj2[`${k}`] = updated[`${k}`], newObj2
					),
					{}
				)
			)
		: original
)


// takes an object and check if any values in `targets` is a key in `list`
// keysIn = compares keys, valueIn = compares values

const valuesIn = (
	list: Record<string, unknown>,
	targets: string[]
) => (
	Object.keys(targets).length > 0
		? Object.fromEntries(
			Object.entries(list).filter(([_, value]) => !targets.includes(value as string))
		)
		: {}
)


export {
	clean,
	compareEveryTo,
	extractFrom,
	keysIn,
	omitBy,
	omitKeysIn,
	shuffleArray,
	updateWith,
	valuesIn,
}

// deeplyCompare
// deeplyEquals

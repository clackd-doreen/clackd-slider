
// get type of target since typeof === 'object' doesn't differentiate between
// arrays and objects

/* eslint-disable no-extra-parens */
const deepTypeOf = (target: unknown) => (
	Object.prototype.toString
		.call(target)
		.slice(8, -1)
		.toLowerCase()
)
/* eslint-enable no-extra-parens */


export {
	deepTypeOf,
}


// extracts shared keys from two types
// creates a new type from shared keys
type CommonFields<T1, T2> = Pick<T1 | T2, Extract<keyof T1, keyof T2>>

// passes a type and a tuple of keys within type
// if tuple value exists in type, make it optional
type OptionalFields<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>

// passes a type and a tuple of keys within type
// if tuple value exists in type, make it required
type RequireFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>


// https://stackoverflow.com/questions/52173855/convert-array-of-strings-to-typescript-type
// converts array of strings into type
// T[] or readonly T[]
const asLiterals = <T extends string>(arr: readonly T[]): readonly T[] => arr

// const literalExample = asLiterals(['foo', 'bar', 'lib'])
// type LiteralExampleType = {[K in (typeof literalExample)[number]]: string}


export type {
	CommonFields,
	OptionalFields,
	RequireFields,
}

export { asLiterals }

// https://stackoverflow.com/questions/69327990/how-can-i-make-one-property-non-optional-in-a-typescript-type
// type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] }
// // picking one property within type to be non-optional
// type WithRequired<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & Required<T, K>


// PickMultiple
// https://stackoverflow.com/questions/59161763/typescript-same-as-pick-but-with-multiple-fields
// const pickArray = [...fields] as const

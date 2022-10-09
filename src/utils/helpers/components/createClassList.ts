const createClassList = <T extends Record<string, unknown>>(
	block: string,
	modifierName = '',
	...rest: T[]
): string => {
	const classes = [block]

	const prefix = modifierName !== ''
		? modifierName
		: block

	const generateBemStrings = ([key, value]: [string, string]) => {
		switch (key) {
			case 'className':
				return value
						.split(' ')
						.filter((c, i, self) => self.indexOf(c) === i)
						.join(' ')
			// case 'deactivated':
			// case 'toggled':
			case 'type':
				return `${prefix}--${value.replace(/\s/g, '-')}`
			default:
				return `${prefix}__${key}--${value.replace(/\s/g, '-')}`
		}
	}

	const generateBem = ([key, value]: [string, unknown]) => {
		switch (typeof value) {
			case 'boolean':
				return value
					? `${prefix}--${key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
					: ''
			case 'string':
				return generateBemStrings([key, value])
			case 'undefined':
				return ''
			default:
				return ''
		}
	}

	if (rest.length > 0) {
		rest.forEach(value => {
			const [prop] = Object.entries(value)
			const modifiedClass = generateBem(prop)

			classes.push(modifiedClass)
		})
	}

	return classes
		.filter(c => c)
		.filter((c, i, self) => self.indexOf(c) === i)
		.join(' ')
}


export { createClassList }


// slugify
// deslugify


// title-cases string

const toTitleCase = (phrase: string) => (
	phrase
		.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
)


export {
	toTitleCase,
}

import type { SetStateAction } from 'react'


/* eslint-disable @typescript-eslint/dot-notation */

const loadFile = (item: string): Promise<File> => new Promise(
	(resolve, reject) => {
		const filename = item.substring(item.lastIndexOf('/') + 1)
		const url = new URL(item, import.meta.url)

		fetch(url)
			.then(res => res.blob())
			.then(blob => {
				const file = new File([blob], filename, { type: blob.type })
				resolve(file)

				return file
			})
			.catch(err => reject(err as Error))
	}
)

const loadImage = (item: string): Promise<HTMLImageElement> => new Promise(
	(resolve, reject) => {
		const img = new Image()
		const url = new URL(item, import.meta.url).href

		img.addEventListener('load', () => resolve(img))
		img.addEventListener('error', err => reject(err))
		img.src = url
	}
)

const getFileNames = (
	globz: Record<string, () => Promise<unknown>>,
	handleSetState: (value: SetStateAction<string[]>) => void
) => {
	for (const path in globz) {
		loadFile(path)
			.then((file: File) => handleSetState(prevName => [...prevName, file.name]))
			.catch(err => console.error(err as Error))
	}
}

const getImageUrls = (
	globz: Record<string, () => Promise<unknown>>,
	handleSetState: (value: SetStateAction<string[]>) => void
) => {
	for (const path in globz) {
		loadImage(path)
			.then((img: HTMLImageElement) => handleSetState(prevUrl => [...prevUrl, img.src]))
			.catch(err => console.error(err as Error))
	}
}


export {
	loadFile,
	loadImage,
	getFileNames,
	getImageUrls,
}

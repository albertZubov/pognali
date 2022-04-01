export const formattingСountriesToObj = (arr: string[]) =>
	arr
		.sort((a: string, b: string) => a.localeCompare(b))
		.reduce((accumulator: any, currentValue: any) => {
			const firstLetter = currentValue[0]
			accumulator[firstLetter] = accumulator[firstLetter]
				? [...accumulator[firstLetter], currentValue]
				: [currentValue]

			return accumulator
		}, {})

export const extend = (a: any, b: any) => Object.assign({}, a, b)

export const serverAdapter = (obj: any) =>
	Object.keys(obj).reduce((newObj: any, key) => {
		const value = obj[key]
		const newKey = key.replace(/\_([a-z])/g, (_, chr) => chr.toUpperCase())
		newObj[newKey] =
			value.constructor.name === 'Object' ? serverAdapter(value) : value
		return newObj
	}, {})

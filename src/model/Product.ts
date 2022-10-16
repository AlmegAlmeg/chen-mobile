export default interface Product {
	device: string
	brand: string
	image: string
	description: string
	limitedEdition: boolean | undefined
	variations: Array<Variation>
}

type Variation = {
	storage: number | string
	ram: number
	price: number
	spacialEdition: boolean | undefined
}

import * as db from "../../data/chen-mobile.json"
import Product from "../model/Product"

export function getAllBrands(): Array<string> {
	const brands: Array<string> = ["ALL"]

	db.devices.forEach(device => brands.push(device.brand.toLocaleUpperCase()))
	const uniqeBrands: Array<string> = [...new Set(brands)]

	return uniqeBrands
}

export function getProductsByBrand(brand: string): Array<Product> {
	let products: Array<Product> = db.devices as Array<Product>
	if (brand.toLocaleLowerCase() === "all") return products

	products = products.filter(product => product.brand.toLocaleLowerCase() === brand.toLocaleLowerCase())
	return products
}

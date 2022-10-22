import axios from 'axios'
// import * as db from '../../data/chen-mobile.json'
import Product from '../model/Product'

const SERVER_URL: string = 'http://localhost:5000'

export async function getAllBrands(): Promise<Array<string>> {
  const res = await axios.get(`${SERVER_URL}/brands`)
  const data = res.data.message

  if (Array.isArray(data)) return data
  else return []

  // const brands: Array<string> = ["ALL"]

  // db.devices.forEach(device => brands.push(device.brand.toLocaleUpperCase()))
  // const uniqeBrands: Array<string> = [...new Set(brands)]

  // return uniqeBrands
}

export async function getProductsByBrand(brand: string): Promise<Array<Product>> {
  const res = await axios.get(`${SERVER_URL}/brand/${brand}`)
  const data = res.data.message

  if (Array.isArray(data)) return data
  if (typeof data === 'string') console.log(data)

  return []

  // let products: Array<Product> = db.devices as Array<Product>
  // if (brand.toLocaleLowerCase() === 'all') return products

  // products = products.filter(
  //   (product) => product.brand.toLocaleLowerCase() === brand.toLocaleLowerCase()
  // )
  // return products
}

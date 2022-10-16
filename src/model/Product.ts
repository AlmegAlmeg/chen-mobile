import ProductVariation from './ProductVariation'

export default interface Product {
  device: string
  brand: string
  image: string
  description: string
  limitedEdition: boolean | undefined
  variations: Array<ProductVariation>
}

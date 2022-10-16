import Product from '../../model/Product'
import ProductVariations from '../ProductVariations/ProductVariations'
import './SingleProduct.scss'

export default function SingleProduct({ product }: SingleProductProps) {
  const imgPlaceholder: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'

  function setImageOnError(): void {
    product.image = imgPlaceholder
  }

  return (
    <div className="single-product">
      {product.limitedEdition && <div className="limited-edition">Limited Edition!</div>}
      <div className="brand">{product.brand}</div>
      <h2>{product.device}</h2>
      <img
        src={product.image}
        onError={setImageOnError}
        alt={`${product.brand} ${product.device}`}
      />
      <ProductVariations variations={product.variations} />
    </div>
  )
}

type SingleProductProps = {
  product: Product
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import Product from '../../model/Product'
import { getProductsByBrand } from '../../services/products'
import './BrandPage.scss'

export default function BrandPage() {
  const { brand } = useParams()
  const [products, setProducts] = useState<Array<Product> | undefined>([])

  useEffect(() => {
    setProducts(undefined)
    if (brand) {
      const newProd = getProductsByBrand(brand)

      setProducts(() => newProd)
    }
  }, [brand])

  return (
    <div className="brand-page">
      <h1 className="page-headline">
        {brand && brand === 'all'.toLocaleLowerCase()
          ? 'ALL PRODUCTS'
          : `PRODUCT FROM: ${brand?.toLocaleUpperCase()}`}
      </h1>
      <section className="products-grid global-main-content">
        {products &&
          products.map((product: Product, i: number) => {
            return <SingleProduct key={i} product={product} />
          })}
      </section>
    </div>
  )
}

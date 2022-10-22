import { LegacyRef, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import Product from '../../model/Product'
import { getProductsByBrand } from '../../services/products'
import './BrandPage.scss'

export default function BrandPage() {
  const { brand } = useParams()
  const [products, setProducts] = useState<Array<Product> | undefined>([])
  const [filteredProducts, setFilteredProducts] = useState<Array<Product> | undefined>([])
  const searchRef = useRef('')

  useEffect(() => {
    searchRef.current.value = ''
    setProducts(undefined)
    if (brand) {
      const newProd = getProductsByBrand(brand)

      setProducts(() => newProd)
      setFilteredProducts(() => newProd)
    }
  }, [brand])

  function handleChange(): void {
    const value = searchRef.current.value.toLocaleLowerCase()
    const filteredArr = products?.filter((prod: Product) =>
      prod.device.toLocaleLowerCase().includes(value)
    )

    setFilteredProducts(filteredArr)
  }

  return (
    <div className="brand-page">
      <h1 className="page-headline">
        {brand && brand === 'all'.toLocaleLowerCase()
          ? 'ALL PRODUCTS'
          : `PRODUCT FROM: ${brand?.toLocaleUpperCase()}`}
      </h1>
      <input
        onChange={handleChange}
        ref={searchRef}
        type="text"
        className="search-input"
        placeholder="Search for a device..."
      />
      <section className="products-grid global-main-content">
        {filteredProducts &&
          filteredProducts.map((product: Product, i: number) => {
            return <SingleProduct key={i} product={product} />
          })}
      </section>
    </div>
  )
}

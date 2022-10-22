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
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // searchRef.current.value = ''
    getProducts()
  }, [brand])

  async function getProducts(): Promise<void> {
    setIsLoading(true)
    setProducts(undefined)
    if (brand) {
      const newProd = await getProductsByBrand(brand)

      setProducts(() => newProd)
      setFilteredProducts(() => newProd)
    }
    setIsLoading(false)
  }

  function handleChange(): void {
    // const value = searchRef.current.value.toLocaleLowerCase()
    // const filteredArr = products?.filter((prod: Product) =>
    // prod.device.toLocaleLowerCase().includes(value)
    // )
    // setFilteredProducts(filteredArr)
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="brand-page">
      <h1 className="page-headline">
        {brand && brand === 'all'.toLocaleLowerCase()
          ? 'ALL PRODUCTS'
          : `PRODUCT FROM: ${brand?.toLocaleUpperCase()}`}
      </h1>
      <input
        onChange={handleChange}
        // ref={searchRef}
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

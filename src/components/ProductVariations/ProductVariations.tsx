import { useState } from 'react'
import ProductVariation from '../../model/ProductVariation'
import './ProductVariations.scss'

export default function ProductVariations({ variations }: ProductVariationsProps) {
  const [index, setIndex] = useState<number>(0)

  return (
    <div className="product-variations">
      <div className="price">{variations[index ?? 0].price}₪</div>
      <div className="variation-buttons">
        {variations &&
          variations.map((variation: ProductVariation, i: number) => {
            return (
              <button
                className={`single-variation ${index === i ? 'active' : ''} ${
                  variation.spacialEdition ? 'special-edition' : ''
                }`}
                key={i}
                onClick={() => setIndex(i)}>
                {variation.storage}/{variation.ram}
              </button>
            )
          })}
      </div>
    </div>
  )
}

type ProductVariationsProps = {
  variations: Array<ProductVariation>
}

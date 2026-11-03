import { useState } from 'react'
import type { Product } from '../../types/Product'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.scss'

type ProductListProps = {
  products: Product[]
  onSelect: (product: Product) => void
  showViewAll?: boolean
}

const categories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

export function ProductList({ products, onSelect, showViewAll = false }: ProductListProps) {
  const [startIndex, setStartIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('CELULAR')

  const visibleProducts = products.slice(startIndex, startIndex + 4)

  const canGoBack = startIndex > 0
  const canGoForward = startIndex < products.length - 4

  function previous() {
    setStartIndex((current) => Math.max(0, current - 1))
  }

  function next() {
    setStartIndex((current) => Math.min(Math.max(0, products.length - 4), current + 1))
  }

  return (
    <section className="product-list" aria-label="Produtos relacionados">
      <h2>Produtos relacionados</h2>

      {showViewAll && (
        <a href="#produtos" className="product-list__view-all">
          Ver todos
        </a>
      )}

      <div className="product-list__categories" aria-label="Categorias de produtos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`product-list__category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-list__carousel">
        <button
          type="button"
          className="product-list__arrow"
          onClick={previous}
          disabled={!canGoBack}
          aria-label="Ver produtos anteriores"
        >
          ‹
        </button>

        <div className="product-list__items">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={`${product.productName}-${startIndex + index}`}
              product={product}
              onSelect={onSelect}
            />
          ))}
        </div>

        <button
          type="button"
          className="product-list__arrow"
          onClick={next}
          disabled={!canGoForward}
          aria-label="Ver próximos produtos"
        >
          ›
        </button>
      </div>
    </section>
  )
}

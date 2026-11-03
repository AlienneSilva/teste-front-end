
import { useEffect, useState } from 'react'
import { getProducts } from './services/products'
import type { Product } from './types/Product'

import { ProductModal } from './components/ProductModal/ProductModal'
import { ProductList } from './components/ProductList/ProductList'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Banner from './components/Banner/Banner'
import Partners from './components/Partners/Partners'
import Brands from './components/Brands/Brands'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
        setError('Não foi possível carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      <Header />

      <Banner />

      <Categories />

      <main id="produtos">
        {loading && <p>Carregando produtos...</p>}

        {error && <p role="alert">{error}</p>}

        {/* Primeira vitrine */}
        {!loading && !error && (
          <ProductList
            products={products}
            onSelect={setSelectedProduct}
          />
        )}

        {/* Primeiro conjunto de banners */}
        <Partners />

        {/* Segunda vitrine */}
        {!loading && !error && (
          <ProductList
            products={products}
            onSelect={setSelectedProduct}
            showViewAll={true}
          />
        )}

        {/* Segundo conjunto de banners */}
        <Partners />

        {/* Navegue por marcas */}
        <Brands />

        {/* Terceira vitrine */}
        {!loading && !error && (
          <ProductList
            products={products}
            onSelect={setSelectedProduct}
            showViewAll={true}
          />
        )}
      </main>
      <Newsletter />

<Footer />

      {/* Modal compartilhado pelas vitrines */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}

export default App

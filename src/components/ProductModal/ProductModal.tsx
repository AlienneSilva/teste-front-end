
import { useEffect, useState } from 'react'
import type { Product } from '../../types/Product'
import './ProductModal.scss'

type ProductModalProps = {
  product: Product
  onClose: () => void
}

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    setQuantity(1)
    setShowDetails(false)
  }, [product])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-name"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <img
          className="product-modal__image"
          src={product.photo}
          alt={product.productName}
        />

        <div className="product-modal__content">
          <h2 id="modal-product-name">
            {product.productName}
          </h2>

          <strong className="product-modal__price">
            {formattedPrice}
          </strong>

          <p className="product-modal__description">
            {product.descriptionShort}
          </p>

          <button
            type="button"
            className="product-modal__details-link"
            aria-expanded={showDetails}
            aria-controls="modal-extra-details"
            onClick={() => setShowDetails((current) => !current)}
          >
            {showDetails
              ? 'Ocultar detalhes do produto'
              : 'Veja mais detalhes do produto'}
          </button>

          {showDetails && (
            <div
              id="modal-extra-details"
              className="product-modal__extra-details"
            >
              <h3>Detalhes do produto</h3>
              <p>{product.descriptionShort}</p>
            </div>
          )}

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
              >
                −
              </button>

              <span aria-live="polite">{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
            >
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

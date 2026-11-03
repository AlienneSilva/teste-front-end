import type { Product } from '../../types/Product'
import './ProductCard.scss'

type ProductCardProps = {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="product-card">
      <img className="product-card__image" src={product.photo} alt={product.productName} />

      <p className="product-card__description">{product.descriptionShort}</p>

      <strong className="product-card__price">{formattedPrice}</strong>

      <p className="product-card__shipping">Frete grátis</p>

      <button className="product-card__button" type="button" onClick={() => onSelect(product)}>
        COMPRAR
      </button>
    </article>
  )
}

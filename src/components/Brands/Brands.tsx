
import brandLogo from '../../assets/brands/econverse.svg'
import './Brands.scss'

const brands = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  name: `Econverse ${index + 1}`,
  logo: brandLogo,
}))

export default function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>

      <div className="brands__list">
        {brands.map((brand) => (
          <div className="brands__item" key={brand.id}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

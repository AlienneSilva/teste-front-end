
import './Categories.scss'

import tecnologia from '../../assets/icons/tecnologia.svg'
import supermercado from '../../assets/icons/supermercados.svg'
import bebidas from '../../assets/icons/whiskey.svg'
import ferramentas from '../../assets/icons/ferramentas.svg'
import saude from '../../assets/icons/cuidados-de-saude.svg'
import esportes from '../../assets/icons/corrida.svg'
import moda from '../../assets/icons/moda.svg'

const categories = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
]

export default function Categories() {
  return (
    <section className="categories" aria-label="Categorias de produtos">
      <div className="categories__list">
        {categories.map((category, index) => (
          <div className="categories__item" key={category.name}>
            <div className={`categories__icon ${index === 0 ? 'categories__icon--active' : ''}`}>
              <img src={category.icon} alt="" />
            </div>
            <span className={index === 0 ? 'categories__name--active' : ''}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

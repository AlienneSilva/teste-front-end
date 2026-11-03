import bannerImage from '../../assets/banner-black-friday.png'
import './Banner.scss'

function Banner() {
  return (
    <section
      className="banner"
      aria-labelledby="banner-title"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner__content">
        <h1 id="banner-title">Venha conhecer nossas promoções</h1>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#produtos" className="banner__button">
          Ver produto
        </a>
      </div>
    </section>
  )
}

export default Banner

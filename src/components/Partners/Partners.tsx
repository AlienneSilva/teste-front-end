
import parceirosBg from '../../assets/partners/parceiros-bg.png'
import './Partners.scss'

const partners = [
  { id: 1, title: 'Parceiros' },
  { id: 2, title: 'Parceiros' },
]

export default function Partners() {
function handleConfira() {
  document.getElementById('produtos')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

  return (
    <section className="partners" aria-label="Parceiros">
      <div className="partners__grid">
        {partners.map((partner) => (
          <article
            className="partners__card"
            key={partner.id}
            style={{
              backgroundImage: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.1)
              ), url("${parceirosBg}")`,
            }}
          >
            <div className="partners__content">
              <h2>{partner.title}</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur.
              </p>

              <button
                type="button"
                onClick={handleConfira}
              >
                CONFIRA
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

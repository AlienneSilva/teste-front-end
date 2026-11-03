import './Footer.scss'

import logo from '../../assets/footer/logo.svg'
import instagram from '../../assets/footer/instagram.svg'
import facebook from '../../assets/footer/facebook.svg'
import linkedin from '../../assets/footer/linkedin.svg'

const columns = [
  {
    title: 'Institucional',
    items: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    items: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    items: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Econverse" />
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__columns">
          {columns.map((column) => (
            <div className="footer__column" key={column.title}>
              <h3>{column.title}</h3>

              {column.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </footer>
  )
}

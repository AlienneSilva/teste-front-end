import { useState } from 'react'
import './Header.scss'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__benefits">
        <span>Compra 100% segura</span>
        <span>Frete grátis acima de R$ 200</span>
        <span>Parcele suas compras</span>
      </div>

      <div className="header__main">
        <button
          type="button"
          className="header__menu-button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <a className="header__logo" href="#" aria-label="Econverse - início">
          <span className="header__logo-highlight">eco</span>nverse
        </a>

        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Pesquisar">
            Buscar
          </button>
        </form>

        <div className="header__actions">
          <span>Minha conta</span>
          <span>Favoritos</span>
          <span>Carrinho</span>
        </div>
      </div>

      <nav
        id="header-navigation"
        className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
        aria-label="Navegação principal"
      >
        <a href="#categorias" onClick={() => setMenuOpen(false)}>
          Todas categorias
        </a>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>
          Supermercado
        </a>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>
          Livros
        </a>
        <a href="#categorias" onClick={() => setMenuOpen(false)}>
          Moda
        </a>
        <a href="#produtos" onClick={() => setMenuOpen(false)}>
          Lançamentos
        </a>
        <a href="#produtos" onClick={() => setMenuOpen(false)}>
          Ofertas do dia
        </a>
        <a href="#newsletter" onClick={() => setMenuOpen(false)}>
          Assinatura
        </a>
      </nav>
    </header>
  )
}

export default Header

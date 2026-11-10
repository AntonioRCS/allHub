import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__interno">
        <a href="#sobre" className="header__logo">ANTONIO.DEV</a>
        <nav className="header__nav" aria-label="Principal">
          <a href="#sobre">Sobre</a>
          <a href="#experiencias">Experiências</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a href="#contato" className="header__botao">Me contate</a>
      </div>
    </header>
  )
}

export default Header

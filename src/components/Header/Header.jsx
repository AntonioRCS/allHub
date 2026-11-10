<<<<<<< HEAD
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
=======
import "./Header.css"

const Header = () => {
	return (
		<header id="header">
			<div id="headerTitle">Antônio Ricardo</div>
			<div id="headerNavbar">
				<div className="header-btn">Inicio</div>
				<div className="header-btn">Habilidades</div>
				<div className="header-btn">Carreira</div>
				<div className="header-btn">Contato</div>
			</div>
		</header>
	);
};

export default Header;
>>>>>>> origin/main

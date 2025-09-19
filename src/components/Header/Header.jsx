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

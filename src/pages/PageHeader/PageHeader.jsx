import { NavLink, Outlet } from "react-router";
import "./PageHeader.css";

const PageHeader = () => {
	return (
		<>
			<header id="pageHeader">
				<NavLink id="title" to="homepage">All Hub</NavLink>
				<div id="pageHeaderNavbar">
					<NavLink className="page-header-button" to="little-square">Little Square</NavLink>
					<NavLink className="page-header-button">2º Projeto</NavLink>
					<NavLink className="page-header-button">3º Projeto</NavLink>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default PageHeader;

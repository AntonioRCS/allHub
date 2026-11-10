import React from "react";
import "./MainBody.css";
import Header from "../../components/header/header";
import Start from "../../components/Start/Start"
import Abilities from "../../components/Abilities/Abilities";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";

const MainBody = () => {
	return (
		<React.Fragment>
			<Header />
			<Start />
			<Abilities />
			<Experience />
			<Contact />
		</React.Fragment>
	);
};

export default MainBody;

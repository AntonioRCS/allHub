import React from "react";
import "./MainBody.css";
import Header from "../../components/header/header";
import Start from "../../components/Start/Start"
import Abilities from "../../components/Abilities/Abilities";
import Experience from "../../components/Experience/Experience";

const MainBody = () => {
	return (
		<React.Fragment>
			<Header />
			<Start />
			<Abilities />
			<Experience />
		</React.Fragment>
	);
};

export default MainBody;

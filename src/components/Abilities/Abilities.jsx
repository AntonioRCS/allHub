import "./Abilities.css";

const Abilities = () => {
	return (
		<div id="abilities">
			<div id="abilitiesTitle">Habilidades</div>
			<div id="card1" className="abilities-card">
				<div className="abilities-card-body">
					<div>ReactJS</div>
					<div className="abilities-card-star">★★★★☆</div>
				</div>
				<div className="abilities-card-body">
					<div>Javascript</div>
					<div className="abilities-card-star">★★★★☆</div>
				</div>
				<div className="abilities-card-body">
					<div>HTML5</div>
					<div className="abilities-card-star">★★★★☆</div>
				</div>
			</div>
			<div id="card2" className="abilities-card">
				<div className="abilities-card-body">
					<div>CSS</div>
					<div className="abilities-card-star">★★★★☆</div>
				</div>
				<div className="abilities-card-body">
					<div>Excel</div>
					<div className="abilities-card-star">★★★★☆</div>
				</div>
				<div className="abilities-card-body">
					<div>Atendimento ao Cliente</div>
					<div className="abilities-card-star">★★★★★</div>
				</div>
			</div>
			<div id="card3" className="abilities-card">
				<div className="abilities-card-body">
					<div>Inglês</div>
					<div className="abilities-card-star">★★★★★</div>
				</div>
				<div className="abilities-card-body">
					<div>Trabalho em Equipe </div>
					<div className="abilities-card-star">★★★★★</div>
				</div>
				<div className="abilities-card-body">
					<div>Typescript</div>
					<div className="abilities-card-star">★☆☆☆☆</div>
				</div>
			</div>
		</div>
	);
};

export default Abilities;

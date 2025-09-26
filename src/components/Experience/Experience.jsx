import "./Experience.css";

const Experience = () => {
	return (
		<div id="experience">
			<div id="experienceTitle">Experiências</div>
			<div id="experienceCard1" className="experience-body-card">
				<div className="experience-body-card-title">
					Estágio - Hospital de Clinicas da UFU
				</div>
				<div className="experience-body-card-year">
					01/2018 até 07/2018
				</div>
				<div className="experience-body-card-desc">
					Responsável pela criação de páginas para vítimas de estupro
					discorrerem sobre o ocorrido de uma maneira menos invasiva e
					traumática.
				</div>
				<div className="experience-body-card-techs">Java, Delphi</div>
			</div>
			<div id="experienceCard2" className="experience-body-card">
				<div className="experience-body-card-title">
					Estágio - Front-end Dev.: GAP Sistemas
				</div>
				<div className="experience-body-card-year">
					07/2019 até 02/2020
				</div>
				<div className="experience-body-card-desc">
					Correção de códigos antigos e criação de novas páginas WEB
					(Front-end apenas) para gestão de empresas terceirizadas.
				</div>
				<div className="experience-body-card-techs">
					Javascript, HTML, CSS e React
				</div>
			</div>
			<div id="experienceCard3" className="experience-body-card">
				<div className="experience-body-card-title">
					Estágio - Front-end Dev.: System ID
				</div>
				<div className="experience-body-card-year">
					01/2022 até 07/2022
				</div>
				<div className="experience-body-card-desc">
					Criação de novas páginas WEB (Front-end apenas) para gerenciar contagem de hidrômetros na cidade de
					Uberlândia -MG
				</div>
				<div className="experience-body-card-techs">
					Javascript, HTML, CSS e React
				</div>
			</div>
			<div id="experienceCard4" className="experience-body-card">
				<div className="experience-body-card-title">
					CLT - Atendente: Algartech
				</div>
				<div className="experience-body-card-year">
					07/2023 até 06/2025
				</div>
				<div className="experience-body-card-desc">
					Analise de contas e realização de manutenções de segurança em cartão de crédito AMEX. 
				</div>
				<div className="experience-body-card-techs">
					Pacote Office, Atendimento ao Cliente, Trabalho em Equipe
				</div>
			</div>
		</div>
	);
};

export default Experience;

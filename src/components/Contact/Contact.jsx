import "./Contact.css";

const Contact = () => {
	return (
		<div id="contact">
			<div id="contactTitle">Entre em Contato!</div>
			<div id="contactInfo">
				<div id="contactInfoTitle">Informações de Contato</div>
				<div>
					<div className="contactInfoBody">
						<div className="contactInfoBodyLogo">
							📧
						</div>
						<div>
							<div className="title">Email</div>
							<div>antoniorcs67@gmail.com</div>
						</div>
					</div>
					<div className="contactInfoBody">
						<div className="contactInfoBodyLogo">
							📱
						</div>
						<div>
							<div className="title">Telefone</div>
							<div>🇧🇷 +55 (34)99645-6304</div>
						</div>
					</div>
					<div className="contactInfoBody">
						<div className="contactInfoBodyLogo">
							📍
						</div>
						<div>
							<div className="title">Localização</div>
							<div>Brasil - Minas Gerais - Uberlândia</div>
						</div>
					</div>
				</div>
			</div>
			<div id="contactSendMe">
				<div id="contactSendMeTitle">Envio de Email</div>
				<div id="contactSendMeSubtitle">(Por enquanto apenas pelo gmail)</div>
				<div className="contactSendMeInputGroup">
					<label className="contactSendMeLabel" htmlFor="contactSendMeInputEmail">Seu Email</label>
					<input id="contactSendMeInputEmail" className="contactInput" placeholder="email@gmail.com"></input>
				</div>
				<div className="contactSendMeInputGroup">
					<label className="contactSendMeLabel" htmlFor="contactSendMeInputAbout">Assunto</label>
					<input id="contactSendMeInputAbout" className="contactInput" placeholder="Assunto..."></input>
				</div>
				<div className="contactSendMeInputGroup">
					<label className="contactSendMeLabel" htmlFor="contactSendMeInputMsg">Mensagem</label>
					<textarea id="contactSendMeInputMsg" className="contactInput" placeholder="Mensagem..." rows="10"></textarea>
				</div>
			</div>
		</div>
	);
};

export default Contact;

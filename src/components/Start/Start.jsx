import { useEffect, useState } from "react";
import "./Start.css";

const phrases = ["Desenvolvedor React", "Entusiasta de Front-End"];

const Start = () => {
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingIndex, setTypingIndex] = useState(0);
	const [phraseIndex, setPhraseIndex] = useState(0);

	useEffect(() => {
		const currentPhrase = phrases[phraseIndex];

		if (!isDeleting && typingIndex < currentPhrase.length) {
			const timer = setTimeout(() => {
				setDisplayedText(currentPhrase.substring(0, typingIndex + 1));
				setTypingIndex(typingIndex + 1);
			}, 100);

			return () => clearTimeout(timer);
		} else if (isDeleting && typingIndex > 0) {
			const timer = setTimeout(() => {
				setDisplayedText(currentPhrase.substring(0, typingIndex - 1));
				setTypingIndex(typingIndex - 1);
			}, 50);

			return () => clearTimeout(timer);
		} else if (!isDeleting && typingIndex === currentPhrase.length) {
			const timer = setTimeout(() => {
				setIsDeleting(true);
			}, 1500);

			return () => clearTimeout(timer);
		} else if (isDeleting && typingIndex === 0) {
			setIsDeleting(false);
			setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
		}
	}, [displayedText, isDeleting, typingIndex, phraseIndex]);

	return (
		<div id="start">
			<div id="startPhoto">👨‍💻</div>
			<div id="startName">Antônio Ricardo Corrêa Souza</div>
			<div>
				<div id="startTyping">{displayedText}</div>
			</div>
			<div id="startDesc">
				Especializado em desenvolvimento web moderno com foco em
				experiência do usuário e performance.
			</div>
		</div>
	);
};

export default Start;

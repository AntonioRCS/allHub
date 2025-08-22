import React, { useEffect, useRef, useState } from "react";
import "./LittleSquare.css";
import CreateArray from "../../functions/CreateArray";

const LittleSquare = () => {
	// Os ID's são as colQnt e linesQnt -1
	const mainField = useRef(null);
	const startPlayBtn = useRef(null);
	const [isRunning, setIsRunning] = useState(false);

	const [lines] = useState(CreateArray(30));
	const [col] = useState(CreateArray(35));
	const [space] = useState(5);
	const [speed] = useState(1);
	const [score, setScore] = useState(0);

	const movePlayer = (vert, horz) => {
		const currentField = mainField.current;

		let playerCord = currentField.querySelector(".cell.player");
		playerCord = playerCord.id.split("-");
		playerCord = playerCord.map((e) => Number(e));

		let futureCord = [playerCord[0] + vert, playerCord[1] + horz];
		if (futureCord[0] < 0 || futureCord[0] >= lines.length)
			futureCord[0] = playerCord[0];
		else if (futureCord[1] < 0 || futureCord[1] >= col.length)
			futureCord[1] = playerCord[1];
		currentField.children[playerCord[0]].children[playerCord[1]].className =
			"cell";
		if (
			currentField.children[futureCord[0]].children[futureCord[1]]
				.className == "cell wall"
		) {
			endPlay();
			return;
		}
		currentField.children[futureCord[0]].children[futureCord[1]].className =
			"cell player";
	};

	const handleArrowKeyPress = (event) => {
		switch (event.key) {
			case "ArrowUp":
				movePlayer(-1 * speed, 0);
				break;
			case "ArrowDown":
				movePlayer(1 * speed, 0);
				break;
			case "ArrowLeft":
				movePlayer(0, -1 * speed);
				break;
			case "ArrowRight":
				movePlayer(0, 1 * speed);
				break;
			default:
				break;
		}
	};

	const clearBoard = () => {
		const currentField = mainField.current;
		for (let i = 0; i < lines.length; i++) {
			for (let j = 0; j < col.length; j++) {
				//querySelector with ID equal 'i-j'
				currentField.querySelector(
					'[id="' + i + "-" + j + '"]'
				).className = "cell";
			}
		}
	};

	const createNewWall = () => {
		const currentField = mainField.current;
		let currentPoint = Math.floor(Math.random() * lines.length);
		const repeat = lines.length - space;
		for (let i = 0; i < repeat; i++) {
			if (currentPoint >= lines.length) currentPoint = 0;
			currentField.children[currentPoint].children[
				col.length - 1
			].className = "cell wall";
			currentPoint++;
		}
	};

	const moveWall = () => {
		const currentField = mainField.current;
		const allWall = currentField.querySelectorAll(".cell.wall");
		let wallPos = Number(allWall[0].id.split("-")[1]);
		if (wallPos !== 0) {
			allWall.forEach((elem) => {
				const wallId = elem.id.split("-");
				elem.className = "cell";
				if (
					currentField.children[wallId[0]].children[wallPos - 1]
						.className == "cell player"
				) {
					endPlay();
					return;
				}
				currentField.children[wallId[0]].children[
					wallPos - 1
				].className = "cell wall";
			});
		} else {
			allWall.forEach((elem) => {
				elem.className = "cell";
			});
			createNewWall();
			setScore((score) => score + 1);
		}
	};

	const startPlay = (e) => {
		const currentField = mainField.current;
		currentField.focus();
		setScore(0);
		e.target.disabled = true;
		currentField.children[0].children[0].className = "cell player";
		createNewWall();
		setIsRunning(true);
	};

	const endPlay = () => {
		const currentField = mainField.current;
		clearBoard();
		setIsRunning(false);
		startPlayBtn.current.disabled = false;
		currentField.blur();
	};

	useEffect(() => {
		let intervalId;
		if (isRunning) {
			intervalId = setInterval(moveWall, 80);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isRunning]);

	return (
		<div id="littleSquareBody">
			<div id="intro">
				Esse projeto realizado em React.js puro, faz com que ao iniciar
				o jogo o programa leia os Inputs do teclado (não é possível utilizar o celular, <u>por enquanto</u>) para mexer o jogador, enquanto uma parede vem para para-lo. Esse
				projeto (
				<a href="https://github.com/AntonioRCS/allHub/blob/main/src/pages/LittleSquare/LittleSquare.jsx">
					aqui
				</a>
				) foi onde eu aprendi as boas práticas da linguagem.
			</div>
			<div id="leftField">
				<button id="startPlay" ref={startPlayBtn} onClick={startPlay} className="little-square-btn">
					Começar
				</button>
				<button onClick={endPlay} className="little-square-btn">Finalizar</button>
			</div>
			<div
				id="mainField"
				tabIndex="0"
				ref={mainField}
				onKeyDown={handleArrowKeyPress}
			>
				{lines.map((itemI, indexI) => (
					<div key={itemI} id={`L-${indexI}`} className="line">
						{col.map((itemJ, indexJ) => (
							<div
								key={itemJ}
								id={`${indexI}-${indexJ}`}
								className="cell"
							></div>
						))}
					</div>
				))}
			</div>
			<div id="rightField">
				<span id="score">Pontuação: {score}</span>
			</div>
		</div>
	);
};

export default LittleSquare;

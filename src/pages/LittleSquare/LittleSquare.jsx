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
	const colQnt = 35;
	let speed = 1;
	let wallCol = colQnt - 1;
	let wallPos = [];
	let score = 0;

	const movePlayer = (vert, horz) => {
		const currentField = mainField.current;
		const playerPos = currentField.querySelector('.cell.player');
		const playerCord = playerPos.id.split('-');
		console.log(playerCord)
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
				currentField.querySelector('[id="'+i+'-'+j+'"]').className = 'cell'
			}
		}
	};

	const createNewWall = () => {
		const currentField = mainField.current;
		let currentPoint = Math.floor(Math.random() * lines.length);
		const repeat = lines.length - space;
		for(let i = 0; i < repeat; i++) {
			if(currentPoint >= lines.length) currentPoint = 0;
			currentField.children[currentPoint].children[col.length - 1].className = 'cell wall';
			currentPoint++;
		}
	};

	const moveWall = () => {
		let newWallPos = [];
		if (wallCol == 0) {
			score = score + 1;
			document.getElementById("score").innerHTML = `Pontuação: ${score}`;
			wallPos.forEach((elem) => {
				const actualCell = document.getElementById(
					`${elem[0]}-${elem[1]}`
				);
				actualCell.className = "cell";
				createNewWall();
				return;
			});
		} else {
			for (const elem of wallPos) {
				wallCol = elem[1] - 1;
				const actualCell = document.getElementById(
					`${elem[0]}-${elem[1]}`
				);
				const futureCell = document.getElementById(
					`${elem[0]}-${elem[1] - 1}`
				);
				if (futureCell.className == "cell player") {
					endPlay();
					break;
				} else {
					actualCell.className = "cell";
					futureCell.className = "cell wall";
					newWallPos.push([elem[0], elem[1] - 1]);
				}
			}
			wallPos = newWallPos;
		}
	};

	const startPlay = (e) => {
		const currentField = mainField.current;
		currentField.focus();
		score = 0;
		e.target.disabled = true;
		currentField.children[0].children[0].className = "cell player";
		createNewWall()
		// setIsRunning(true);
	};

	const endPlay = () => {
		// setIsRunning(false);
		startPlayBtn.current.disabled = false
		clearBoard();
	};

	useEffect(() => {
		let intervalId;
		if(isRunning) {
			intervalId = setInterval(moveWall, 25);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isRunning]);

	return (
		<div id="littleSquareBody">
			<div id="leftField">
				<button id="startPlay" ref ={startPlayBtn} onClick={startPlay}>
					Começar
				</button>
				<button onClick={endPlay}>Finalizar</button>
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

import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Character from "./components/character.js";
import Toolbar from "./components/toolbar.js";

function App() {
	const [chars, setChars] = useState([]);
	const url =
		"https://recruiting.verylongdomaintotestwith.ca/api/{shreyall}/character";

	var initialScores = {
		Strength: [0, 0],
		Dexterity: [0, 0],
		Constitution: [0, 0],
		Intelligence: [0, 0],
		Wisdom: [0, 0],
		Charisma: [0, 0],
	};

	const addNewCharacter = () => {
		let newCharacter = {
			index: chars.length + 1,
			scores: initialScores,
			eligibleClasses: [],
		};

		setChars([...chars, newCharacter]);
	};

	const fetchCharacters = async () => {
		try {
			await axios(url).then((resp) => {
				if (resp.status == 200) {
					setChars(resp.data.body.chars);
				} else {
					setChars([]);
				}
			});
		} catch (err) {
			console.log("error occurred fetching characters: ", err);
			setChars([]);
		}
	};

	useEffect(() => {
		fetchCharacters();
	}, []);

	const saveCharactersToAPI = async () => {
		try {
			await axios
				.post(url, {
					chars,
				})
				.then(() => {
					console.log("successfully saved characters");
				});
		} catch (err) {
			console.log("error occurred saving characters: ", err.message);
			alert("error occurred saving characters ");
		}
	};

	const onToolbarButtonClick = (butt) => {
		switch (butt) {
			case "add":
				console.log("add char");
				addNewCharacter();
				break;
			case "reset":
				console.log("reset chars");
				setChars([]);
				break;
			case "save":
				console.log("save char to api");
				saveCharactersToAPI();
				break;
		}
	};

	const saveCharState = (char, scores, eligibleClasses) => {
		const newChar = {
			index: char.index,
			scores: scores,
			eligibleClasses: eligibleClasses,
		};

		chars[char.index - 1] = newChar;
		setChars([...chars]);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>React Coding Exercise - Shreyal Shah</h1>
			</header>
			<section className="App-section">
				<Toolbar onButtonClick={onToolbarButtonClick} />
				{chars.map((char) => {
					return (
						<Character
							saveCharState={saveCharState}
							key={char.index}
							char={char}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default App;

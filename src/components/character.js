import { useState, useEffect } from "react";
import Attributes from "./attributes";
import { ATTRIBUTE_LIST } from "../consts";
import Classes from "./classes";
import Reqs from "./reqs";
import { CLASS_LIST } from "../consts";

export default function Character({ char, saveCharState }) {
	const calculateModifier = (score) => {
		return Math.floor(score / 2) - 5;
	};

	const [scores, setScores] = useState(char.scores);
	const [maxScore, setMaxScore] = useState(0);

	// returns which combination of classes are eligible
	const returnEligibleClasses = (scores) => {
		var eligibleClasses = [];

		for (const clas in CLASS_LIST) {
			var eligible = true;
			const reqs = CLASS_LIST[clas];

			for (const att in scores) {
				if (reqs[att] > scores[att][0]) {
					eligible = false;
				}
			}

			if (eligible) {
				eligibleClasses.push(clas);
			}
		}

		return eligibleClasses;
	};

	const increment = (attribute) => {
		if (maxScore == 70) {
			alert("Max score of 70 reached");
		} else {
			const newScore = scores[attribute][0] + 1;
			const modifier = calculateModifier(newScore);
			setScores((s) => ({
				...s,
				[attribute]: [newScore, modifier],
			}));

			setMaxScore((s) => s + 1);
		}
	};

	const decrement = (attribute) => {
		const newScore = scores[attribute][0] - 1;
		const modifier = calculateModifier(newScore);
		setScores((s) => ({
			...s,
			[attribute]: [newScore, modifier],
		}));

		setMaxScore((s) => s - 1);
	};

	useEffect(() => {
		saveCharState(char, scores, returnEligibleClasses(scores));
	}, [scores]);

	const [selectedClass, setSelectedClass] = useState(null);

	const handleClassClick = (clickedOn) => {
		if (selectedClass == clickedOn) {
			clickedOn = null;
		}
		setSelectedClass(clickedOn);
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					border: "2px solid white",
					margin: "20px",
					padding: "10px",
				}}
			>
				<h2>Character {char.index}</h2>
				<Attributes
					scores={scores}
					items={ATTRIBUTE_LIST}
					increment={increment}
					decrement={decrement}
				/>
				<Classes
					scores={scores}
					onClassClick={handleClassClick}
					selectedClass={selectedClass}
					eligibleClasses={returnEligibleClasses}
				/>

				{selectedClass && <Reqs clas={selectedClass} />}
			</div>
		</>
	);
}

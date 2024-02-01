import { CLASS_LIST } from "../consts";

export default function Classes({
	scores,
	onClassClick,
	selectedClass,
	eligibleClasses,
}) {
	return (
		<div style={{ border: "2px solid white", margin: "20px", padding: "10px" }}>
			<h2>Classes</h2>

			{Object.entries(CLASS_LIST).map(([key, val]) => {
				return (
					<ul key={key}>
						<div
							style={{ cursor: "pointer" }}
							onClick={() => onClassClick(key)}
						>
							<li
								key={key}
								style={{
									color: eligibleClasses(scores).includes(key)
										? "green"
										: "red",
								}}
							>
								{key}
							</li>
						</div>
					</ul>
				);
			})}

			{selectedClass && (
				<div>
					<button onClick={() => onClassClick(null)}>
						Close class requirements
					</button>
				</div>
			)}
		</div>
	);
}

export default function Toolbar({ onButtonClick }) {
	return (
		<div
			style={{
				display: "flex",
				border: "2px solid white",
				margin: "20px",
				padding: "10px",
				textAlign: "center",
			}}
		>
			<div style={{ margin: "20px" }}>
				<button
					onClick={() => {
						onButtonClick("add");
					}}
				>
					AddNewChar
				</button>
			</div>

			<div style={{ margin: "20px" }}>
				<button
					onClick={() => {
						onButtonClick("reset");
					}}
				>
					Reset All Characters
				</button>
			</div>

			<div style={{ margin: "20px" }}>
				<button
					onClick={() => {
						onButtonClick("save");
					}}
				>
					Save All Characters
				</button>
			</div>
		</div>
	);
}

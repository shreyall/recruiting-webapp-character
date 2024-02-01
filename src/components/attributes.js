export default function Attributes({ items, scores, increment, decrement }) {
	return (
		<div style={{ border: "2px solid white", margin: "20px", padding: "10px" }}>
			<h2>Attributes</h2>
			<div>
				{items.map((item) => {
					return (
						<ul key={item}>
							<li key={item} style={{ margin: "20px" }}>
								{item + `   `}
								{scores[item][0]}
								<button
									style={{ marginRight: "3px", marginLeft: "10px" }}
									onClick={() => increment(item)}
								>
									+
								</button>
								<button onClick={() => decrement(item)}>-</button>
								{`  Modifier =  ${scores[item][1]}`}
							</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
}

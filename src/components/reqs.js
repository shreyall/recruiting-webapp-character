import { CLASS_LIST } from "../consts";

export default function Reqs({ clas }) {
	const reqs = CLASS_LIST[clas];

	return (
		<div style={{ border: "2px solid white", margin: "20px", padding: "10px" }}>
			<h3>Requirements for `{clas}`</h3>
			{Object.entries(reqs).map(([key, val]) => {
				return (
					<ul key={key}>
						<li>
							{key + ` -->  `}
							{val}
						</li>
					</ul>
				);
			})}
		</div>
	);
}

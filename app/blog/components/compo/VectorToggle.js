import { useState } from "react";
import Vector from "./Vector";
import VectorCopy from "./VectorCopy";

const VectorToggle = () => {
	const [VectorToggle, setVectorToggleButton] = useState("vector"); // "play" or "pause"

	return (
		<div
			onClick={() => {
				setVectorToggleButton(VectorToggle === "vector" ? "change" : "vector");
			}}
		>
			{VectorToggle === "vector" ? <Vector /> : <VectorCopy />}
		</div>
	);
};
export default VectorToggle;

import { useState } from "react";
import Shuffle from "./Shuffle";
import ShuffleCopy from "./ShuffleCopy";

const ShuffleToggle = () => {
	const [ShuffleToggle, setShuffleToggleButton] = useState("shuffle"); 

	return (
		<div
			onClick={() => {
				setShuffleToggleButton(ShuffleToggle === "shuffle" ? "unshuffle" : "shuffle");
			}}
		>
			{ShuffleToggle === "shuffle" ? <Shuffle /> : <ShuffleCopy />}
		</div>
	);
};
export default ShuffleToggle;

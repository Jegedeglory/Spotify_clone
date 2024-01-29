import { useState } from "react";
import Pause from "./Pause";
import Play from "../compo/Play";

const PauseButon = () => {
	const [PauseButon, setPauseButton] = useState("pause"); // "play" or "pause"

	return (
		<div
			onClick={() => {
				setPauseButton(PauseButon === "pause" ? "play" : "pause");
			}}
		>
			{PauseButon === "pause" ? <Pause /> : <Play />}
		</div>
	);
};
export default PauseButon;

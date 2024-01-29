import { useState } from "react";
import Mute from "./Mute";
import Volume from "../compo/Volume";

const Unmute = () => {
	const [Unmute, setUnmuteButton] = useState("volume"); // "play" or "pause"

	return (
		<div id="VectorF"
			onClick={() => {
				setUnmuteButton(Unmute === "volume" ? "mute" : "volume");
			}}
		>
			{Unmute === "mute" ? <Mute /> : <Volume />}
		</div>
	);
};
export default Unmute;
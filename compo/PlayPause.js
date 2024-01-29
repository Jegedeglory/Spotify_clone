import { useState } from "react";
import Play from "./Play";
import Pause from "../compo/Pause";

const PlayPause = () => {
	const [playPause, setPlayPause] = useState("play"); // "play" or "pause"

	return (
		<div
			onClick={() => {
				setPlayPause(playPause === "play" ? "pause" : "play");
			}}
		>
			{playPause === "play" ? <Play /> : <Pause />}
		</div>
	);
};
export default PlayPause;

import { useState } from "react";
import Group5 from "./Group5";
import Group5Copy from "./Group5Copy";

const Group5Toggle = () => {
	const [Group5Toggle, setGroupToggleButton] = useState("togggle");

	return (
		<div
			onClick={() => {
				setGroupToggleButton(Group5Toggle === "togggle" ? "untoggle" : "togggle");
			}}
		>
			{Group5Toggle === "untoggle" ? <Group5Copy /> : <Group5 />}
		</div>
	);
};
export default Group5Toggle;

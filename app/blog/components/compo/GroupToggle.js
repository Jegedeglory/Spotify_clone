import { useState } from "react";
import Group from "./Group";
import GroupCopy from "./GroupCopy";

const GroupToggle = () => {
	const [GroupToggle, setGroup5ToggleButton] = useState("Togggle");

	return (
		<div
			onClick={() => {
				setGroup5ToggleButton(GroupToggle === "Togggle" ? "unToggle" : "Togggle");
			}}
		>
			{GroupToggle === "unToggle" ? <GroupCopy /> : <Group />}
		</div>
	);
};
export default GroupToggle;

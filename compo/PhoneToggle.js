import { useState } from "react";
import Phone from "./Phone";
import PhoneCopy from "../compo/PhoneCopy";

const PhoneToggle = () => {
	const [PhoneToggle, setPhoneToggleButton] = useState("phone"); // "play" or "pause"

	return (
		<div
			onClick={() => {
				setPhoneToggleButton(PhoneToggle === "phone" ? "toggle" : "phone");
			}}
		>
			{PhoneToggle === "phone" ? <Phone /> : <PhoneCopy />}
		</div>
	);
};
export default PhoneToggle;

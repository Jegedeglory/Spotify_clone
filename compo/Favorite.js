import { useState } from "react";
import Heart from "./Heart";
import FavoriteLike from "../compo/FavoriteLike";

const Favorite = () => {
	const [Favorite, setFavoriteButton] = useState("like"); // "play" or "pause"

	return (
		<div
			onClick={() => {
				setFavoriteButton(Favorite === "like" ? "unlike" : "like");
			}}
		>
			{Favorite === "unlike" ? <FavoriteLike /> : <Heart />}
		</div>
	);
};
export default Favorite;
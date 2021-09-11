import React from "react";

import Jumbotron from "./Jumbotron";
import Card from "./Card";

export default function MainContent() {
	return (
		<div className="container">
			<Jumbotron />
			<div className="container d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div>
			<h3>Page not found...</h3>
			<Link to="/">Home</Link>.
		</div>
	);
}

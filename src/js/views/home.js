import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Card } from "./card";

export const Home = () => {
	return (
		<div className="container">
			<div className="d-flex flex-row-reverse">
				<Link to="/addContact">
					<button className="btn btn-primary my-2">Add new Contact</button>
				</Link>
			</div>
			<Card />
		</div>
	);
}
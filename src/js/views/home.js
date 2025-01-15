import React from "react";
import "../../styles/home.css";
import { Card } from "./card";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container">
		<div className="d-flex flex-row-reverse">
			<Link to="/addContact">
				<button className="btn btn-primary my-2  ">Add new Contact</button>
			</Link>
		</div>
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
);
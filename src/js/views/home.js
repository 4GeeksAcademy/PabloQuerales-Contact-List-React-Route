import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const [contactList, setContactList] = useState([])
	useEffect(() => {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch("https://playground.4geeks.com/contact/agendas/PabloQuerales", requestOptions)
			.then((response) => response.json())
			.then((result) => setContactList(result.contacts))
			.catch((error) => console.error(error));
	}, [])

	return (
		<div className="container">
			<div className="d-flex flex-row-reverse">
				<Link to="/addContact">
					<button className="btn btn-primary my-2  ">Add new Contact</button>
				</Link>
			</div>
			{contactList.map((contact) => {
				return (
					<div className="card">
						<div className="row g-0">
							<div className="col-md-4 d-flex justify-content-center align-items-center">
								<img src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-profile" alt="..." />
							</div>
							<div className="col-md-6">
								<div className="card-body">
									<h5 className="card-title">{contact.name}</h5>
									<p className="card-text"><i className="bi bi-geo-alt-fill"></i>{contact.address}</p>
									<p className="card-text"><i className="bi bi-telephone-fill"></i>{contact.phone}</p>
									<p className="card-text"><i className="bi bi-envelope-fill"></i>{contact.email}</p>
								</div>
							</div>
							<div className="col-md-2 d-flex justify-content-center align-items-center gap-3 fs-5">
								<i className="bi bi-pencil-fill"></i>
								<i className="bi bi-trash-fill"></i>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
}
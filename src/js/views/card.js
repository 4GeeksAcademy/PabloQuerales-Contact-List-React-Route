import React from "react";

export const Card = () => {
	return (
		<div className="card">
			<div className="row g-0">
				<div className="col-md-4">
					<img src="..." className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Name</h5>
						<p className="card-text"><i className="bi bi-geo-alt-fill"></i>Direcction</p>
						<p className="card-text"><i className="bi bi-telephone-fill"></i> Number</p>
						<p className="card-text"><i className="bi bi-envelope-fill"></i>Email</p>
					</div>
				</div>
			</div>
		</div>
	)
}
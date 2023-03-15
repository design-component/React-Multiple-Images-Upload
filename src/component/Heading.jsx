import React from 'react';

function Heading() {
	return (
		<div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
			<div>
				<h1>Add Product</h1>
				<p className="breadcrumbs">
					<span>
						<a href="/">Home</a>
					</span>
					<span>
						<i className="mdi mdi-chevron-right"></i>
					</span>
					Product
				</p>
			</div>
			<div>
				<a href="/" className="btn btn-primary">
					View All
				</a>
			</div>
		</div>
	);
}

export default Heading;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="footer mt-auto">
			<div className="copyright bg-white">
				<p>
					Copyright &copy; <span id="ec-year"></span>
					<Link className="text-primary" to={'/'}>
						Admin Dashboard
					</Link>
					. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;

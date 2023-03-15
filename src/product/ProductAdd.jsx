import React, { useReducer } from 'react';
import Footer from '../component/Footer';
import Heading from '../component/Heading';
import ImagePreview from '../component/ImagePreview';
import InputFieldsBox from '../component/InputFieldsBox';
import Title from '../component/Title';
import { initialState } from './LOGIC/initialState';
import { reducer } from './LOGIC/reducer';

export default function ProductAdd() {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(state);
	const formHandler = (e) => {
		e.preventDefault();
		console.log(e);
	};
	return (
		<div className="wrapper">
			<div className="ec-page-wrapper">
				{/* <!-- CONTENT WRAPPER --> */}
				<div className="ec-content-wrapper">
					<div className="content">
						<Heading />
						<div className="row">
							<div className="col-12">
								<div className="card card-default">
									<Title />

									<div className="card-body">
										<div className="row ec-vendor-uploads">
											<ImagePreview />
											<InputFieldsBox
												dispatch={dispatch}
												formHandler={formHandler}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

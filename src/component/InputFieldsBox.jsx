import React from 'react';
import InputNumber from './formComponent/InputNumber';
import InputText from './formComponent/InputText';
import Select from './formComponent/Select';
import TextArea from './formComponent/TextArea';

function InputFieldsBox({ dispatch, formHandler }) {
	return (
		<div className="col-lg-8">
			<div className="ec-vendor-upload-detail">
				<form onSubmit={formHandler} className="row g-3">
					<div className="col-md-6">
						<InputText
							id={'nameProduct'}
							label={'Product name'}
							name={'name'}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-6">
						<Select
							id={'categories'}
							label={'Select Categories'}
							name={'categories'}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-12">
						<div className="col-12">
							<InputText
								id={'slug'}
								label={'Slug'}
								name={'slug'}
								dispatch={dispatch}
							/>
						</div>
					</div>
					<div className="col-md-12">
						<TextArea
							id={'shotDescription'}
							label={'Sort Description'}
							name={'sortDescription'}
							row={2}
							dispatch={dispatch}
						/>
					</div>

					<div className="col-md-6">
						<InputNumber
							id={'price'}
							label={'Price'}
							name={'price'}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-6">
						<InputNumber
							id={'quantity1'}
							label={'Quantity'}
							name={'quantity'}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-12">
						<TextArea
							id={'fulDetail'}
							label={'Ful Detail'}
							name={'fulDetail'}
							row={4}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-12">
						<InputText
							id={'tags'}
							label={'Product Tags'}
							name={'tags'}
							dispatch={dispatch}
						/>
					</div>
					<div className="col-md-12">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default InputFieldsBox;

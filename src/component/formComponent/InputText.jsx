import React from 'react';
import { SOLID_VALUE } from '../../product/LOGIC/actionType';

function InputText({ label, name, id, dispatch }) {
	return (
		<>
			<label for={id} className="form-label">
				{label}
			</label>
			<input
				onBlur={(e) =>
					dispatch({
						type: SOLID_VALUE,
						payload: {
							name: e.target.name,
							value: e.target.value,
						},
					})
				}
				name={name}
				id={id}
				type="text"
				className="form-control slug-title"
			/>
		</>
	);
}

export default InputText;

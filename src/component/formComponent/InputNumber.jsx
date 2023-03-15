import React from 'react';
import { SOLID_VALUE } from '../../product/LOGIC/actionType';

function InputNumber({ label, name, id, dispatch }) {
	return (
		<>
			<label htmlFor={id} className="form-label">
				{label}
			</label>
			<input
				name={name}
				type="number"
				className="form-control"
				id={id}
				onBlur={(e) =>
					dispatch({
						type: SOLID_VALUE,
						payload: {
							name: e.target.name,
							value: e.target.value,
						},
					})
				}
			/>
		</>
	);
}

export default InputNumber;

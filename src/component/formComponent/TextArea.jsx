import React from 'react';
import { SOLID_VALUE } from '../../product/LOGIC/actionType';

function TextArea({ label, name, id, row, dispatch }) {
	return (
		<>
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<textarea
				id={id}
				name={name}
				rows={row}
				className="form-control"
				onBlur={(e) =>
					dispatch({
						type: SOLID_VALUE,
						payload: {
							name: e.target.name,
							value: e.target.value,
						},
					})
				}
			></textarea>
		</>
	);
}

export default TextArea;

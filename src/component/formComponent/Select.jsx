import React from 'react';
import { SOLID_VALUE } from '../../product/LOGIC/actionType';

function Select({ label, name, id, dispatch }) {
	return (
		<>
			<label className="form-label">{label}</label>
			<select
				name={name}
				id={id}
				className="form-select"
				onChange={(e) =>
					dispatch({
						type: SOLID_VALUE,
						payload: {
							name: e.target.name,
							value: e.target.value,
						},
					})
				}
			>
				<optgroup label="Fashion">
					<option value="t-shirt">T-shirt</option>
					<option value="dress">Dress</option>
				</optgroup>
				<optgroup label="Furniture">
					<option value="table">Table</option>
					<option value="sofa">Sofa</option>
				</optgroup>
				<optgroup label="Electronic">
					<option value="phone">I Phone</option>
					<option value="laptop">Laptop</option>
				</optgroup>
			</select>
		</>
	);
}

export default Select;

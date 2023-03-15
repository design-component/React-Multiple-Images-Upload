import { SOLID_VALUE } from './actionType';
import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SOLID_VALUE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};

		default:
			break;
	}
};

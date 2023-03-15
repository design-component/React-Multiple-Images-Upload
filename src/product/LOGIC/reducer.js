import {
	SOLID_VALUE,
	SELECT_IMAGE,
	SELECT_MULTI_IMAGE,
	DELETE_MULTI_IMAGE,
} from './actionType';
import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// get all name value pair field values
		case SOLID_VALUE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};

		// get single image file and url
		case SELECT_IMAGE:
			return {
				...state,
				image: {
					file: action.payload,
					url: URL.createObjectURL(action.payload),
				},
			};

		// get multi file and url
		case SELECT_MULTI_IMAGE:
			return {
				...state,
				multiImage: [
					...state.multiImage,
					...[...action.payload].map((e, i) => ({
						id: state.multiImage.length + i + 1,
						file: e,
						url: URL.createObjectURL(e),
					})),
				],
			};
		// delete multi file and url
		case DELETE_MULTI_IMAGE:
			return {
				...state,
				multiImage: state.multiImage.filter((e) => e.id !== action.payload),
			};

		default:
			return {
				...state,
			};
	}
};

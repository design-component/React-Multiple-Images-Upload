import React from 'react';
import { DELETE_MULTI_IMAGE } from '../product/LOGIC/actionType';
// import edit from '../asset/edit.svg';
function SmallImagePreview({ image, dispatch }) {
	return (
		<div className="thumb-upload">
			<div className="thumb-edit">
				<button
					onClick={() =>
						dispatch({ type: DELETE_MULTI_IMAGE, payload: image?.id })
					}
					style={{ color: 'red', fontWeight: 'bold' }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#b01b1b"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
						width={20}
						height={20}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div className="thumb-preview ec-preview">
				<div className="image-thumb-preview">
					<img
						className="image-thumb-preview ec-image-preview"
						src={image?.url}
						alt="edit"
					/>
				</div>
			</div>
		</div>
	);
}

export default SmallImagePreview;

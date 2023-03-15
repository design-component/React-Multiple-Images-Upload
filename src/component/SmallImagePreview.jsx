import React from 'react';
import edit from '../asset/edit.svg';
import preview from '../asset/vender-upload-thumb-preview.jpg';
function SmallImagePreview() {
	return (
		<div className="thumb-upload">
			<div className="thumb-edit">
				<input
					type="file"
					id="thumbUpload01"
					className="ec-image-upload"
					accept=".png, .jpg, .jpeg"
				/>
				<label for="imageUpload">
					<img src={edit} className="svg_img header_svg" alt="edit" />
				</label>
			</div>
			<div className="thumb-preview ec-preview">
				<div className="image-thumb-preview">
					<img
						className="image-thumb-preview ec-image-preview"
						src={preview}
						alt="edit"
					/>
				</div>
			</div>
		</div>
	);
}

export default SmallImagePreview;

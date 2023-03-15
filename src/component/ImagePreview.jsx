import React from 'react';
import SmallImagePreview from './SmallImagePreview';
import edit from '../asset/edit.svg';
import preview from '../asset/vender-upload-thumb-preview.jpg';

function ImagePreview() {
	return (
		<div className="col-lg-4">
			<div className="ec-vendor-img-upload">
				<div className="ec-vendor-main-img">
					<div className="avatar-upload">
						<div className="avatar-edit">
							<input
								type="file"
								id="imageUpload"
								className="ec-image-upload"
								accept=".png, .jpg, .jpeg"
							/>
							<label for="imageUpload">
								<img src={edit} className="svg_img header_svg" alt="edit" />
							</label>
						</div>
						<div className="avatar-preview ec-preview">
							<div className="imagePreview ec-div-preview">
								<img className="ec-image-preview" src={preview} alt="edit" />
							</div>
						</div>
					</div>
					<div className="thumb-upload-set colo-md-12">
						<SmallImagePreview />
						<SmallImagePreview />
						<SmallImagePreview />
						<SmallImagePreview />
						<SmallImagePreview />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImagePreview;

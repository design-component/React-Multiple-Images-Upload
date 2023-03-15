import React from 'react';
import SmallImagePreview from './SmallImagePreview';
import edit from '../asset/edit.svg';
import preview from '../asset/vender-upload-thumb-preview.jpg';
import { SELECT_IMAGE, SELECT_MULTI_IMAGE } from '../product/LOGIC/actionType';

function ImagePreview({ dispatch, state }) {
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
								onChange={(e) =>
									dispatch({
										type: SELECT_IMAGE,
										payload: e.target.files[0],
									})
								}
							/>
							<label htmlFor="imageUpload">
								<img src={edit} className="svg_img header_svg" alt="edit" />
							</label>
						</div>
						<div className="avatar-preview ec-preview">
							<div className="imagePreview ec-div-preview">
								<img
									className="ec-image-preview"
									src={state?.image?.url || preview}
									alt="edit"
								/>
							</div>
						</div>
					</div>
					<div className="thumb-upload-set colo-md-12">
						{state?.multiImage?.map((e) => (
							<SmallImagePreview key={e.id} image={e} dispatch={dispatch} />
						))}
						<div className="thumb-upload">
							<div className="thumb-edit">
								<input
									type="file"
									id="imageUpload"
									multiple
									className="ec-image-upload"
									accept=".png, .jpg, .jpeg"
									onChange={(e) =>
										dispatch({
											type: SELECT_MULTI_IMAGE,
											payload: e.target.files,
										})
									}
								/>
								<label htmlFor="imageUpload">
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default ImagePreview;

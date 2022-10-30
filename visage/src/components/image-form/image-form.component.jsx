import React from "react";
import "./image-form.styles.css";

const ImageForm = () => {
	return (
		<div>
			<p className='f3'>
				Upload any image containing a face, and this AI will detect it!
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa-2 w-70 center' type='text' />
					<button className='w-30 grow f4 link ph3 dib black bg-white'>
						Submit!
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageForm;

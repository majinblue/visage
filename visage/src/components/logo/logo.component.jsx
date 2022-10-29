import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.styles.css";
import brain from "./brain.png";

const Logo = () => {
	return (
		<Tilt
			className='tilt-container br2 shadow-2'
			style={{ height: "150px", width: "150px" }}
		>
			<div className='tilt br2' style={{ height: "150px", width: "150px" }}>
				<img src={brain} alt='logo' />
			</div>
		</Tilt>
	);
};

export default Logo;

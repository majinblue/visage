import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageForm from "./components/image-form/image-form.component";
import Rank from "./components/rank/rank.component";
import "./App.css";
import "tachyons";
import ParticlesBg from "particles-bg";
function App() {
	return (
		<div className='App'>
			<div className='navigation-container'>
				<Logo />
				<Navigation />
			</div>
			<Rank />
			<ImageForm />
			{/* 
       <FaceRecognition /> */}
			<ParticlesBg color='#ffffff' type='cobweb' bg={true} />
		</div>
	);
}

export default App;

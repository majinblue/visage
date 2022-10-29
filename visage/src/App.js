import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageForm from "./components/image-form/image-form.component";
import "./App.css";
import "tachyons";

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Logo />
			<ImageForm />
			{/* 
       <FaceRecognition /> */}
		</div>
	);
}

export default App;

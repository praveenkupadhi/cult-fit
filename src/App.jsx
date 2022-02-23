import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>Hello</h1>
			<section
				style={{
					height: "150vh",
				}}
			></section>
			<Footer />
		</div>
	);
}

export default App;

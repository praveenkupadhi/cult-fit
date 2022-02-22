import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { SecondaryNav } from "./components/Navbar/SecondaryNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNav />
      <h1>Hello</h1>
      <section
        style={{
          height: "150vh",
        }}
      ></section>
    </div>
  );
}

export default App;

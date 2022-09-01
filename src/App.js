import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import "./styles/styles.scss";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
        </div>
    );
}

export default App;

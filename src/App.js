import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home  from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="bg-customBlack min-h-screen">
            <Router>
                <div className="text-customWhite relative">
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

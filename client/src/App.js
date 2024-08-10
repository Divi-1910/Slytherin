import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Playground from "./Components/Pages/Playground/Playground";
import Battleground from "./Components/Pages/Battleground";
import ProblemDescription from "./Components/Pages/Arena";
import HomePage from "./Components/Homepage/HomePage";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
				<Route path="/" element={<HomePage/>} />
					<Route path="/playground" element={<Playground />} />
					<Route path="/battleground" element={<Battleground />} />
					<Route path="/arena" element={<ProblemDescription />} />
					
				</Routes>
			</div>
		</Router>
	);
}

export default App;

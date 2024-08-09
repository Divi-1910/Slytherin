import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Playground from "./Components/Pages/Playground/Playground";
import Battleground from "./Components/Pages/Battleground";
import Arena from "./Components/Pages/Arena";
import CodeEditor from "./Components/CodeEditor/CodeEditor";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/playground" element={<Playground />} />
					<Route path="/battleground" element={<Battleground />} />
					<Route path="/arena" element={<Arena />} />
				</Routes>
				<CodeEditor />
			</div>
		</Router>
	);
}

export default App;

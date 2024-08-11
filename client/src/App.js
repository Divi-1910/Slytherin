import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Playground from "./Components/Pages/Playground/Playground";
import HomePage from "./Components/Homepage/HomePage";
import QuestionList from "./Components/Pages/Arena/QuestionList";
import QuestionDetail from "./Components/Pages/Arena/QuestionDetail";
import AddQuestion from "./Components/Pages/Arena/AddQuestion";
import Battleground from "./Components/Pages/Battleground/Battleground";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/playground" element={<Playground />} />
					<Route path="/battleground" element={<Battleground />} />
					<Route path="/arena" element={<QuestionList />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/add-question" element={<AddQuestion />} />
					<Route path="/question/:id" element={<QuestionDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

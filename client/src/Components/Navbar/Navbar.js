import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-gradient-to-r from-green-900 via-green-800 to-gray-800 shadow-lg p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<img
						src={require("../../assets/slytherin_logo.png")}
						alt="Slytherin Logo"
						className="h-10 w-10 rounded-full border-2 border-green-600 shadow-sm hover:shadow-green-400 transition-shadow duration-300"
					/>
					<span className="text-gray-200 text-2xl font-extrabold tracking-wide font-serif">
						Slytherin
					</span>
				</div>
				<div className="flex space-x-6">
					<Link
						to="/playground"
						className="text-gray-300 hover:text-green-400 hover:underline hover:underline-offset-4 transition-colors duration-300">
						Playground
					</Link>
					<Link
						to="/battleground"
						className="text-gray-300 hover:text-green-400 hover:underline hover:underline-offset-4 transition-colors duration-300">
						Battleground
					</Link>
					<Link
						to="/arena"
						className="text-gray-300 hover:text-green-400 hover:underline hover:underline-offset-4 transition-colors duration-300">
						Arena
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

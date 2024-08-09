import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-green-900 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<img
						src={require("../../assets/slytherin_logo.png")}
						alt="Slytherin Logo"
						className="h-8 w-8 mr-2"
					/>
					<span className="text-gray-200 text-xl font-bold">Slytherin</span>
				</div>
				<div className="flex space-x-4">
					<Link to="/playground" className="text-gray-300 hover:text-white">
						Playground
					</Link>
					<Link to="/battleground" className="text-gray-300 hover:text-white">
						Battleground
					</Link>
					<Link to="/arena" className="text-gray-300 hover:text-white">
						Arena
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

import React from "react";
import {Link} from "react-router-dom";
import slytherinLogo from "../../assets/slytherin_logo.png";

function Navbar() {
	return (
		<nav className="bg-gradient-to-r from-green-900 via-green-800 to-black shadow-2xl border-b border-green-600">
			<div className="container mx-auto flex justify-between items-center p-4">
				<div className="flex items-center space-x-4">
					<img
						src={slytherinLogo}
						alt="Slytherin Logo"
						className="h-12 w-12 rounded-full border-4 border-green-700 shadow-lg transform transition-transform hover:scale-110"
					/>
					<span className="text-white text-4xl font-extrabold tracking-wide font-serif shadow-md">
						<span className="text-green-300">Slytherin</span>
					</span>
				</div>
				<div className="flex space-x-8">
					<Link
						to="/"
						className="text-white text-xl font-semibold transition-transform transform hover:scale-105 hover:text-green-300 hover:underline hover:underline-offset-4">
						Home
					</Link>
					<Link
						to="/playground"
						className="text-white text-xl font-semibold transition-transform transform hover:scale-105 hover:text-green-300 hover:underline hover:underline-offset-4">
						Playground
					</Link>
					<Link
						to="/arena"
						className="text-white text-xl font-semibold transition-transform transform hover:scale-105 hover:text-green-300 hover:underline hover:underline-offset-4">
						Arena
					</Link>
					<Link
						to="/battleground"
						className="text-white text-xl font-semibold transition-transform transform hover:scale-105 hover:text-green-300 hover:underline hover:underline-offset-4">
						Battleground
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

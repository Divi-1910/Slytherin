import React from "react";
import slytherin1 from "../../assets/slytherin1.jpg";
import slytherin2 from "../../assets/slytherin2.jpg";
import slytherin3 from "../../assets/slytherin3.jpg";
import slytherin4 from "../../assets/slytherin4.jpg";

const HomePage = () => {
	return (
		<div className="bg-gray-900 text-white">
			<div className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-black py-24">
				<img
					src={slytherin4}
					alt="Hero Background"
					className="absolute inset-0 w-full h-full object-cover opacity-30"
				/>
				<div className="relative z-10 container mx-auto px-6 text-center">
					<h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">
						Welcome to the Slytherin Chamber
					</h1>
					<p className="text-3xl italic mb-8 drop-shadow-lg">
						"Where Ambition , Cunning and Pride Meets Code"
					</p>
					<p className="text-xl mb-12 drop-shadow-lg">
						Awaken Your Inner Coder's Magic with Enchanted Challenges
					</p>
				</div>
			</div>

			<div className="py-24 bg-gray-800">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-extrabold text-green-300 mb-6">
						Magical Coding Playground
					</h2>
					<p className="text-xl mb-10">
						Unleash spells of code in our editor. Craft, test, and see your code
						bring magic come to life.
					</p>
					<img
						src={slytherin3}
						alt="Code Editor"
						className="mx-auto mb-8 w-96 h-64 rounded-lg shadow-lg border border-green-700"
					/>
				</div>
			</div>

			<div className="py-24 bg-gray-900">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-extrabold text-green-300 mb-6">
						The Slytherin Arena of Code
					</h2>
					<p className="text-xl mb-10">
						Master the dark arts of coding. Face magical challenges and prove
						your prowess.
					</p>
					<img
						src={slytherin2}
						alt="Problem Solving"
						className="mx-auto mb-8 w-96 h-64 rounded-lg shadow-lg border border-green-700"
					/>
				</div>
			</div>

			<div className="py-24 bg-gray-800">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-extrabold text-green-300 mb-6">
						The Dark Coding Battleground
					</h2>
					<p className="text-xl mb-10">
						Engage in fierce duels with fellow coders. Ascend the ranks and
						claim your place among the elite.
					</p>
					<img
						src={slytherin1}
						alt="Contest"
						className="mx-auto mb-8 w-96 h-64 rounded-lg shadow-lg border border-green-700"
					/>
				</div>
			</div>

			<div className="py-24 bg-gray-900">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-5xl font-extrabold text-green-300 mb-12">
						Enchanting Words from Our Coding Wizards
					</h2>
					<div className="flex flex-wrap justify-center gap-12">
						<div className="w-full sm:w-1/3 max-w-md p-8 bg-gray-700 rounded-lg shadow-lg transform transition hover:scale-105">
							<p className="text-lg mb-4 italic">
								"This enchanted platform has elevated my coding skills to new
								heights!"
							</p>
							<p className="font-semibold text-green-300">- Sorcerer A</p>
						</div>
						<div className="w-full sm:w-1/3 max-w-md p-8 bg-gray-700 rounded-lg shadow-lg transform transition hover:scale-105">
							<p className="text-lg mb-4 italic">
								"The Dark Coding Battleground is a thrilling arena for magical
								challenges!"
							</p>
							<p className="font-semibold text-green-300">- Sorcerer B</p>
						</div>
						<div className="w-full sm:w-1/3 max-w-md p-8 bg-gray-700 rounded-lg shadow-lg transform transition hover:scale-105">
							<p className="text-lg mb-4 italic">
								"Slytherin's spellbinding coding journey has been nothing short
								of magical!"
							</p>
							<p className="font-semibold text-green-300">- Sorcerer C</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-green-900 text-white py-12">
				<div className="container mx-auto px-6 text-center">
					<div className="mb-8">
						<h4 className="text-2xl font-semibold mb-2">
							About the Chamber of Slytherin
						</h4>
						<p className="text-lg">
							Enter the Chamber of Slytherin, where the mystical arts of coding
							blend with ambition and cunning. Your journey to coding mastery
							begins here.
						</p>
					</div>
					<div className="mb-8">
						<h4 className="text-2xl font-semibold mb-2">
							Contact the Dark Arts
						</h4>
						<p className="text-lg">
							Email: darkarts@Slytherin.com | Social: @Slytherin
						</p>
					</div>
					<div className="mb-8">
						<h4 className="text-2xl font-semibold mb-2">Magical Links</h4>
						<p className="text-lg">
							<a href="#playground" className="underline hover:text-green-400">
								The Magical Playground
							</a>{" "}
							|{" "}
							<a href="#arena" className="underline hover:text-green-400">
								The Enchanted Arena
							</a>{" "}
							|{" "}
							<a
								href="#battleground"
								className="underline hover:text-green-400">
								The Dark Battleground
							</a>
						</p>
					</div>
					<p className="text-sm">&copy; 2024 Slytherin. All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

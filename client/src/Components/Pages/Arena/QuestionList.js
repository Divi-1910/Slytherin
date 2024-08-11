import React, {useEffect, useState} from "react";
import {fetchQuestions} from "../../../services/api";
import {Link} from "react-router-dom";
import {FaRegQuestionCircle} from "react-icons/fa";

const QuestionList = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const getQuestions = async () => {
			try {
				const data = await fetchQuestions();
				setQuestions(data);
			} catch (error) {
				console.error("Error fetching questions:", error);
			}
		};
		getQuestions();
	}, []);

	return (
		<div className="p-6 bg-gray-900 text-white min-h-screen">
			<h1 className="text-3xl font-extrabold mb-6 text-green-500">
				Question List
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{questions.map((question) => (
					<div
						key={question._id}
						className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
						<Link
							to={`/question/${question._id}`}
							className="flex items-center text-green-300 hover:text-green-500 transition-colors duration-300">
							<FaRegQuestionCircle className="mr-3 text-xl" />
							<span className="font-semibold text-lg">{question.title}</span>
						</Link>
					</div>
				))}
			</div>
			<Link
				to="/add-question"
				className="mt-6 inline-block bg-green-600 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300">
				Add New Question
			</Link>
		</div>
	);
};

export default QuestionList;

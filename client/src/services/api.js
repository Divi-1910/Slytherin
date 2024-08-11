import axios from "axios";

const API_URL = "http://localhost:5000/api/arena/questions";

export const fetchQuestions = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching questions:", error);
		throw error;
	}
};

export const fetchQuestionById = async (id) => {
	try {
		const response = await axios.get(`${API_URL}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching question with ID ${id}:`, error);
		throw error;
	}
};

export const createQuestion = async (questionData) => {
	try {
		const response = await axios.post(API_URL, questionData);
		return response.data;
	} catch (error) {
		console.error("Error creating question:", error);
		throw error;
	}
};

export const updateQuestion = async (id, questionData) => {
	try {
		const response = await axios.put(`${API_URL}/${id}`, questionData);
		return response.data;
	} catch (error) {
		console.error(`Error updating question with ID ${id}:`, error);
		throw error;
	}
};

export const deleteQuestion = async (id) => {
	try {
		const response = await axios.delete(`${API_URL}/${id}`);
		return response.data;
	} catch (error) {
		console.error(`Error deleting question with ID ${id}:`, error);
		throw error;
	}
};

import axiosInstance from "../libs/axiosInstance.js"

export function get_single_todo (id) {
	return axiosInstance.get(`/todos/${id}`)
}

export function get_all_todos () {
	return axiosInstance.get(`/todos`)
}
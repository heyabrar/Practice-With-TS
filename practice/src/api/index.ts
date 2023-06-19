import axios from "axios";
import TodoApiUrl from "../utils/constants.utils";

const getTodo = () => {
  return axios.get(TodoApiUrl);
};

const postTodo = (payload: { task: string; status: boolean }) => {
  return axios.post(TodoApiUrl, payload);
};

const deleteTask = (id: number) => {
  return axios.delete(`${TodoApiUrl}/${id}`);
};

export { getTodo, postTodo, deleteTask };

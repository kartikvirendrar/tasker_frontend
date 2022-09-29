import axios from "axios";

export const createTask = async (task) =>
  await axios.post(`https://tasker--backend.herokuapp.com/api/task`, task);

export const getTasks = async (id) => 
  await axios.get(`https://tasker--backend.herokuapp.com/api/getTasks/${id}`);

export const getTaskById = async (id) => 
  await axios.get(`https://tasker--backend.herokuapp.com/api/task/${id}`);

export const updateTask = async (id, task) =>
  await axios.post(`https://tasker--backend.herokuapp.com/api/task/update/${id}`, task);

export const deleteTask = async (id) =>
  await axios.get(`https://tasker--backend.herokuapp.com/api/task/delete/${id}`);

export const toggleCompleted = async (taskid) => 
  await axios.get(`https://tasker--backend.herokuapp.com/api/toggle/${taskid}`);
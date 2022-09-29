import axios from "axios";

export const saveEmail = async (email) =>
  await axios.post(`https://tasker--backend.herokuapp.com/api/saveemail`, {email});
import axios from "axios";

export const findUserByEmail = async (email) => {
    return await axios.post(
      `https://tasker--backend.herokuapp.com/api/check-user-email`,
      {email}
    );
};
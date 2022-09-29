import axios from "axios";

export const createOrUpdateUser = async (authtoken,name) => {
    return await axios.post(
      `https://tasker--backend.herokuapp.com/api/create-or-update-user`,
      {name},
      {
        headers: {
          authtoken,
        },
      }
    );
};

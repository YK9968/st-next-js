import axios from "axios";

export const fetchDataContacts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDataContactsById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

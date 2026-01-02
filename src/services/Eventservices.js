// src/api/portfolio.js
import axios from "axios";

export const getPortfolio = async (username) => {
  try {
    const res = await axios.get(`https://backend-9cax.onrender.com/api/portfolio/${username}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return null;
  }
};

// src/api/portfolio.js
import axios from "axios";

export const getPortfolio = async (username) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/portfolio/${username}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return null;
  }
};

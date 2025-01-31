import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your actual API
  headers: { "Content-Type": "application/json" },
});

// Fetch user profile (used in protected routes)
export const fetchUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");

  const { data } = await api.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

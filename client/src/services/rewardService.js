import axios from "axios";

export async function getRewardsData() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return {
      userPoints: 0,
      rewards: [],
    };
  }

  const response = await axios.get("http://localhost:5000/api/rewards/catalog", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
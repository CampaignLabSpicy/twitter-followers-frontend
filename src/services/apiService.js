import axios from "axios";
import { ACTIVIST_THRESHOLD, API_URL } from "../constants";

const handleTwitterErrors = e => {
  if (e.response && e.response.status) {
    if (e.response.status === 401 || e.response.status === 403) {
      return null;
    }
    if (e.response.status === 429) {
      throw new Error(
        "You are being rate limited. Please try again in 15 minutes."
      );
    }
  }
  throw new Error(e);
}

export const fetchPostcodeData = async (pc) => {
  try {
    const { location } = await axios.get(`${API_URL}/api/?pc=${pc}`);
    return location || null;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchUserData = async () => {
  let data = null;
  try {
    ({ data } = await axios.get(`${API_URL}/api`, { withCredentials: true }));
  } catch (e) {
    handleTwitterErrors(e);
  }
  if (!data) {
    return null;
  }
  if (data.errors) {
    throw new Error(data.errors.map(e => e.message).join(", "));
  }
  const percentage = Math.round((data.matched / data.total) * 100);
  const userType = percentage > ACTIVIST_THRESHOLD ? "Mobiliser" : "Converter";
  return { percentage, userType, ...data };
};

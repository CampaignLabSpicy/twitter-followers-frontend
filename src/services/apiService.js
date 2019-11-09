import axios from 'axios'
import { API_URL } from '../constants'

export const fetchUserData = async () => {
  let data = null
  try {
    console.log(`Try: ${API_URL}/api`);
    ({ data } = await axios.get(`${API_URL}/api`, { withCredentials: true }))
    console.log(`Tried: ${API_URL}/api`);
  } catch (e) {
    console.log(Object.keys(e));
    console.log(e.toJSON());
    console.log(e);
    console.log(e);
    console.log('GET Error:',e);
    if (e.response && e.response.status) {
      if (e.response.status === 401 || e.response.status === 403) {
        return null
      }
      if (e.response.status === 429) {
        throw new Error('You are being rate limited. Please try again in 15 minutes.')
      }
    }
    throw new Error(e)
  }
  if (!data) {
    return null
  }
  if (data.errors) {
    throw new Error(data.errors.map(e => e.toString()).join(', '))
  }
  return data
}

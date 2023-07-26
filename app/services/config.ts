const BASE_URL = "http://localhost:8000";

export default {
  API_BASE_URL: process.env.API_BASE_URL || `${BASE_URL}/api-v1/schools`,
};

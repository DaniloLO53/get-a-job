import api from './api';

export async function listJobs() {
  const response = await api.get("/jobs");
  return response.data;
}

import axios from 'axios';

export const api = axios.create({
  // 크램플린 배포 BASE_URL
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

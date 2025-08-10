import axios from 'axios';

const BASE_URL = 'http://localhost:8000/acts';

export const fetchMainCategories = () =>
  axios.get(`${BASE_URL}/main-categories`);

export const fetchSubcategories = (mainCategory) =>
  axios.get(`${BASE_URL}/main-category/${encodeURIComponent(mainCategory)}`);

export const fetchActsByCategory = (category) =>
  axios.get(`${BASE_URL}/category/${encodeURIComponent(category)}`);

export const fetchSectionsByActId = (actId) =>
  axios.get(`${BASE_URL}/${actId}/sections`);

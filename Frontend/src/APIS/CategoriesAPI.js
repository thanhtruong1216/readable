const api = "http://dev.localhost:3001";
let token = 'sometoken';

export const getAllCategories = (categories) => {
  return fetch(`${api}/categories`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET', 
    mode: 'cors'
  });
}
export const getCategoryPosts = (category) => {
  return fetch(`${api}/{category}/posts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET', 
    mode: 'cors'
  });
}

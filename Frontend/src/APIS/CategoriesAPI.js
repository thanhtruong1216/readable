const api = "http://local.dev:3001";
let token = 'sometoken';

export const getAllCategories = (categories) => {
  return fetch(`${api}/categories`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET', 
    mode: 'cors',
    body: JSON.stringify(categories)
  });
}
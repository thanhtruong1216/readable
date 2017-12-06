const api = "http://local.dev:3001";
let token = 'sometoken';

export const createPost = (post) =>
  fetch(`${api}/posts`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'POST', 
    body: JSON.stringify(post)
  });

export const getAll = (posts) => 
fetch(`${api}/posts`, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token
  },
  mode: 'cors',
  method: 'GET', 
  body: JSON.stringify(posts)
})
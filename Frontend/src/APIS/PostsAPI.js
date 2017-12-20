
const api = "http://local.dev:3001";
let token = 'sometoken';

export const createPost = (post) => {
  return fetch(`${api}/posts`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST', 
    mode: 'cors',
    body: JSON.stringify(post)
  });
}
  

export const getAll = () => {
  return fetch(`${api}/posts`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'GET'
  })
}

export const removePost = (post) => {
  return fetch(`${api}/posts/${post.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'DELETE', 
    mode: 'cors'
  });
}

export const editPost = (post) => {
  return fetch(`${api}/posts/${post.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'PUT', 
    mode: 'cors',
    body: JSON.stringify(post)
  });
}

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

export const getAllComments = (post) => {
  return fetch(`${api}/posts/${post.id}/comments`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'GET'
  })
}


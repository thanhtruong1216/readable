const api = "http://dev.localhost:3001";
let token = 'sometoken';

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

export const getDetailsPost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'GET'
  })
}

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

export const editPost = ({id, title, body, category}) => {
  return fetch(`${api}/posts/${id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'PUT', 
    mode: 'cors',
    body: JSON.stringify({title, body, category})
  });
}

export const voteUp = (post) => {
  return fetch(`${api}/posts/${post.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST', 
    mode: 'cors',
    body: JSON.stringify({
      option: "upVote"
    })
  });
}

export const voteDown = (post) => {
  return fetch(`${api}/posts/${post.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST', 
    mode: 'cors',
    body: JSON.stringify({
      option: "downVote"
    })
  });
}

export const getDetailPost = (post) => {
  return fetch(`${api}/posts/${post.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'GET'
  })
}





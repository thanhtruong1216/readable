const api = "http://dev.localhost:3001";
let token = 'sometoken';

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

export const createComment = (comment) => {
  return fetch(`${api}/comments`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST', 
    mode: 'cors',
    body: JSON.stringify(comment)
  });
}
export const removeComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'DELETE', 
    mode: 'cors'
  });
}
export const editComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'PUT', 
    mode: 'cors',
    body: JSON.stringify(comment)
  });
}

export const voteUp = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { 
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

export const voteDown = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, { 
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

export const getDetailComment = (comment) => {
  return fetch(`${api}/comments/${comment.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    mode: 'cors',
    method: 'GET'
  })
}



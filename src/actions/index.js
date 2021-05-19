export const increment = () => {
    console.log('increment')
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};


export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: 'FETCH_POSTS',
          payload: posts
        })
      );
  };


export const deleteMeToo =(id)=>dispatch=>{
  console.log('deleted ID is',id);
}

export const createPost = () => dispatch => {
  console.log('CreatePost')
  let postData = { "name":"ubed Kazi", "age":12, "colour":"blue" }

  fetch('https://crudcrud.com/api/4dd0696558aa40108266494c71d36aee/unicorns', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: 'NEW_POST',
        payload: post
      })
      
    );
};
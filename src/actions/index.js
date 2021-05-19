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

export const createPost = () => dispatch => {

  let postData = { "title":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
   "body":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
   }

  fetch('https://jsonplaceholder.typicode.com/posts', {
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

//Delete api will not work because of server issue
export const deletePost =(id)=>dispatch=>{
  console.log('deleted ID is',id);
  dispatch({
    type: 'DELETE_POST',
    payload: id
  })
}
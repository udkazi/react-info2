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
    console.log('fetchPosts')
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: 'FETCH_POSTS',
          payload: posts.data
        })
      );
  };



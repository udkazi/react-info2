import React, { useEffect,useState } from 'react';

function Details({match}) {

    const [post, setPost] = useState('');

    useEffect(() => {
        console.log(match,"match")
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then(response => response.json())
        .then(json => setPost(json))
      }, [])


    return (
        <div>
           <h1>Details...</h1> 
            <p>{post.title}</p>
        </div>
    )
}

export default Details
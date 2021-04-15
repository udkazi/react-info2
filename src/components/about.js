import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';


function About() {

    const [post, setPost] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPost(json))
      }, [])


    return (
        <div>
            <h1>About</h1>
            {post.length > 0 &&
            <div>
                {post.map(ls => (
                <div key={ls.id}>
                    <div scope="row">{ls.colour}</div>
                    <div><Link to={`/about/${ls.id}`}> {ls.id} </Link></div>
                    
                   
                </div>
                ))}
            </div>
            }
        </div>
    )
}


export default About;

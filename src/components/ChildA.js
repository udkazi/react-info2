import React, {useEffect} from 'react';
import useFetch from './useFetch';
let renderCount = 0;
function ChildA() {

    const { loading, error, data = [] } = useFetch(
        'https://hn.algolia.com/api/v1/search?query=react'
      );
      
    useEffect(()=>{
        console.log('inside A');
        renderCount++;
    })

    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            Child A;
            RenderCount: {renderCount}
            <ul>
            {data?.hits?.map(item => (
            <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
      </ul>
        </div>
    )
}

export default ChildA;

import React, { useEffect,useState,useContext } from 'react';
import {ThingsContextApi} from '../context-api/ThingsContextApi';
import Child from './Child';

function List() {

    const [list, setList] = useState(null);
    const {movies} = useContext(ThingsContextApi);
    console.log('movies',movies);
    return (
        <div>
            <p>List here...</p>

            <Child />
        </div>
    )
}

export default List;
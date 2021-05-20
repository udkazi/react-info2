import React, { useEffect,useState,useContext } from 'react';
import {ThingsContextApi} from '../context-api/ThingsContextApi';

function List() {

    const [list, setList] = useState(null);
    const {movies} = useContext(ThingsContextApi);
    console.log('movies',movies);
    return (
        <div>
            <p>List here...</p>
        </div>
    )
}

export default List;
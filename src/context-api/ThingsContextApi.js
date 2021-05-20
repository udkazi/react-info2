import React, {useState,createContext} from 'react';
//first export used in compoenent to consume data
export const ThingsContextApi = createContext();


//second export is used for app.js wrap
export const ThingsContext =props=> {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState([
        {
          name: 'Harry Potter',
          price: '$10',
          id: 23124
        },
        {
          name: 'Game of Thrones',
          price: '$10',
          id: 2566124
        },
        {
          name: 'Inception',
          price: '$10',
          id: 23524
        }
      ])
    
    return (
        <ThingsContextApi.Provider value={{count,setCount,movies,setMovies}}>
           {props.children}
        </ThingsContextApi.Provider>
    )

}


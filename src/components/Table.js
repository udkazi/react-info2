import React,{useEffect,useState} from 'react';

function Table() {

    const [list, setList] = useState('');

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(json => setList(json.data))
    })

    const data = [
        {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
          "id": 10,
          "email": "byron.fields@reqres.in",
          "first_name": "Byron",
          "last_name": "Fields",
          "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
          "id": 11,
          "email": "george.edwards@reqres.in",
          "first_name": "George",
          "last_name": "Edwards",
          "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
          "id": 12,
          "email": "rachel.howell@reqres.in",
          "first_name": "Rachel",
          "last_name": "Howell",
          "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
      ]

    

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                {data.map(ls => (
                    <tbody>
                    <tr key={ls.id}>
                        <th scope="row">{ls.id}</th>
                        <td>{ls.first_name}</td>
                        <td>{ls.email}</td>
                        <td><a>Delete</a></td>
                    </tr>
                    </tbody>
                 ))}       
            </table>
        </div>
    )
}

export default Table

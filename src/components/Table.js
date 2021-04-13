import React, { useEffect, useState } from 'react';

function Table(props) {

  const [list, setList] = useState('');
  
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(json => setList(json.data))
  }, [])

  const deleteMe = (id) => {
    console.log('deleted - ID', id);
  }

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

        {list.length > 0 &&
          <tbody>
            {list.map(ls => (
              <tr key={ls.id}>
                <th scope="row">{ls.id}</th>
                <td>{ls.first_name}</td>
                <td>{ls.email}</td>
                <td><a onClick={(e) => deleteMe(ls.id, e)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        }
      </table>
    </div>
  )

}

export default Table

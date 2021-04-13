import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts} from '../actions';
function Table(props) {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  useEffect(() => {
    dispatch(fetchPosts())
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

        {counter.items.length > 0 &&
          <tbody>
            {counter.items.map(ls => (
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

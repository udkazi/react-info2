import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchPosts,deleteMeToo} from '../actions';
function Table(props) {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const deleteMe = (id) => {
    dispatch(deleteMeToo(id))
  }

  console.log(counter,"counter")

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
              <tr key={ls._id}>
                <th scope="row">{ls.colour}</th>
                <td>{ls.name}</td>
                <td>{ls.age}</td>
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

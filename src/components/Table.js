import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';

function Table(props) {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const deletePosts = (id) => {
    dispatch(deletePost(id))
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {counter.items.length > 0 &&
          <tbody >
            {counter.items.map(ls => (
              <tr key={ls.id}>
                <th scope="row">{ls.id}</th>
                <td>{ls.title}</td>
                <td><a onClick={(e) => deletePosts(ls.id, e)}>Delete</a></td>
              </tr>
            ))}
          </tbody>
        }
      </table>
    </div>
  )
}

export default Table

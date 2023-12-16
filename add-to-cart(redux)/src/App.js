import {Header, ProductList} from './components';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer, useRef } from 'react';
import { fetchUser, updateUser } from './redux/cart';
import axios from 'axios';

function App() {
  const {userDetail} = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const counterRef = useRef(1)

  useEffect(() => {
    fetchUser(counterRef.current)
    // dispatch(fetchUser(counterRef.current))
  }, [])

  const loadMoreUsers = () => {
    fetchUser(++counterRef.current)
    // dispatch(fetchUser(++counterRef.current))
  }

  const fetchUser =  async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    
    dispatch(updateUser(response.data))

  }

  return (
    <>
      <Header />
      <button onClick={loadMoreUsers}>Add more users</button>
      <pre style={{color: 'white' }}>{JSON.stringify(userDetail, undefined, 4)}</pre>
      <ProductList />
    </>
  );
}

export default App;

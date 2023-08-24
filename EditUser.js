import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import './AddUser.css';
import axios from 'axios';

export const EditUser = () => {
    const {id}= useParams();
    let history =useHistory();
    const [user, setUser]=useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        age: ""
    });
     const handleChange = e =>{
        setUser({...user,[ e.target.name]:e.target.value})
     };
     useEffect(()=>{
        loadUsers()
     },[])

     const onsubmit=async e =>{
        e.preventDefault()
        await axios.put(`http://localhost:4000/users/${id}`, user);
        history.push("/")
     }
     const loadUsers = async()=>{
        const result=await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
     }
  return (
    <div className='container'>
      <div className='w-75 mx-auto '>
        <h2 className='text-center mb-2 mt-3'>Edit A User</h2>
        <form onSubmit={e=>onsubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Name'
              name='name'
              value={user.name}
              onChange={e=>handleChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your UserName'
              name='username' 
              value={user.username} 
              onChange={e=>handleChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control form-control-lg'
              placeholder='Enter Your E-mail Address'
              name='email'
              value={user.email}
              onChange={e=>handleChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Phone Number'
              name='phone'
              value={user.phone}
              onChange={e=>handleChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Age'
              name='age'
              value={user.age}
              onChange={e=>handleChange(e)}
            />
          </div>

          <button className='btn btn-warning btn-block'>Update User</button>
        </form>
      </div>
    </div>
  );
}

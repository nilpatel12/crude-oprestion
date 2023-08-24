import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './AddUser.css';
import axios from 'axios';

export const AddUser = () => {
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

     const onsubmit=async e =>{
        e.preventDefault()
        await axios.post("http://localhost:4000/users",user);
        history.push("/")
     }
  return (
    <div className='container'>
      <div className='w-75 mx-auto '>
        <h2 className='text-center mb-2 mt-3'>Add A User</h2>
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

          <button className='btn btn-primary btn-block'>Add User</button>
        </form>
      </div>
    </div>
  );
}

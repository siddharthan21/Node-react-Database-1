import React, { useState } from 'react'
import Books from './Books';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Add = () => {
    const [inval,setinval] = useState({
        id:"",
        name:""
    });

    const navigate = useNavigate()

    const handle = (e) =>{
        setinval(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    console.log(inval)
    const handleclick = async e=>{
      e.preventDefault()
      try {
        await axios.post("http://localhost:9999/books",inval)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <h1>Add New Bokk</h1>
      <input type='text' placeholder='ID' onChange={handle} name='id'/>
      <h1>Name</h1>
      <input type='text' placeholder='NAMe' onChange={handle} name='name'/>
      <button onClick={handleclick}>Add</button>
    </div>
  )
}

export default Add

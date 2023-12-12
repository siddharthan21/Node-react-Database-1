import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Books = () => {
    const [Books,setbook] = useState([])
    useEffect(()=>{
            const fetchAllbooks = async ()=>{
                try {
                    const res = await axios.get("http://localhost:9999/books")
                    setbook(res.data)
                    console.log(res)
                } catch (err) {
                    console.log(err)
                }
            }

            fetchAllbooks()
    },[])
  return (
    <div>
      <h1>lama name</h1>
      {Books.map((book,i)=>{
       
      return <>
        <h1>{book.name}</h1>
        <h1>{book.id}</h1>
       </>

      })}
      <div className="">
        <button><Link to="/add">ADD</Link></button>
      </div>
    </div>
  )
}

export default Books

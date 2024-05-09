import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import jan from '../assets/jan.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const [info, setInfo] = useState([])
  console.log(info)
  useEffect(() => {
    const getAllBlog = () => {
      axios.get("http://localhost:3000/getBlog", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }).then(result => setInfo(result.data.gtblog
      )).catch(err => console.log(err))
    }
    getAllBlog()
  }, [])

  return (
    <div>
      <Navbar />
      <h2>Latest B Posts</h2>
      <div className='container'>
        {info.map((item) => {
          return (
            <div className='hello' key={item._id}>
              <img src={`http://localhost:3000/${item.thumbnail}`} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className='jjj'><Link to={`/single/${item._id}`}>Learn More</Link></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
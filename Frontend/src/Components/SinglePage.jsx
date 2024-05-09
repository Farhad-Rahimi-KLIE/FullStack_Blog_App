import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const SinglePage = () => {
    const [single, setSingle] = useState([])
    const params = useParams()
console.log(single)
    useEffect(()=>{
        const singledata = ()=>{
            axios.get(`http://localhost:3000/getsingleblog/${params.id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
            }).then(result => setSingle(result.data.getsingl)).catch(err => console.log(err))
        }
        singledata()
    },[])

  return (
    <div>
        <div className='hello'>
              <img src={`http://localhost:3000/${single.thumbnail}`} />
              <h4>{single.title}</h4>
              <p>{single.description}</p>
            </div>
    </div>
  )
}

export default SinglePage
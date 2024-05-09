import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Addblog = () => {
  const [input, setInput] = useState({
    title : "",
    description : "",
    category : "",
  })
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState();
  useEffect(()=>{
    const getCategories = ()=>{
      axios.get("http://localhost:3000/getCategory",{
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    }).then(result => {
      if (result) {
        setCategories(result.data.getCategory
          )
      }
    }).catch(err => console.log(err))
    }
    getCategories()
  },[])

  const HandleCahnge = ()=>{
    const data = new FormData()
    data.append("title", input.title)
    data.append("category", input.category)
    data.append("description", input.description)
    data.append("thumbnail", file)
    axios.post('http://localhost:3000/addblog', data, {
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    }).then(result => console.log(result)).catch(err => console.log(err))
  }

  return (
    <div className='product'>
            <h1>Add a New Blog</h1>
            <input type="text" placeholder='Title' className='inputBox'
            name='title'
            value={input.title}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
            <div>
            <label htmlFor="formgroup">Category</label>
           <select name="category" 
           onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
           >
             <option disabled>Select Values</option>
            {categories &&
             categories.map((curElem)=>{
                return <option key={curElem._id} value={curElem._id}>{curElem.title}</option>
              })}
           </select>
            </div>
           <textarea id="" cols="38" rows="6" placeholder='Description'
            name='description'
            value={input.description}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
           ></textarea>

            <input type="file" placeholder='Thumbnail' name='thumbnail' className='inputBox'
            onChange={(e)=> setFile(e.target.files[0])}
            />


            <button className='appButton' onClick={HandleCahnge}>Add Blog</button>
        </div>
  )
}

export default Addblog
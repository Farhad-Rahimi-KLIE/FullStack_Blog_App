import React,{useState} from 'react'
import axios from 'axios'
const Addcategory = () => {
  const [input, setInput] = useState({
    title : "",
  })

  const AddCategory = ()=>{
    axios.post("http://localhost:3000/addCategory", input,{
      headers : {
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
      }
    }).then(result => {
      console.log(result)
    }).catch(err => console.log(err))
  }

  return (
    <div className='product'>
            <h1>Add a New Category</h1>
            <input type="text" placeholder='Title' className='inputBox'
            name='title'
            value={input.title}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
            <button className='appButton' onClick={AddCategory}>Add Category</button>
        </div>
  )
}

export default Addcategory
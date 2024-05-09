import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const navigate = useNavigate()
  const HandleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate('/login')
  }
  return (
    <div>
        <ul className="nav-ul">
                        <li><Link to="/">KLIE_BLOG</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add"> Add Blog</Link></li>
                        <li><Link to="/category">Add Category</Link></li>
                    </ul>
                    <ul  className="nav-ul jan">
                      {token && token !== null ? (
                        <>
                        <span>Welcome {name}</span>
                        <button className='btn' onClick={HandleLogout}>Log out</button>
                        </>
                      ) :
                      (
                        <>
                        <li><Link to="/register">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        </>
                      )
                    }
                        
                    </ul>
    </div>
  )
}

export default Navbar
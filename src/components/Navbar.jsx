import React from 'react'

const Navbar =()=> {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/25016508/pexels-photo-25016508/free-photo-of-young-tourist-sitting-on-a-boulder-by-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Anirudha</span>
        <button>Logout</button>
      </div>
    </div>
  )
};

export default Navbar

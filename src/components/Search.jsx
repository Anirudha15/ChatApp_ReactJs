import React from 'react'

const Search=()=> {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/25016508/pexels-photo-25016508/free-photo-of-young-tourist-sitting-on-a-boulder-by-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Anirudha</span>
        </div>
      </div>
    </div>
  )
};

export default Search

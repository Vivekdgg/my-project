import React from 'react'
const UserProfile = ({user}) => {
    console.log(user.name);
    var fullName = user.name
    // console.log(fullName[0]);
  return (
    <div className="container">
    <div className="firstPageContainer">
      <div className="leftContainer">
        <img src="Assets/Left-bg.png" alt="set" className="leftimg"></img>
      </div>
      <div className="rightContainer">
      <h1 className='loginName'>Hi,{fullName}</h1>
        <img src="Assets/Bg.jpg" alt="set" className="rightimg"></img>
        <div className="rightmainContainer">
      
          <div className="logo">
            <img src="Assets/Oreo.png"></img>
          </div>
        </div>
      </div>
    </div>
  </div>
//     <div>
//     <h1>{user.name}</h1>
//   </div>
  )
}

export default UserProfile
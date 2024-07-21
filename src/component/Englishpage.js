import React from 'react'
import BackButton from './BackButton';
import { Link } from 'react-router-dom';
import HomeScreen from './HomeScreen';
const Englishpage = () => {
  return (
    <div className="container">
      <div className="firstPageContainer">
        <div className="leftContainer">
          <img src="Assets/Left-bg.png" alt="set" className="leftimg"></img>
        </div>
        <div className="rightContainer">
   <Link to={"./"}><BackButton ButtonName={"← Back"} className="custom-class"/></Link>
          <img src="Assets/Bg.jpg" alt="set" className="rightimg"></img>
          <HomeScreen></HomeScreen>
        </div>
      </div>
    </div>
  )
}

export default Englishpage
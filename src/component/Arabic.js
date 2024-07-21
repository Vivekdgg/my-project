import React from 'react'
import HOC from './HOC'

const Arabic = ({value}) => {
  // console.log(value);
  return (
    <div className="container">
    <div className="firstPageContainer">
      <div className="leftContainer">
        <img src="Assets/Left-bg.png" alt="set" className="leftimg"></img>
      </div>
      <div className="rightContainer">
        <div className="rightmainContainer">
          <div className="logo">
            <img src="Assets/Oreo.png" alt="set"></img>
          </div>
          <div className="collection">
            <img src="Assets/Doodle-strip2.png" alt="set"></img>
          </div>
          <div className="lang">Select your Language</div>
          <h2>This is {value.name}</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HOC(Arabic);
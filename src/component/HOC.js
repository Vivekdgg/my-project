import React from 'react'

const HOC = (Component) => {
    const sampleObject = {
        name : "Vivek",
        age : 25,
        role: "Backend Developer"

    }
  return () => <Component value = {sampleObject}></Component>
}

export default HOC
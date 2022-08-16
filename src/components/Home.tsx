import { Auth } from 'aws-amplify'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h2>Home side</h2>
      <button onClick={() => Auth.signOut()}>Go to Out</button>
    </div>
  )
}

export default Home
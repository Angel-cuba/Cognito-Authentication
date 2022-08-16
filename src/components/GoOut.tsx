import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoOut = () => {
const navigation = useNavigate()
  return (
    <div>GoOut
      <button onClick={() => navigation('https://angel-auth.auth.us-east-2.amazoncognito.com/login?client_id=1c4qsoaoau198vfh8qistjkpcf&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/home')}>Go to Home</button>
    </div>
  )
}

export default GoOut
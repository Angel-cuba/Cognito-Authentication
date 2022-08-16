import React from 'react'
import { useNavigate } from 'react-router-dom'


const GoOut = () => {
const navigation = useNavigate()
  return (
    <div>GoOut
      <button onClick={() => navigation('/')}>Go out</button>
    </div>
  )
}

export default GoOut
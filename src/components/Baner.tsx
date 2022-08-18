import { Auth } from 'aws-amplify'
import React from 'react'
import GoOut from './GoOut'

const Initial = () => {
  const [user, setUser] = React.useState(null)
  console.log('User', user)
  const userInfo = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user.attributes)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    userInfo()
  } , [])

  return (
    <div className="header">
        <h2>Some content</h2>
        <GoOut/>
      </div>
  )
}

export default Initial
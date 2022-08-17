import { Auth } from 'aws-amplify'
import React from 'react'

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
        <button onClick={() => Auth.signOut()}>Go to Out</button>
      </div>
  )
}

export default Initial
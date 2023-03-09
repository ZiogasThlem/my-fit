import React from 'react'
import Contributor from '../components/ProfileComponents/Contributor'
import Admin from '../components/ProfileComponents/Admin'
import User from '../components/ProfileComponents/User'

const Profile = () => {
  return (
    <>
      <User/>
      <Admin/>
      <Contributor/>
    </>
  )
}

export default Profile
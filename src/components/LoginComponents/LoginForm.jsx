import React from 'react'

const LoginForm = () => {
  return (
    <form className ='input-group-lg'>
        <input type="text" name="username" placeholder='mr stronk'/>
        <input type="text" name="password" placeholder='********'/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
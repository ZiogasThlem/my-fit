import React from 'react'

const LoginForm = () => {
  return (
    <form>
        <input type="text" name="username" placeholder='mr stronk'/>
        <input type="text" name="password" placeholder='********'/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
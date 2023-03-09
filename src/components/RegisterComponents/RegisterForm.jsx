import React from 'react'

const RegisterForm = () => {
  return (
    <form>
        <input type="text" name="username" placeholder='mr stronk'/>
        <input type="text" name="password" placeholder='********'/>
        <input type="text" name="email" placeholder='larry@bikinibottom.com'/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default RegisterForm
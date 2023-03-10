import React from 'react'
import { useNavigate } from 'react-router-dom';

const Exercise = () => {

  const navigate = useNavigate();

  return (
    <div>
        <ul>
            <li>exercise1<button>+</button></li>
            <li>exercise2<button>+</button></li>
            <li>exercise3<button>+</button></li>
            <li>exercise4<button>+</button></li>
            <li>exercise5<button>+</button></li>
        </ul>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Exercise
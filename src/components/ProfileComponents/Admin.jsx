import React from 'react'

const Admin = () => {
    const isAdmin = false
    return (
        <>
            { isAdmin &&
            <ul>
                <li><button>A1</button></li>
                <li><button>A2</button></li>
                <li><button>A3</button></li>
                <li><button>A4</button></li>
            </ul>}
        </>
  )
}

export default Admin
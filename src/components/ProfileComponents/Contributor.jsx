import React from 'react'

const Contributor = () => {
    const isContributor = false

    return (
        <>
        {isContributor &&
        <ul>
            <li><button>C1</button></li>
            <li><button>C2</button></li>
            <li><button>C3</button></li>
            <li><button>C4</button></li>
        </ul>}
        </>
    )
}

export default Contributor
import './profile.css'

const Contributor = () => {
    const isContributor = false

    return (
        <div className='Contributor'>
        {isContributor &&
        <ul>
            <li><button>C1</button></li>
            <li><button>C2</button></li>
            <li><button>C3</button></li>
            <li><button>C4</button></li>
        </ul>}
        </div>
    )
}

export default Contributor
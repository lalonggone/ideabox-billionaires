import './Form.css'

function Form() {
    return (
        <form className='form'>
            <input className='search' placeholder='Search by name'></input>
            <button className='button'>Search</button>
            <button className='button'>View Favorites</button>
        </form>
    )
}

export default Form
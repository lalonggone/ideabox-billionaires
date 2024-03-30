import './Header.css'
import Form from '../Form/Form.jsx'

function Header() {
    return (
        <header className='header'>
            <h1 className='title'>Billionaire Wealth Tracker</h1>
            <h2 className='description'>There are currently X billionaires in the world</h2>
            <Form />
        </header>
    )
}

export default Header
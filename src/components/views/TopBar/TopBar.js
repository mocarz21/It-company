import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import styles from './TopBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const TopBar =() => {

    const hamburgerActive =() =>{
        const hamburgerLocalization = document.querySelector('.menu-list')
        hamburgerLocalization.classList.toggle('activeList')
    }

    return(
        <>
            <div className="menu">
                <Nav.Link as={NavLink} to="/">Firma</Nav.Link>
                <Nav.Link as={NavLink} to="/szkolenia">Szkolenia</Nav.Link>
                <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
            </div>
            <button className='hamburger' onClick={hamburgerActive}>
                <FontAwesomeIcon icon={faBars} />    
            </button>
            <ul class="menu-list">
                <Nav.Link onClick={hamburgerActive} className='hamburgerLink' as={NavLink} to="/">Firma</Nav.Link>
                <Nav.Link onClick={hamburgerActive} className='hamburgerLink' as={NavLink} to="/szkolenia">Szkolenia</Nav.Link>
                <Nav.Link onClick={hamburgerActive} className='hamburgerLink' as={NavLink} to="/kontakt">Kontakt</Nav.Link>
            </ul>
        </>
    )
}

export default TopBar;
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import styles from './TopBar.scss'

const TopBar =() => {

    return(
        <div className="menu">
            <Nav.Link as={NavLink} to="/">Firma</Nav.Link>
            <Nav.Link as={NavLink} to="/szkolenia">Szkolenia</Nav.Link>
            <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
        </div>

    )
}

export default TopBar;
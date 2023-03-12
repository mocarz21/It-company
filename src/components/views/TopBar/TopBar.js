import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './TopBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/userRedux'
import { useSelector } from 'react-redux';


const TopBar =({visible, action}) => {

    const dispatch =useDispatch();
    const whoIs = useSelector(state=> state.user)

   if(whoIs !== null){

    console.log('asdasdasdasd',whoIs.login)
   }

    const wyloguj = () =>{
        action(false)

        fetch('/auth/logout', {
            method: 'GET',
            headers: {
            },
          })
          .then(response => response.json())
          .then(data => {
            // Obsługa odpowiedzi z endpointa

            console.log('udało sie')
            dispatch(logOut())
            console.log(data);
          })
          .catch(error => {
            // Obsługa błędów
            console.error(error);
          });
    }
    

    const hamburgerActive =() =>{
        const hamburgerLocalization = document.querySelector('.menu-list')
        hamburgerLocalization.classList.toggle('activeList')
    }

    return(
        <>  <div className="menu">
             {(visible === false || visible['message'] === "req.status is not a function") &&  <Nav.Link as={NavLink} to ="/login">Login</Nav.Link>}
             {visible['message'] === 'Login successful'   &&  <button onClick={wyloguj}>Wyloguj</button>}
            </div>
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
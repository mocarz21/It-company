import styles from './LogIn.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import  Alert  from 'react-bootstrap/Alert'
import { logIn } from '../../../redux/userRedux'
const LogIn = ({action}) =>{

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [status, setStatus] = useState(null) //success, danger, loading
    const dispatch = useDispatch();

    const send =(e) =>{
        e.preventDefault()

        setStatus('loading')
        fetch('/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              login: login,
              password: password
            })
          })
          .then(response => response.json())
          .then(data => {
            // Obsługa odpowiedzi z endpointa
            dispatch(logIn({login}))
            action(data)
            setStatus('success')
            console.log(data);
          })
          .catch(error => {
            // Obsługa błędów
            setStatus('danger')
            console.error(error);
          });
    }

    return(

        <div className='page'>
            <div className='boxLogin'>
                <form onSubmit={send}>
                   {status === 'success' && <Alert key='success' variant='success'>
                        <Alert.Heading>Zalogowano</Alert.Heading>
                        <p>Zostałeś zalogowany</p>
                    </Alert>}
                   {status === "danger" && <Alert variant="danger">
                        <Alert.Heading>Zły login lub hasło</Alert.Heading>
                        <p>Podaj prawidłowy login lub hasło</p>
                    </Alert>}
                   {status === 'loading' && <Spinner animation='border' role="status" className='d-block mx-auto'>
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>}
                    {(status === 'danger' || status === null ) && 
                    <div>
                        <h2>Login</h2>
                        <input name="login" value={login} type="text" onChange={e=>setLogin(e.target.value)}/>
                        <h2>Hasło</h2>
                        <input name="password" value={password} type="password" onChange={e=>setPassword(e.target.value)}/>
                        <h2> </h2>
                        <button type='submit'>Zaloguj</button>
                    </div>}
                </form>

            </div>
        
        </div>
    )    
    
}

export default LogIn;
import styles from './LogIn.scss';
import { useState } from 'react';

const LogIn = () =>{


    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const send =(e) =>{
        e.preventdefault()
    }


    return(

        <div className='page'>
            <div className='boxLogin'>
                <form onSubmit={send}>
                    <h2>Login</h2>
                    <input name="Login" value={login} type="text" onChange={e=>setLogin(e.target.value)}/>
                    <h2>Hasło</h2>
                    <input name="Password" value={password} type="text" onChange={e=>setPassword(e.target.value)}/>
                </form>
            </div>
        
        </div>
    ) 
    
        
    
    
}

export default LogIn;
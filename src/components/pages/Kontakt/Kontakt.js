import { useState } from "react";
import Button from '../../common/Buton/Button'
import styles from './Kontakt.scss'

const Kontakt = () => {


    const [imie, setImie] =useState('');
    const [nazwaFirmy, setNazwaFirmy] = useState('');
    const [phone, setPhone] = useState('');
    const [ message, setMessage] =useState('');
    const [email, setEmail] = useState('');

    
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(imie, nazwaFirmy, phone, message, email);
        setImie('');
        setNazwaFirmy('');
        setPhone('');
        setMessage('');
        setEmail('');
    }
    
   
    return(
        <div className="contactBox">
            <div className="inputBox">
                <h1>Kontakt</h1>
                <form onSubmit={sendMessage}>
                    <div className="imie">
                        <h2>Imię</h2>
                        <input name="Imie" value={imie} defaultValue="Imie/NazwaFirmy" type='text' onChange={e=>setImie(e.target.value)}/>
                    </div>
                    <div className="nazwaFirmy">
                        <h2>Nazwa firmy</h2>
                        <input type="text"  name= "nazwaFirmy" value={nazwaFirmy} onChange={e=>setNazwaFirmy(e.target.value)}/>  
                    </div>
                    <div className="nazwaFirmy">
                        <h2>Adres email</h2>
                        <input type="email"  name= "email" value={email} onChange={e=>setEmail(e.target.value)}/>  
                    </div>
                    <div>
                        <h2>Numer telefonu</h2>
                        <input type ="number" name="phone" value= {phone} onChange={e=>setPhone(e.target.value)}/>
                    </div>
                    <div className="textArea">
                        <h2>Treść wiadomości</h2>
                        <input type="textarea" cols='50' rows="10" name="message" value={message} onChange={e=>setMessage(e.target.value)}/>
                    </div>
                    <Button/>
                </form>
            </div>
            <div className="contact">
                <div className="adres">
                    <h2>Adres</h2>
                    <h3>POWER IT TRAINING</h3>
                    <h3>ul. Antoniukowska 54A lok. 8</h3>
                    <h3>15-845 Białystok</h3>
                    <h3>adammocarski22@asterm.com.pl</h3>
                    <h3>tel. 535 276 766</h3>
                </div>
                <div className="adresMap">
                    <img src= {`${process.env.PUBLIC_URL}/adres.png`} alt="adres"/>
                </div>
            </div>
        </div>
    )
}

export default Kontakt;
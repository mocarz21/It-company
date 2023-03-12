import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './Opis.scss'
import Poziom from '../../features/Poziom'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Opis =()=>{
    const [myUser, setMyUser] = useState(null)
    const {id} =useParams();
    const topic = useSelector(store=>store.topics.find(ttt=>ttt.id === id ))
    const isUser = useSelector(store => store.user)
  
    
    useEffect(() => {
        if (isUser !== null) {
          const login = isUser.login;
          setMyUser(login);
        }
      }, [isUser]);

    

      console.log('myUser',myUser)
  
    


    return(
        <>
            <div className="box">
                <div className="title">
                {myUser === 'admin' && <NavLink to={'/edit/' + topic.id}>Edytuj</NavLink>}
                    <h1>{topic.title}</h1>
                    <h2>{topic.descryptionTwo}</h2>
                    <h1 className="h1Poz">Poziom</h1> 
                    <Poziom id={id} topic={topic}/>
                </div>
            </div>
        </>
    )
}

export default Opis;
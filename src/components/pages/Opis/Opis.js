import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './Opis.scss'
import Poziom from '../../features/Poziom'

const Opis =()=>{

    const {id} =useParams();
    const topic = useSelector(store=>store.topics.find(ttt=>ttt.id === id ))


    return(
        <>
            <div className="box">
                <div className="title">
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
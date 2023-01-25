import React from "react";
import { useParams } from "react-router-dom";

const Opis =()=>{

    const {id} =useParams;
    console.log('id=', JSON.stringify(id))


    return(
        <>
            {'Opis szkolenia ' + JSON.stringify(id) }

        </>

    )
}

export default Opis;
import { useEffect } from "react";
import styles from './Poziom/Poziom.scss'

const Poziom =({id, topic})=>{
  let lvls= [];

    for(let key in topic.lvl){
        lvls.push(key)
 
    }

    const  show =(e)=>{ 
        e.preventDefault()
        const programLocalization = e.currentTarget.nextSibling
        const boxWithActiveClass = document.querySelector('.desriptionCard')  
        const allActive = boxWithActiveClass.querySelectorAll('.active')
        allActive.forEach(el=>el.classList.remove('active'))
        programLocalization.classList.toggle('active')
        
    }

    return(
        <div className="desriptionCard">
            {lvls.map(lv=>  
            <div key={id+lv}>
                <button className='box-lvlProgram' onClick={show}>
                    <div className = {'lvl-'+ id}>
                        <h2>{lv}</h2>
                    </div>
                </button>
                <div className={lv}>
                    <ul>
                    {console.log(Object.values(topic.lvl[lv]))}
                    {Object.values(topic.lvl[lv]).map(e=><li key={e + 'id'}>{e}</li>)}
                    </ul>    
                </div>
            </div>
        )}
        </div> 
    )
}

export default Poziom;



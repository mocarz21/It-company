import styles from './Poziom/Poziom.scss'
import Button from '../common/Buton/Button.js'

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
    // console.log( 'asd',topic)
    // console.log('json',JSON.stringify(topic, null, 2));

    return(
        <div className="desriptionCard">
            {lvls.map(lv=>  
            <div key={id+lv}>
                {/* <button className='box-lvlProgram' onClick={show}>
                    <div className = {'lvl-'+ id}>
                        <h2>{lv}</h2>
                    </div>
                </button> */}
                <Button lv={lv} id={id} action={show}/>
                <div className={lv}>
                    <ul>
                        {Object.values(topic.lvl[lv]).map(e=><li key={e + 'id'}>{e}</li>)}
                    </ul>    
                </div>
            </div>
        )}
        </div> 
    )
}

export default Poziom;



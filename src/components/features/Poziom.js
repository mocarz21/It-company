import styles from './Poziom/Poziom.scss'
import Button from '../common/Buton/Button.js'

const Poziom =({id, topic})=>{
  let lvls= [];

    for(let key in topic.lvl[0]){
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
                <Button lv={lv} id={id} action={show}/>
                <div className={lv}>
                    <ul>
                        {console.log('topic.lvl')}
                        {Object.values(topic.lvl[0]).map(e=><li key={e + 'id'}>{e}</li>)}
                    </ul>    
                </div>
            </div>
        )}
        </div> 
    )
}

export default Poziom;



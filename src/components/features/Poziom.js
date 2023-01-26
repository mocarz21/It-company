

const   Poziom =({id, topic})=>{

    let lvls= [];
    
        for(let key in topic.lvl){
        lvls.push(key)

    }
    const cbd= document.querySelector(".box-lvlProgram")
    console.log(cbd)
    const  show =(e)=>{ 
        e.preventDefault()
        const abc= document.querySelector(".box-lvlProgram")
        console.log(abc)

        // if(document.querySelector('.'+ lv) ==='.'){
        //     console.log('niema')
        // }else{
        //      const programLocalization = document.querySelector('.'+ lv);
        //      programLocalization.classList.toggle('active')
        //      console.log(programLocalization)
        // }

    }

    return(
        <>
            {lvls.map(lv=>
            <div key={id+lv} classname='box-lvlProgram'>
                <button onClick={show}>
                    <div className = {'lvl-'+ id}>
                        <h2>{lv}</h2>
                    </div>
                </button>
                <div  className={lv}>
                    <h3>{topic.lvl[lv]}</h3>
                </div>
            </div>
        )}
        </> 
    )
}

export default Poziom;
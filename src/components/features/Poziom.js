

    const Poziom =({id, topic})=>{

        let lvls= []
        let program = ''
        
        for(let key in topic.lvl){
            lvls.push(key)
           let program = topic.lvl[key]
        
        }

        const show =()=>{

           // const programLocalization = document.querySelector('.'+ program);
           // programLocalization.classList.toggle('active')
          //  console.log(programLocalization)
        }


        return(
            lvls.map(lv=>
                <div key={id+lv} classname='box-lvlProgram'>
                    <button onClick={show}>
                        <div  onClick={show('program'+ lv)} className = {'lvl-'+ id}>
                            <h2>{lv}</h2>
                        </div>
                    </button>
                    <div  className={program}>
                        <h3>{program}</h3>
                    </div>
                </div>
            )
        )
    }

    export default Poziom;
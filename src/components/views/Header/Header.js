import TopBar from '../TopBar/TopBar';
import styles from './Header.module.scss';

const Header =({visible,action}) =>{

    return(
        <>
        <header className={styles.container}>
                <div className= {styles.logoAndMenu}>
                        <img className='myLogo' src= {`${process.env.PUBLIC_URL}/logo.png`} alt="logo"/>
                    <div className={styles.right}>
                        <div className= {styles.info}>
                            <h3 className='infoName'>Tel: 535 276 766 </h3>
                            <h3 className='infoName'>adammocarski22@gmail.com</h3>
                        </div>   
                    </div>    
                <TopBar visible={visible} action={action}/>    
                </div>
        </header>
        </>
    )
}

export default Header;
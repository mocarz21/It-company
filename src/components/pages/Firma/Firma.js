import styles from './Firma.scss'
const Firma = () => {

    return(
        <div className='descriptions'>
            <div className="descriptionOne">
                <div className="textOne">
                    <h1>Szkolenia komputerowe</h1>
                    <p>Naszą misją jest dostarczanie Klientom korzyści poprzez świadczenie wysokiej jakości usług szkoleniowych 
                        pozwalających na usprawnienie ich procesów produkcyjnych i biznesowych, poprzez podnoszenie kwalifikacji 
                        zaangażowanych w nie pracowników.
                    </p>
                </div>
                <div className="pictureOne">
                    <img className='koles' src= {`${process.env.PUBLIC_URL}/koles.png`} alt="logo"/>
                </div>
                
            </div>
            <div className="descriptionTwo">
                <div className="pictureTwo">
                    <img className='mapa' src= {`${process.env.PUBLIC_URL}/mapa.png`} alt="logo"/>
                </div>
                <div className="textTwo">
                    <h1>Szkolimy na terenie całej Polski</h1>
                    <p>Szkolimy na terenie całego kraju. Szkolenie może odbyć się w siedzibie klienta lub we wskazanej przez klienta lokalizacji. 
                        Jeśli zajdzie taka potrzeba chętnie zajmiemy się rezerwacją odpowiedniej sali, czy cateringu.
                    </p>
                </div>
            </div>
            <div className="descriptionThere">
                <div className="textThere">
                    <h1>Na nasze szkolenia zapewniamy również sprzęt komputerowy.</h1>
                    <p></p>
                </div>
                {/* <div className="pictureThere">
                    <img className='laptop' src= {`${process.env.PUBLIC_URL}/laptopy.png`} alt="logo"/>
                </div> */}
            </div>
        </div>
    )

}

export default Firma;
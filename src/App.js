import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header'
import Firma from './components/pages/Firma/Firma'
import Szkolenia from './components/pages/Szkolenia/Szkolenia'
import Kontakt from './components/pages/Kontakt/Kontakt'
import styles from './styles/setings.scss'
import Footer from './components/views/Footer/Footer'


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Firma/>}/>
          <Route path="/szkolenia" element ={<Szkolenia/>}/>
          <Route path="/kontakt" element ={<Kontakt/>}/>
        </Routes>
        <Footer/>     
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header'
import Firma from './components/pages/Firma/Firma'
import Szkolenia from './components/pages/Szkolenia/Szkolenia'
import Kontakt from './components/pages/Kontakt/Kontakt'
import Footer from './components/views/Footer/Footer'
import Opis from './components/pages/Opis/Opis'


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Firma/>}/>
          <Route path="/szkolenia" element ={<Szkolenia/>}/>
          <Route path="/kontakt" element ={<Kontakt/>}/>
          <Route path="/opis/:id" element = {<Opis/>}/>
        </Routes>
        <Footer/>     
    </div>
  );
}

export default App;

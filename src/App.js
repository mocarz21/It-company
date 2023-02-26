import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header'
import Firma from './components/pages/Firma/Firma'
import Szkolenia from './components/pages/Szkolenia/Szkolenia'
import Kontakt from './components/pages/Kontakt/Kontakt'
import Footer from './components/views/Footer/Footer'
import Opis from './components/pages/Opis/Opis'
import { updateTopics } from './redux/subreducera'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'


function App() {
  const dispatch = useDispatch();
  const fetchTopics = () => {
    fetch('http://localhost:8000/api/info')
      .then(res => res.json())
      .then(topics => {
        console.log('co pobiera :', topics) 
        dispatch(updateTopics(topics))})
      
  }

  useEffect(fetchTopics, [dispatch])


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

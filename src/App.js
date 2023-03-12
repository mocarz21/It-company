import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header/Header'
import Firma from './components/pages/Firma/Firma'
import Szkolenia from './components/pages/Szkolenia/Szkolenia'
import Kontakt from './components/pages/Kontakt/Kontakt'
import LogIn from './components/pages/LogIn/LogIn'
import Footer from './components/views/Footer/Footer'
import Opis from './components/pages/Opis/Opis'
import Edit from './components/pages/Edit/Edit'
import { updateTopics } from './redux/subreducera'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'


function App() {
  const [visible, setVisible] =useState(false)
  const dispatch = useDispatch();
  
  const fetchTopics = () => {
    fetch('http://localhost:8000/api/info')
      .then(res => res.json())
      .then(topics => {
        dispatch(updateTopics(topics))})
      
  }

  useEffect(fetchTopics, [dispatch])

  const isVisible =(props)=>{
    setVisible(props)
  }

  return (
    <div className="App">
        <Header visible = {visible} action ={isVisible}/>
        <Routes>
          <Route path="/" element={<Firma/>}/>
          <Route path="/szkolenia" element ={<Szkolenia/>}/>
          <Route path="/kontakt" element ={<Kontakt/>}/>
          <Route path="/opis/:id" element = {<Opis/>}/>
          <Route path="/Login" element = {<LogIn action={isVisible} />}/>
          <Route path="/edit/:id" element ={<Edit/>}/>
        </Routes>
        <Footer/>     
    </div>
  );
}

export default App;

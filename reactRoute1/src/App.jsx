import { useState } from 'react';
import './App.css';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DriftPage } from './components/DriftPage';
import { ForzaPage } from './components/ForzaPage';
import { TimeAttackPage } from './components/TimeAttackPage';



const Menu = () => {


  return (
  
      <div className='menu'>
        <NavLink to='/' className='menu__item'>Главная</NavLink>
        <NavLink to='/drift' className='menu__item'>Дрифт-Такси</NavLink>
        <NavLink to='/time-attack' className='menu__item'>Time Attack</NavLink>
        <NavLink to='/forza'className='menu__item'>Forza Картинг</NavLink>
      </div>


 
  );
}


function App() {
 

  return (
    <>
      <Menu/>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/drift'
          element={<DriftPage />}
        />
         <Route
          path='/time-attack'
          element={<TimeAttackPage />}
        />
        <Route
          path='/forza'
          element={<ForzaPage />}
        />
      </Routes>
    </>
    

  )
}

export default App


{/* <div className='menu'>
<Routes>
  <Route path="/" exact component={HomePage} />
  <Route path="/drift" component={DriftPage} />
  <Route path="/timeattack" component={TimeAttackPage} />
  <Route path="/forza" component={ForzaPage} />
</Routes>
</div> */}
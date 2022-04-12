import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks/useToggle';

function App() {

  const {isToggle, toggleToggle} = useToggle(); 

  return (
    <div className={isToggle ? "dark" : "light"}>
      <button onClick={toggleToggle}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;

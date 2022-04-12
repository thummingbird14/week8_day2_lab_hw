import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useDarkLight } from './hooks/useDarkLight';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  // const isDarkMode = useDarkLight();
  // console.log(isDarkMode)

  const {isDarkMode, toggleDarkMode} = useDarkLight(); 

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;

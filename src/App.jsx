import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { ThemeContext } from './Context/ThemeContext';
import Footer from './components/Footer';

function App() {
 const [theme, setTheme] = useState('light');
 const [toggle, setToggle] = useState(false); 

 useEffect (()=>{
    const localTheme = localStorage.getItem('theme');
    setTheme(localTheme ? localTheme : 'dark');
 },[])

  return (
    <>
    <ThemeContext.Provider value={{theme ,setTheme}}>
    <div className={`${theme} ${theme == 'dark' ? 'bg-gray-900' : null} max-w-5lx min-h-[100vh]`}>
        <Header setMenu={(toggle => setToggle(toggle))} />
       <Home toggle={toggle} />
      <Footer />
      </div>
    </ThemeContext.Provider>

    </>
  )
}

export default App

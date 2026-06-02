import { useState } from 'react'
import wordleDark from './assets/Wordle-dark.gif'
import wordleLight from './assets/Wordle-light.gif'
import logo from './assets/vite.svg'
import './App.css'
import ThemeSwitch from './components/ThemeSwitch'
import GameBoard from './components/GameBoard'
import Instructions from './components/Instructions'
import Info from './components/Info'
import { generate } from 'random-words'
import Definition from './components/Definition'

function App() {
  const defaultDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(defaultDarkTheme === true ? "dark" : "light");
  const wordle = theme === 'dark' ? wordleDark : wordleLight;

  const [answer] = useState(generate({ exactly: 1, minLength: 5, maxLength: 6 })[0].toUpperCase());

  return (
    <div className="App" data-bs-theme={theme} data-theme={theme}>
      <header className="App-header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={logo} alt="Bootstrap" width="30" height="24" />
              <span className="navbar-brand-name ms-2 mb-0">Wordle</span>
            </div>
            <div className='d-flex'>
              <Instructions />
              <Definition theme={theme} answer={answer} />
              <ThemeSwitch theme={theme} setTheme={setTheme}/>
            </div>
          </div>
        </nav>
      </header>
      <section className='container'>
        <div className='row mx-3'>
          <div className='col-12 col-lg-6 align-content-center'>
            <div className='App-main'>
              <span>Welcome to my version of</span>
              <img src={wordle} className="App-logo" alt="Wordle (logo)" />
              <p>Can you guess the word?</p>
            </div>
            <Info />
          </div>
          <div className='col-12 col-lg-6'>
            <GameBoard answer={answer} />
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App

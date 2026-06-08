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

  const [answer] = useState(() => generate({ exactly: 1, minLength: 5, maxLength: 6 })[0].toUpperCase());

  return (
    <div className="App" data-bs-theme={theme} data-theme={theme}>
      <header className="App-header">
        <nav className="navbar mx-3">
          <div className="container-fluid fixed-top">
            <div className="navbar-brand">
              <img src={logo} alt="Icon" width="30" height="24" />
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
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top mx-3">
        <div className="col-12 col-sm-8 d-flex align-items-center">
          <span className="mb-3 mx-3 mb-sm-0 text-body-secondary text-decoration-none lh-1" aria-label="FooterIcon">
            <img src={logo} alt="FooterIcon" width="30" height="24" />
          </span>
          <span className="mb-3 mb-sm-0 text-body-secondary">2026, Proudly made by Vitoria Mendes</span> 
        </div>
        <div className="col-12 col-sm-4 justify-content-sm-end d-flex">
          <span className="ms-3">
            <a className="text-body-secondary text-decoration-none" href="https://github.com/mlnvitoria" aria-label="GitHub">
              <i className="bi bi-github"></i> GitHub
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App

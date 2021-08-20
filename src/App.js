import { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ColorContext } from './ColorContext';

function App() {
  const colors = useContext(ColorContext);
  const [background, setBackground] = useState(true);

  return (
    <div
      className='App'
      id='container'
      style={{
        backgroundColor: background === true ? colors.blue : colors.red,
      }}
    >
      <button onClick={() => setBackground(!background)}>
        {background === true ? (
          <img alt='Light Mode Icon'></img>
        ) : (
          <img alt='Dark Mode Icon'></img>
        )}
      </button>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

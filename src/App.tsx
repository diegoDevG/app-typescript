import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styles from './App.module.scss';

interface HelloProps {
  name?: string
}

const Hello = ({ name }: HelloProps) => {
  return (
    <div>
      Hello {name}
    </div>
  )
}
const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <Hello name="Diego" />
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './Results.css';
import logo from '../../assets/logo.svg'

const ResultsPage: React.FC = () => {
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the <code>Results.component.tsx</code> page!!.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
}
export default ResultsPage
import React from 'react';
import './Link.css';
import logo from '../../assets/logo.svg'

const LinkPage: React.FC = () => {
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the <code>Link.component.tsx</code> page!!.
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
export default LinkPage
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundPage'
import LinkPage from './components/link/Link.component';
import HomePage from './components/home/Home.component';
import ResultsPage from './components/results/Results.component';
import * as serviceWorker from './serviceWorker';
import Navbar from './navigation/Navbar'

const routing = (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/link" component={LinkPage} />
            <Route exact path="/results" component={ResultsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

ReactDOM.render( routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

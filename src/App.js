import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Summary from './summary';
export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/summary'  component={Summary}/>
            </Switch>
        </Router>
    )
}

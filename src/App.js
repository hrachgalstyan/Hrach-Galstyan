import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// ********** Pages ********** //
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
// import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Error from './pages/Error'

// ********** Components ********** //
import ScrollTop from './components/ScrollTop'
import Header from './components/Header'


function App() {
    return (
        <Router>
            <ScrollTop>
            {/* ********** components *********** */}
            <Header />

            {/* ********** Pages ********** */}

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/portfolio'>
                    <Portfolio />
                </Route>
                <Route path='/resume'>
                    <Resume />
                </Route>
                {/* <Route path='/shop'>
                    <Shop />
                </Route> */}
                <Route path='/contact'>
                    <Contact />
                </Route>

                <Route path='*'>
                    <Error />
                </Route>
            </Switch>

            </ScrollTop>
        </Router>
    )
}

export default App;

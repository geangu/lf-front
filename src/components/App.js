import React from 'react';
import Router from '../config/Router';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <hr></hr>
                <Router />
                <hr></hr>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

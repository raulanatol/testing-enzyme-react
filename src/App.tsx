import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Carrousel } from './components/Carrousel/Carrousel';
import { RatingButton } from './components/RatingButton';

function App() {
    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <RatingButton/>
            <Carrousel/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}

export default App;

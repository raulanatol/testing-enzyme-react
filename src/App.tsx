import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Storyline } from './components/Storyline';

const TEXT = `84 years later, a 100 year-old woman named 
Rose DeWitt Bukater tells the story to her granddaughter 
Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell 
and Anatoly Mikailavich on the Keldysh about her life 
set in April 10th 1912, on a ship called Titanic 
when young Rose boards the departing ship with 
the upper-class passengers and her mother, 
Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. 
Meanwhile, a drifter and artist named Jack Dawson and 
his best friend Fabrizio De Rossi win third-class tickets 
to the ship in a game. And she explains the whole story 
from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.`;

const GENRES = ['Drama', 'Romance'];
const KEYWORDS = ['iceberg', 'death', 'mass death', 'titanic', 'wet'];

function App() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Storyline storyline={TEXT} genres={GENRES} keywords={KEYWORDS} />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;

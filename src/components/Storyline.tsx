import { getRegisteredStyles } from "@emotion/css";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";

const Container = styled.div`
  background: ${props => props.color};
  padding: 15px;
`;

const Links = styled.span`
  color: blue;
  cursor: pointer;
  text-transform: capitalize;
  padding: 10px 0 0 0;
`
const Strong = styled.strong`
  line-height: 50px;
  color: #454545;
`

const HR = styled.hr`
  border-color: grey;
`

export const Storyline: FC = () => {
  const [storyline, setStoryline] = useState('');
  const [keywords, setKeywords] = useState([""]);
  const [genres, setGenres] = useState([""]);
  const COLOR ="#f7f3f2"

  useEffect(() => {
    setStoryline(`84 years later, a 100 year-old woman named 
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
    from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.`)
    setKeywords(['iceberg', 'death', 'mass death', 'titanic', 'wet'])
    setGenres(["Drama", "Romance"])
  }, [])

  return <Container color={COLOR}>
    <h2>Storyline</h2>
    <p>{storyline}</p>
    <HR></HR>
    <Strong>Plot Keywords: </Strong>{keywords.map(word => <span><Links> {word} </Links> <span>|</span></span>)}
    <HR></HR>
    <Strong>Genres: </Strong>{genres.map(genre => <span><Links> {genre} </Links> <span>|</span></span>)}
  </Container>
}
import styled from '@emotion/styled';
import { FC, useState } from 'react';

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

interface StorylineProps {
  storyline: string,
  keywords: string[],
  genres: string[]
}

export const Storyline: FC<StorylineProps> = (props) => {
  const [storyline, setStoryline] = useState(props.storyline);
  const [keywords, setKeywords] = useState(props.keywords);
  const [genres, setGenres] = useState(props.genres);
  const COLOR = '#f7f3f2';

  return <Container color={COLOR}>
    <h2>Storyline</h2>
    <p>{storyline}</p>
    <HR></HR>
    <Strong>Plot Keywords: </Strong>{keywords.map(word => <span><Links> {word} </Links> <span>|</span></span>)}
    <HR></HR>
    <Strong>Genres: </Strong>{genres.map(genre => <span><Links> {genre} </Links> <span>|</span></span>)}
  </Container>
}

import styled from "@emotion/styled";
import { FC, useState } from "react";

const Container = styled.div`
  background: ${props => props.color};
  text-align: center;
`;

const Links = styled.div`
  
`

export const Storyline: FC = () => {
  const [storyline, setStoryline] = useState('');
  const [keywords, setKeywords] = useState(['iceberg', 'death', 'mass death', 'titanic', 'wet']);

  return <Container color='#75ac75'>
    <h2>Storyline</h2>
    <p>{storyline}</p>
    <strong>Keywords:</strong><p>{keywords.map(word => ` ${word} |`)}</p>

  </Container>
}
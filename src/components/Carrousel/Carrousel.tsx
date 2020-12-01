import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Paragraph } from '../Paragraph/Paragraph';
import { Colors } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';
import { CounterButton } from '../CounterButton';

const Container = styled.div`
  background: ${props => props.color};
  text-align: center;
  padding: 15px;
`;


export const Carrousel: FC = () => {
  const [text, setText] = useState("");
  const [predicted, setPredicted] = useState<Array<string> | undefined>();

  const arrayRandom = ["asdf", "fdsa", "queso", "murcielago", "papa", "aguacate", "chocolate", "cereales"]
  const handlerText = (event: any) => { 
    setText(event.currentTarget.value) 
    setPredicted(arrayRandom.filter( el => el.includes(text)))
  } 
  
  return <Container color="yellow">
    <input onChange={handlerText} value={text}/>
    <div>{predicted?.map((value: string) => <div>{value}</div>)}</div>
    </Container>
}
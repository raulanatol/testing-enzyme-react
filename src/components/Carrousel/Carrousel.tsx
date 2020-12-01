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

const arrayRandom = ["asdf", "fdsa", "queso", "murcielago", "papa", "aguacate", "chocolate", "cereales"]

export const Carrousel: FC = () => {
  const [text, setText] = useState("");
  const [predicted, setPredicted] = useState<string[]>();
  console.log("Paso por aqui")
  
  const handlerText = (event: any) => { 
    const lastValue = event.currentTarget.value
    setText(lastValue) 
    setPredicted(arrayRandom.filter( el => el.includes(lastValue)))
  } 
  
  return <Container color="yellow">
    <input onChange={handlerText} value={text}/>
    <div>{predicted?.map((value: string) => <div key={value}>{value}</div>)}</div>
    </Container>
}
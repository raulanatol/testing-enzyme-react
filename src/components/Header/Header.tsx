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
  font-family: ${Fonts.NORMAL};
`;

export const Header: FC = () => {
    const [color, setColor] = useState(Colors.RED);

    const handleOnLimit = () => {
        console.log('Límite superado 🤘');
        if (color === Colors.RED) {
            setColor(Colors.GREEN);
        } else {
            setColor(Colors.RED);
        }
    }

    return <Container color={color.value}>
        <Paragraph>Soy una cabecera de color: {color.es}</Paragraph>
        <CounterButton onLimit={handleOnLimit}/>
        <p>{color.value}</p>
    </Container>
};

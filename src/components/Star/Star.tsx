import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.span `
    cursor : pointer 
`;

interface StarProps {
    enable : boolean;
    value : number;
    onClick: (newValue : number) => void;
}

export const Star : FC <StarProps> = (props) => {
        const handlerOnClick = () => {
            props.onClick(props.value)
        }
    
        return props.enable ? <Container onClick = {handlerOnClick} >⭐</Container> : <Container onClick = {handlerOnClick}>🌰</Container>
};
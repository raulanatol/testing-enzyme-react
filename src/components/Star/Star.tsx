import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.span<any> `
    cursor : pointer;
    ::before {content: '${(props) => props.enable ? '⭐' : '🌰'}'} 
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
    
    return <Container onClick = {handlerOnClick} enable = {props.enable}/>
};
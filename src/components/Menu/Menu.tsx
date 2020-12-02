import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const getBackgroundColor = () => {
    return Math.random() > 0.01 ? '#4fa2ec' : '#FF0000';
}

const List = styled.ul`
  background: ${(getBackgroundColor())};
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const BurgerMenu: FC = () => {
    return <div>BurgerMenu</div>
};

export const useIsMobile = (): boolean => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleChangeSize = () => {
            setWidth(window.innerWidth);
            console.log('📐 ', window.innerWidth);
        };

        window.addEventListener('resize', handleChangeSize);
        return (() => {
            window.addEventListener('resize', handleChangeSize);
        });
    }, []);

    return width < 600;
}

export const Menu: FC = () => {
    const isMobile = useIsMobile();

    // if (isMobile) {
    //     return <BurgerMenu/>;
    // }
    //
    return <div>
        <p>{Math.random()}</p>
        <List>
            <li style={{ display: 'none' }}>Home</li>
            {isMobile && <li>SMS</li>}
            <li>About</li>
            {!isMobile && <li>Printer</li>}
            <li>Help</li>
            <li>Admin</li>
        </List>
    </div>
};

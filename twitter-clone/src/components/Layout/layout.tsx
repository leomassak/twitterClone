import React from 'react';
import * as S from './styles';

import MenuBar from '../MenuBar/menuBar';
import MainFeed from '../MainFeed/mainFeed';
import SideBar from '../SideBar/sideBar';

export default function Layout() {
    return (
        <S.LayoutContainer>
            <S.LayoutWrapper>
                <MenuBar />
                <MainFeed />
                <SideBar/>
            </S.LayoutWrapper>  
        </S.LayoutContainer>
    )
}

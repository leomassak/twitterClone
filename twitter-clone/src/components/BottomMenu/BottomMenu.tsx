import React from 'react';
import * as S from './styles';

export default function BottomMenu() {
    return (
        <S.BottomMenuContainer>
            <S.HomeIcon className="active" />
            <S.SearchIcon />
            <S.BellIcon />
            <S.EmailIcon />
        </S.BottomMenuContainer>
    )
}

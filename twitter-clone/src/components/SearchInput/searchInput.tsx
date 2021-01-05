import React from 'react';
import * as S from './styles';

export default function searchInput() {
    return (
        <S.SearchContainer>
            <S.SearchInput placeholder="Buscar no Twitter" />
            <S.SearchIcon />
        </S.SearchContainer>
    )
}

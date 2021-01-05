import React from 'react';
import * as S from './styles';

interface Props {
    title: String;
    elements: React.ReactNode[];
}

export default function SideList({title, elements}:Props) {
    return (
        <S.ListContainer>
            <S.ListItem>
                <S.ItemTitle>{title}</S.ItemTitle>
            </S.ListItem>

            {elements.map((item, index) => (
                <S.ListItem key={index}>
                    {item}
                </S.ListItem>
            ))}
        </S.ListContainer>
    )
}

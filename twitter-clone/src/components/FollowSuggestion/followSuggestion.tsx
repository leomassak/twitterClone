import React from 'react';
import * as S from './styles';

interface Props {
    name: String,
    nickname: String,
};

export default function followSuggestion({name, nickname}:Props) {
    return (
        <S.CardContainer>
            <div>
                <S.CardAvatar size={50} />
                <S.Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </S.Info>
            </div>
            <S.FollowButton isOutline>
                    Seguir
            </S.FollowButton>
        </S.CardContainer>
    )
}

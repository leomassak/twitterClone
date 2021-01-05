import React from 'react';
import * as S from './styles';


export default function ProfileHeader() {
    return (
        <S.HeaderContainer>
            <button>
                <S.BackIcon />
            </button>

            <S.ProfileInfo>
                <strong>Leo Massak</strong>
                <span>40 Tweets</span>
            </S.ProfileInfo>
        </S.HeaderContainer>
    )
}

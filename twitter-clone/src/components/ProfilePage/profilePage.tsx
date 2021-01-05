import React from 'react';
import * as S from './styles';

export default function ProfilePage() {
    return (
        <S.ProfilePageContainer>
            <S.ProfileBanner>
                <S.ProfileAvatar />
            </S.ProfileBanner>
            <S.ProfileData>
                <S.EditButton 
                isOutline={true} 
                >
                    Editar perfil
                </S.EditButton>
                <h1>Leo Massak</h1>
                <h2>@leo_massak</h2>

                <p>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#">Descrição do perfil</a>
                </p>

                <ul>
                    <li>
                        <S.LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <S.CakeIcon />
                        Nascido(a) em 23 de Janeiro de 1999
                    </li>
                </ul>

                <S.Followage>
                    <span>
                        <strong>236 </strong>
                        Seguindo 
                    </span>
                    <span>
                        <strong>61 </strong>
                        Seguidores
                    </span>
                </S.Followage>
            </S.ProfileData>
        </S.ProfilePageContainer>
    )
}

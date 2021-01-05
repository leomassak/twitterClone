import React from 'react';
import * as S from './styles';

export default function MenuBar() {
    return (
        <S.MenuContainer>
            <S.MenuOptions>
                <S.TwitterLogo />
                <S.MenuButton>
                    <S.HomeIcon />
                    <span>Página Inicial</span>
                </S.MenuButton>
                <S.MenuButton>
                    <S.BellIcon />
                    <span>Notificações</span>
                </S.MenuButton>
                <S.MenuButton>
                    <S.EmailIcon />
                    <span>Mensagens</span>
                </S.MenuButton>
                <S.MenuButton>
                    <S.FavoriteIcon />
                    <span>Favoritados</span>
                </S.MenuButton>
                <S.MenuButton  className="active">
                    <S.ProfileIcon />
                    <span>Perfil</span>
                </S.MenuButton>

                <S.AddTweetButton>
                    <S.AddTweetLogo />
                    <span>Tweetar</span>
                </S.AddTweetButton>
            </S.MenuOptions>
            <S.MenuBottom>
                <S.MenuAvatar size={50}/>
                <S.ProfileData>
                    <strong>Leo Massak</strong>
                    <span>@leo_massak</span>
                </S.ProfileData>
                <S.ExitIcon />
            </S.MenuBottom>
        </S.MenuContainer>
    )
}

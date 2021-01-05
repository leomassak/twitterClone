import React from 'react';
import * as S from './styles';

import ProfileHeader from '../Header/ProfileHeader/profileHeader';
import BottomMenu from '../BottomMenu/BottomMenu';
import ProfilePage from '../ProfilePage/profilePage';
import Feed from '../Feed/feed';

export default function MainFeed() {
    return (
        <S.MainFeedContainer>
            <ProfileHeader />
            <ProfilePage />
            <Feed />
            <BottomMenu />
        </S.MainFeedContainer>
    )
}

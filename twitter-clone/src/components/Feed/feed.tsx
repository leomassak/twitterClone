import React from 'react';
import * as S from './styles';

import Tweet from '../Tweet/tweet';

export default function Feed() {
    return (
        <S.FeedContainer>
            <S.TweetsTab>Tweets</S.TweetsTab>
            <S.TweetsContainer>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </S.TweetsContainer>
        </S.FeedContainer>
    )
}

import React from 'react';
import * as S from './styles';

export default function Tweet() {
    return (
        <S.TweetContainer>
            <S.TweetAvatar size={49}/>

            <S.TweetContent>
                <S.TweetHeader>
                    <strong>Finais Inesperados</strong>
                    <span>@finaisInesperados</span>
                    <S.Dot />
                    <time>28 de Janeiro</time>
                </S.TweetHeader>

                    <S.Description>
                        Inesperado
                    </S.Description>
                    <S.ImageContent />
                    <S.Icons>
                        <S.Status>
                            <S.CommentIcon />
                            32
                        </S.Status>
                        <S.Status>
                            <S.RetweetIcon />
                            41
                        </S.Status>
                        <S.Status>
                            <S.LikeIcon />
                            182
                        </S.Status>
                    </S.Icons>
            </S.TweetContent>
        </S.TweetContainer>
    )
}

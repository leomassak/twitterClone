import styled, { css } from 'styled-components';
import { Chat, Favorite, Retweet } from '../../styles/Icons';

import Avatar from '../Avatar/avatar';

export const TweetContainer = styled.div`
  display: flex;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
  position: relative;
`;

export const TweetAvatar = styled(Avatar)`
    margin-right: 10px;
`;

export const TweetContent = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
`;

export const TweetHeader = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > column-span,
    time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    border-radius: 15px;
    background: var(--outline);

    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;

    margin: 11px auto 0;
    width: 100%;

    @media (min-width: 330px) {
        width: 63%;
    }

    > div {
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
    }
`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &, 
        > svg path {
            color: var(--gray);
        }
    }

    &:nth-child(2) {
        color: var(--retweet);

        > svg {
            fill: var(--retweet);
        }
    }

    &:nth-child(3) {
        color: var(--like);

        > svg {
            fill: var(--like);
        }
    }
`;

const iconCss = css`
    width: 19px;
    height: 19px;
`;

export const CommentIcon = styled(Chat)`
    ${iconCss};
`;

export const RetweetIcon = styled(Retweet)`
    ${iconCss};
`;

export const LikeIcon = styled(Favorite)`
    ${iconCss};
`;
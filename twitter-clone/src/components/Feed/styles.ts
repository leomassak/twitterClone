import styled from 'styled-components';

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TweetsTab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    text-align: center;

    font-size: 15px;
    font-weight: bold;

    outline: 0;
    cursor: pointer;

    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);

    &:hover {
       background-color: var(--twitter-dark-hover); 
    }
`;

export const TweetsContainer = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0;
`;



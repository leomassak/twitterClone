import styled from 'styled-components';

export const MainFeedContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px,100%);

  @media screen and (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

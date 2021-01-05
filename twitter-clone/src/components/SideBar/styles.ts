import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
      display: flex;
      flex-direction: column;

      width: min(399px, 100%);
  }
`;

export const SideBarBody = styled.div`
    display: flex;
    flex-direction: column;

    padding: 58px 24px 200px;
    margin-top: 4px;

    > div + div {
        margin-top: 15px;
    }
`;
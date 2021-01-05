import styled from 'styled-components';
import { ArrowLeft } from '../../../styles/Icons';

export const HeaderContainer = styled.div`
  position: sticky;
  z-index: 4;
  top: 0;
  background-color: var(--color-primary);

  display: flex;
  align-items: center;
  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
      padding: 8px;
      border-radius: 50%;

      outline: 0;
      cursor: pointer;

      transition: background 200ms;

      &:hover {
          background: var(--twitter-dark-hover);
      }
  }
`;

export const ProfileInfo = styled.div`
    margin-left: 15px;

    display: flex;
    flex-direction: column;

    > strong {
        font-size: 18px;
    }

    > span {
        font-size: 15px;
        color: var(--gray);
    }
`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter);
`;
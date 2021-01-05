import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../styles/Icons';
import DefaultButton from '../Buttons/DefaultButton/defaultButton';
import Avatar from '../Avatar/avatar';

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
      display: none;
  }
`;

export const ProfileBanner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background-color: var(--twitter);

    position: relative;
`;

export const ProfileAvatar = styled(Avatar)`
    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
    z-index: 2;
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    > h2 {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }

    > p {
        font-size: 15px;
        margin-top: 12px;

        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }

    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            display: flex;
            align-items: center;

            font-size: 15px;
            color: var(--gray);

            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;

export const EditButton = styled(DefaultButton)`
    position: absolute;
    top: 2vw;
    right: 7px;
    padding: 4px 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;

const iconCss = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconCss};
`;

export const CakeIcon = styled(Cake)`
    ${iconCss};
`;

export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;
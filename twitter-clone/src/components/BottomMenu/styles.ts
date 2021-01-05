import styled, { css } from 'styled-components';
import {
    Home,
    Search,
    Notifications,
    Email,
} from '../../styles/Icons';

export const BottomMenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    border-top: 1px solid var(--outline);

    background: var(--primary);

    display: flex;
    justify-content: space-between;
    
    padding: 8px min(48px, max(10vw, 10px));

    @media screen and (min-width: 500px) {
        display: none;
    }
`;

const iconCss = css`
    width: 31px;
    height: 31px;

    cursor: pointer;

    fill: var(--gray);

    &:hover,
    &.active {
        fill: var(--twitter);
    }
`;

export const HomeIcon = styled(Home)`
    ${iconCss}
`;
export const SearchIcon = styled(Search)`
${iconCss}`;
export const BellIcon = styled(Notifications)`${iconCss}`;
export const EmailIcon = styled(Email)`${iconCss}`;

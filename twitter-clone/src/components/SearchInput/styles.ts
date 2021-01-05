import styled from 'styled-components';
import { Search } from '../../styles/Icons';

export const SearchContainer = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 4;
  background: var(--color-primary);

  max-height: 58px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 38px;

    font-size: 14px;
    padding: 0 10px 0 52px;
    border-radius: 20px;
    background: var(--search);
    position: relative;

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -33px;
        left: 15px;
        z-index: 1;
    }

    outline: 0;

    &:focus {
        border: 1px solid var(--twitter);

        ~ svg {
            fill: var(--twitter);
        }
    }
`;

export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;

    fill: var(--gray);
`;
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--color-secondary);
  border-radius: 15px;
`;

export const ListItem = styled.div`
    padding: 10px 16px;

    & + div {
        border-top: 1px solid var(--outline);
    }

    &:first-child {
        padding-top: 14px;
    }

    &:last-child {
        padding-bottom: 18px;
    }
`;

export const ItemTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
`;
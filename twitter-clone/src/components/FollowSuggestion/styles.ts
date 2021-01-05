import styled from 'styled-components';
import Button from '../Buttons/DefaultButton/defaultButton';
import Avatar from '../Avatar/avatar';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
      display: flex;
      align-items: center;
  }
`;

export const CardAvatar = styled(Avatar)`
    margin-right: 10px;
    border: none;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-overflow: ellipsis;

    > span {
        color: var(--gray);
    }
`;

export const FollowButton = styled(Button)`
    padding: 6px 16px;
`;

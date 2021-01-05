import styled from 'styled-components';

interface Props {
    isOutline?: boolean,
};

export default styled.button<Props>`
    background: ${({isOutline}:Props) => isOutline 
  ? 'transparent' 
  : 'var(--twitter)'};
  color: ${({isOutline}) => isOutline 
  ? 'var(--twitter)' 
  : 'var(--white)'};
  border: ${({isOutline}) => isOutline 
  ? '1px solid var(--twitter)' 
  : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;

  &:hover {
      background: ${({isOutline}) => isOutline 
      ? 'var(--twitter-dark-hover)' 
      : 'var(--twitter-light-hover)'};
  }
`;

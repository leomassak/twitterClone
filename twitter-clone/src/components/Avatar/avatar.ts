import styled from 'styled-components';

type Props = {
    size?: number;
}

export default styled.div<Props>`
  width: ${({size}) => size ? `${size}px` : 'max(45px, min(135px, 22vw))'};
  height: ${({size}) => size ? `${size}px` : 'max(45px, min(135px, 22vw))'};

  border: 3.75px solid var(--color-primary);
  border-radius: 50%;
  background-color: var(--gray);
`;

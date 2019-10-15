import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: ${props => (props.size ? `${props.size}px` : '64px')};
  height: ${props => (props.size ? `${props.size}px` : '64px')};
  border: 2px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  object-fit: cover;
`;

import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  width: 180px;
  height: 150px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    margin: 5px 0;
  }
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 2px solid #eee;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  object-fit: cover;
`;

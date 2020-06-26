import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  background: rgba(0, 0, 0, 0.8);

  .hide {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      color: white;
      margin-top: 32px;
    }
  }
`;

import styled, { keyframes } from 'styled-components';

export const flatline = keyframes`
0%{
    left:0;
    width:0;
  }
  50%{
    left:25%;
    width:75%
  }
  75%{
    left:100%;
    width:0
  }
`;

export const LoaderBar = styled.div`
  }
  > div {
    margin-top: 1.5px;
    position: fixed;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #f0f0f0;
    overflow: hidden;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 4px;
      border-radius: 4px;
      z-index: 2;
    }
    &:before {
      background: linear-gradient(90deg, #08aeea, #2af598);
      animation: ${flatline} 1.2s linear infinite;
    }

    &:after {
      background: linear-gradient(90deg, #b721ff, #08aeea);
      animation: ${flatline} 1.2s 0.5s linear infinite;
    }
`;

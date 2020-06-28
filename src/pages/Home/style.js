import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from '../../img/logo.svg';
import Login from '../../img/log-in.svg';
import Search from '../../img/search.svg';

export const Container = styled.div`
  height: 100vh;
  background: url(${Background}) no-repeat;
  background-position: 55vw bottom;
  background-position-y: 130px;

  > a {
    display: flex;
    color: var(--title-color);
    font-weight: 700;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  > header {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 54px;
    }

    > div {
      display: flex;
      > a {
        display: flex;
        padding: 10px;
        color: var(--title-color);
        font-weight: 700;
      }
      > a span {
        margin-right: 16px;
        display: flex;
        background-image: url(${Login});
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 560px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 54px;
  }

  > p {
    color: var(--text);
    font-size: 24px;
    line-height: 38px;
    margin-top: 24px;
  }
`;

export const MyLink = styled(Link)`
cursor: pointer;
  width: 100%;
  max-width: 360px;
  height: 72px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  margin-top: 40px;

  background: var(--primary-color);
  transition: 400ms;

  &:hover {
    background-color: #2fb86e;
  }

  > span {
    width: 72px;
    height: 72px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span::after {
    content: '';
  background-image: url('${Search}');
    width: 20px;
    height: 20px;
  }

  > strong {
    flex: 1;
    color: white;
    text-align: center;
  }
`;

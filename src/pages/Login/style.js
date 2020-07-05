import styled from 'styled-components';
import Arrow from '../../img/arrow-left.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 1.7px;
  /* alinhamento de caixa */
  margin: 0 auto;

  > header {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 54px;
      margin-left: 8.5px;
    }

    > a {
      color: var(--title-color);
      font-weight: bold;

      display: flex;
      align-items: center;

      > span {
        background-image: url(${Arrow});
        margin-right: 16px;
        display: flex;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: var(--form);
  margin-top: 80px;
  /* preenchimento */
  padding: 64px;
  border-radius: 8px;
  max-width: 730px;
  margin: 80px auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h1 {
      font-size: 36px;
    }
  }

  > fieldset {
    margin-top: 64px;
    border: 0;
  }

  > legend {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > h2 {
      font-size: 24px;
    }

    > span {
      font-size: 14px;
      color: var(--title-color);
    }
  }

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  > label {
    color: var(--text);
    font-size: 14px;
    margin-bottom: 8px;
  }

  > button {
    width: 260px;
    height: 56px;
    background-color: var(--primary-color);
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    margin-top: 40px;
    transition: background-color 400ms;

    &:hover {
      background-color: #2fb86e;
    }
  }
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  > input,
  select {
    background-color: #f0f0f5;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
  }
`;

export const FieldGroup = styled.div`
  display: flex;

  > div + div {
    margin-left: 24px;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  > li {
    background-color: #f5f5f5;
    list-style: none;
    border: 2px solid #f5f5f5;
    border-radius: 8px;
    height: 180px;
    padding: 32px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    cursor: pointer;

    > span {
      margin-top: 12px;
      flex: 1;
      display: flex;
      align-items: center;
      color: var(--title-color);
    }

    > img {
      display: flex;
      width: 150px;
    }

    img,
    span {
      pointer-events: none;
    }
  }

  .selected {
    background-color: red;
    background: var(--li-back);
    border: 2px solid var(--li-border);
  }
`;

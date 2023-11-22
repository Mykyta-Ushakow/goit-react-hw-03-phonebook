import styled from 'styled-components';

export const AppDiv = styled('div')`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #010101;
  background-color: #c2baba;

  padding-bottom: 50px;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0;
    margin: 0;
    margin-top: 50px;
  }

  li {
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    font-size: 40px;
    border-radius: 15px;
    padding-left: 10px;
  }

  button {
    width: 140px;
    height: 100%;
    font-size: 20px;
    border-radius: 15px;
  }
`;

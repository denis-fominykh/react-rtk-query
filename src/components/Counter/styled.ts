import styled from 'styled-components/macro';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Value = styled.span`
  font-size: 78px;
  margin-top: 2px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: 'Courier New', Courier, monospace;
`;

export const Button = styled.button`
  outline: none;
  font-size: 32px;
  cursor: pointer;
  appearance: none;
  background: none;
  padding-left: 12px;
  border-radius: 2px;
  padding-right: 12px;
  padding-bottom: 4px;
  transition: all 0.15s;
  color: rgb(112, 76, 182);
  border: 2px solid transparent;
  background-color: rgba(112, 76, 182, 0.1);

  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

export const TextBox = styled.input`
  width: 64px;
  padding: 2px;
  font-size: 32px;
  margin-right: 4px;
  text-align: center;
`;

export const AsyncButton = styled.button`
  outline: none;
  font-size: 32px;
  cursor: pointer;
  composes: button;
  appearance: none;
  background: none;
  position: relative;
  padding-left: 12px;
  border-radius: 2px;
  padding-right: 12px;
  padding-bottom: 4px;
  transition: all 0.15s;
  color: rgb(112, 76, 182);
  border: 2px solid transparent;
  background-color: rgba(112, 76, 182, 0.1);

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-color: rgba(112, 76, 182, 0.15);
    transition: width 1s linear, opacity 0.5s ease 1s;
  }

  &:active:after {
    width: 0;
    opacity: 1;
    transition: 0s;
  }
`;

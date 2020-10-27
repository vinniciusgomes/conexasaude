import styled, {css} from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f4f5fa;
  border-radius: 10px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: #b5bcc7;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #7081fa;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #1d1d1d;
  font-size: 16px;
`;

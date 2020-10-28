import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  align-items: center;

  background: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #121214;
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #121214;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0px ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;

export const Button = styled(RectButton)`
  width: 70%;
  height: 55px;
  margin-top: 24px;

  background-color: #7081fa;
  border-radius: 7px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const FormContainer = styled.View`
  width: 100%;

  align-items: center;
`;

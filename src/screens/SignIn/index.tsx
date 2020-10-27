import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import {useAuth} from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  Button,
  ButtonText,
  FormContainer,
} from './styles';

const SignIn: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const {signIn} = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await signIn({userEmail, password: userPassword});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Acesse sua conta</Title>
            </View>
            <FormContainer>
              <Input
                name="email"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={(email) => setUserEmail(email)}
              />
              <Input
                name="password"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onChangeText={(password) => setUserPassword(password)}
                onSubmitEditing={handleSignIn}
              />

              <Button onPress={handleSignIn}>
                <ButtonText>Entrar</ButtonText>
              </Button>
            </FormContainer>
            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;

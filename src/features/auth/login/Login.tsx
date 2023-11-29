import React from 'react'
import { Pressable } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import {
  Container,
  WelcomeText,
  InputText,
  ForgotText,
  LogInButton,
  NoAccountText,
  RegisterText,
} from '../../../styles/LoginStyle'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#635a51',
    text: '#635a51',
  },
}

const Login = () => {
  return (
    <PaperProvider theme={theme}>
      <Container>
        <WelcomeText>Welcome back!</WelcomeText>
        <InputText label="Email" theme={{ colors: { primary: '#635a51' } }} />
        <InputText
          label="Password"
          theme={{ colors: { primary: '#635a51' } }}
        />
        <Pressable onPress={() => console.log('Forgot your password')}>
          <ForgotText>Forgot your password?</ForgotText>
        </Pressable>
        <LogInButton
          mode="contained"
          onPress={() => console.log('Log In Pressed')}
          style={{ backgroundColor: '#BB816B' }} // Cambia el color de fondo aquí
          contentStyle={{ height: 50 }} // Ajusta el estilo del contenido según sea necesario
        >
          Log In
        </LogInButton>
        <Pressable onPress={() => console.log('Register')}>
          <NoAccountText>
            Don't have account?
            <RegisterText>
              <RegisterText> Register</RegisterText>
            </RegisterText>
          </NoAccountText>
        </Pressable>
      </Container>
    </PaperProvider>
  )
}

export default Login

import {
  BotonRegister,
  ContainerRegister,
  ImageRegister,
  InputRegister,
  TitleRegister,
} from '../../../styles/RegisterStyle'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#635a51',
    text: '#635a51',
  },
}
const Register = () => {
  return (
    <PaperProvider theme={theme}>
      <ContainerRegister>
        <ImageRegister source={require('../../../assets/coffe-register.jpg')} />
        <TitleRegister>Register</TitleRegister>
        <InputRegister
          label={'Email'}
          theme={{ colors: { primary: '#635a51' } }}
        />
        <InputRegister
          label="Password"
          theme={{ colors: { primary: '#635a51' } }}
        />
        <InputRegister
          label="Confirm Password"
          theme={{ colors: { primary: '#635a51' } }}
        />
        <BotonRegister onPress={() => console.log('Pressed')}>
          Register
        </BotonRegister>
      </ContainerRegister>
    </PaperProvider>
  )
}

export default Register

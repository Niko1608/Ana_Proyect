import { useForm, Controller } from 'react-hook-form'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import {
  ButtonRegister,
  ContainerRegister,
  ImageRegister,
  InputRegister,
  TitleRegister,
} from '../../../styles/RegisterStyle'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#635a51',
    text: '#635a51',
  },
}
const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const onSubmit = (data: any) => console.log(data)
  return (
    <PaperProvider theme={theme}>
      <ContainerRegister>
        <ImageRegister source={require('../../../assets/coffe-register.jpg')} />
        <TitleRegister>Register</TitleRegister>
        <InputRegister
          label="Email"
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
        <ButtonRegister
          onPress={() => console.log('Pressed')}
          style={{ backgroundColor: '#BB816B' }}
        >
          Register
        </ButtonRegister>
      </ContainerRegister>
    </PaperProvider>
  )
}

export default Register

import { useForm, Controller } from 'react-hook-form'
import {
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper'

import {
  BotonRegister,
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputRegister
              label="Email"
              theme={{ colors: { primary: '#635a51' } }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputRegister
              label="Password"
              theme={{ colors: { primary: '#635a51' } }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputRegister
              label="Confirm Password"
              theme={{ colors: { primary: '#635a51' } }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text>This is required.</Text>}
        <BotonRegister onPress={handleSubmit(onSubmit)}>Register</BotonRegister>
      </ContainerRegister>
    </PaperProvider>
  )
}

export default Register

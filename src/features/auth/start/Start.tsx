import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  ButtonUnder,
  ButtonRegister,
  ButtonLogin,
  ContainerButtonLoginRegister,
  ContainerFather,
  ContainerImage,
  ContainerTextHalf,
  ImageCoffee,
  TextHalf,
  ContainerButtonUnder,
} from '../../../styles/StartStyle'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#635a51',
    text: '#635a51',
  },
}

const Start = () => {
  return (
    <PaperProvider theme={theme}>
      <ContainerFather>
        <ContainerImage>
          <ImageCoffee
            source={require('../../../assets/brown-coffee-selling.png')}
          />
        </ContainerImage>
        <ContainerTextHalf>
          <TextHalf>Get the best coffee</TextHalf>
          <TextHalf>in town!</TextHalf>
        </ContainerTextHalf>

        <ContainerButtonLoginRegister>
          <ButtonRegister
            mode="contained"
            onPress={() => console.log('Register Pressed')}
            style={{ backgroundColor: '#BB816B' }}
            contentStyle={{ height: 50 }}
          >
            Register
          </ButtonRegister>
          <ButtonLogin
            mode="outlined"
            onPress={() => console.log('Log In Pressed')}
            contentStyle={{ height: 50 }}
            labelStyle={{ color: '#BB816B' }}
            style={{ borderColor: '#BB816B' }}
          >
            Log in
          </ButtonLogin>
        </ContainerButtonLoginRegister>
        <ContainerButtonUnder>
          <ButtonUnder
            icon={({ size, color }) => (
              <Icon name="facebook" size={size} color={color} />
            )}
            onPress={() => console.log('Connect with Facebook Pressed')}
            labelStyle={{ color: '#1877f2' }}
          >
            Connect with Facebook
          </ButtonUnder>
        </ContainerButtonUnder>
      </ContainerFather>
    </PaperProvider>
  )
}

export default Start

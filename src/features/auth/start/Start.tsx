import { Text } from 'react-native'
import {
  ButtonUnder,
  Buttons,
  ContainerButtonLoginRegister,
  ContainerFather,
  ContainerImage,
  ContainerTextHalf,
  ImageCoffee,
  TextHalf,
  ContainerButtonUnder,
} from '../../../styles/StartStyle'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

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
          <Buttons>Register</Buttons>
          <Buttons>login</Buttons>
        </ContainerButtonLoginRegister>
        <ContainerButtonUnder>
          <ButtonUnder>Connect Facebook</ButtonUnder>
        </ContainerButtonUnder>
      </ContainerFather>
    </PaperProvider>
  )
}

export default Start

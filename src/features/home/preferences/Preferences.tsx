import { Text } from 'react-native'
import { Button, Divider } from 'react-native-paper'

import {
  Boton,
  ContainerPreferencesStyle,
  ConteinerText,
  ContentButtom,
  ContentImage,
  ContentText,
  ImageCoffeeGlass,
} from '../../../styles/PreferencesStyle'

const Preferences = () => {
  return (
    <ContainerPreferencesStyle>
      <ContentImage>
        <ImageCoffeeGlass
          source={require('../../../assets/coffee-glass.png')}
        />
      </ContentImage>
      <ConteinerText>
        <ContentText>
          <Text>Macciato</Text>
          <Text>36EGP</Text>
        </ContentText>
        <ContentText>
          <Text>1</Text>
        </ContentText>
        <ContentText>
          <ContentButtom>
            <Boton>-</Boton>
            <Boton>+</Boton>
          </ContentButtom>
        </ContentText>
      </ConteinerText>
      <Divider />
    </ContainerPreferencesStyle>
  )
}

export default Preferences

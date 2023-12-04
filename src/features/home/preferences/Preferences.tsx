import React, { useState } from 'react'
import { Text } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  TouchableRipple,
} from 'react-native-paper'

import {
  BotonLeft,
  BotonRight,
  ContainerPreferencesStyle,
  ConteinerText,
  ContentImage,
  ContentText,
  ImageCoffeeGlass,
} from '../../../styles/PreferencesStyle'

const Preferences = () => {
  const [count, setCount] = useState(0)
  const [activo, setActivo] = useState(false)

  const handleToggle = () => {
    setActivo((prevActivo) => !prevActivo)
  }
  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
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
          <Text>{count}</Text>
        </ContentText>
        <BotonLeft mode="outlined" onPress={decrementCount}>
          -
        </BotonLeft>
        <BotonRight mode="outlined" onPress={incrementCount}>
          +
        </BotonRight>
      </ConteinerText>

      <Divider />
      <ConteinerText>
        <ContentText>
          <Text>Size</Text>
        </ContentText>
        <TouchableRipple
          onPress={handleToggle}
          rippleColor={activo ? 'rgba(82, 71, 244, 0.32)' : '#ffffff'}
        >
          <IconButton icon="camera" size={10} />
        </TouchableRipple>
        <IconButton
          icon="camera"
          size={15}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="camera"
          size={25}
          onPress={() => console.log('Pressed')}
          iconColor={activo ? 'rgba(82, 71, 244, 0.32)' : '#ffffff'}
        />
      </ConteinerText>
      <Divider />
      <ConteinerText>
        <ContentText>
          <Text>Sugar</Text>
        </ContentText>
        <ContentText>
          <Text>1</Text>
        </ContentText>
      </ConteinerText>
      <Divider />
      <ConteinerText>
        <ContentText>
          <Text>Addtions</Text>
        </ContentText>
        <ContentText>
          <Text>1</Text>
        </ContentText>
      </ConteinerText>
      <Divider />
      <ConteinerText>
        <ContentText>
          <Text>Total</Text>
        </ContentText>
        <ContentText />
        <Text>$42</Text>
      </ConteinerText>
      <Button mode="outlined">Add </Button>
    </ContainerPreferencesStyle>
  )
}

export default Preferences

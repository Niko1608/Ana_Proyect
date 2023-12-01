import styled, { css } from '@emotion/native'
import { Image, ImageBackground } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'

export const ContainerFather = styled.View`
  width: 100%;
  height: 100%;
  background-color: #f7e6d4;
`

export const ContainerButton = styled.View`
  gap: 2px;
  margin-top: 100px;
`

export const Buttons = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 0px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 120px;
`
export const Texts = styled.Text`
  font-size: 20px;
  color: #635a51;
`
export const ImageCoffee = styled(Image)`
  width: 40px;
  height: 40px;
`

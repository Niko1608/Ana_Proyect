import styled, { css } from '@emotion/native'
import { TextInput, Button } from 'react-native-paper'
import { Image, ImageBackground } from 'react-native'

export const ContainerFather = styled.View`
  gap: 45px;
`

export const ContainerImage = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 300px;
  background-color: #f7e6d4;
  border-radius: 150px 200px 100px 10px;
  align-items: center;
  justify-content: center;
`
export const ContainerButtonLoginRegister = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`

export const ContainerTextHalf = styled.View``
export const ContainerButtonUnder = styled.View`
  justify-content: center;
  align-items: center;
`

export const ImageCoffee = styled(Image)`
  width: 200px;
  height: 210px;
`

export const Buttons = styled(Button)`
  width: 140px;
  height: 45px;
  border-radius: 50px;
  background-color: #bd806b;
  justify-content: center;
`

export const TextHalf = styled.Text`
  font-size: 30px;
  color: #635a51;
  text-align: center;
`

export const ButtonUnder = styled(Button)`
  width: 290px;
  height: 45px;
  border-radius: 50px;
  border: 1px solid #bd806b;
  justify-content: center;
`

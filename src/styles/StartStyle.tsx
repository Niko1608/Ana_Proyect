import styled, { css } from '@emotion/native'
import { Image, ImageBackground } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

export const ContainerFather = styled.View`
  gap: 45px;
  margin-top: 40px;
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
  margin-top: 30px;
`

export const ContainerTextHalf = styled.View``
export const ContainerButtonUnder = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`

export const ImageCoffee = styled(Image)`
  width: 200px;
  height: 210px;
`
export const Buttons = styled(Button)`
  width: 140px;
  height: 45px;
  border-radius: 50px;
  border-color: #bb816b;
  justify-content: center;
`
export const ButtonLogin = styled(Button)`
  width: 140px;
  height: 45px;
  border-radius: 50px;
  border-color: #bb816b;
  justify-content: center;
`
export const ButtonRegister = styled(Button)`
  width: 140px;
  height: 45px;
  border-radius: 50px;
  border-color: #bb816b;
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
  border: 1px solid #bb816b;
  justify-content: center;
  font-weight: bold;
`

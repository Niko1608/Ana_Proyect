import styled from '@emotion/native'
import { Image } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

export const ContainerRegister = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  gap: 20px;
`
export const TitleRegister = styled(Text)`
  font-size: 30px;
  color: #635a51;
  text-align: center;
`
export const ImageRegister = styled(Image)`
  width: 90%;
  height: 25%;
  border-radius: 16px;
  margin: 20px;
`
export const InputRegister = styled(TextInput)`
  margin: 0px 40px 0px 40px;
  background-color: #fff;
`
export const ButtonRegister = styled(Text)`
  margin: 20px 40px 0px 40px;
  background-color: #635a51;
  padding: 10px;
  border-radius: 40px;
  text-align: center;
  color: #fff;
`

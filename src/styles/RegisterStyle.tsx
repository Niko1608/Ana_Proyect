import styled from '@emotion/native'
import { Image } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

export const ContainerRegister = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
`
export const TitleRegister = styled(Text)`
  font-size: 30px;
  color: #635a51;
  text-align: center;
`
export const ImageRegister = styled(Image)`
  width: 100%;
  height: 25%;
`
export const InputRegister = styled(TextInput)`
  margin: 10px 30px 20px 40px;
  background-color: #fff;
`
export const BotonRegister = styled(Text)`
  margin: 50px;

  background-color: #635a51;
  padding: 10px;
  border-radius: 40px;
  text-align: center;
  color: #fff;
`

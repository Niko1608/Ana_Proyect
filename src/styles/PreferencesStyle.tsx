import styled from '@emotion/native'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
export const ContainerPreferencesStyle = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  gap: 20px;
`
export const ContentImage = styled.View`
  width: 100%;
  height: 40%;
  background-color: #f5e3d1;
`
export const ImageCoffeeGlass = styled(Image)`
  width: 50%;
  height: 100%;
  margin: 1px 0 0 100px;
  background-color: #f5e3d1;
`
export const ConteinerText = styled.View`
  flex-direction: row;
`
export const ContentText = styled.View`
  width: 100px;
  height: 30px;
  margin-left: 40px;
`
export const ContentButtom = styled.View`
  flex-direction: row;
  width: 10px;
  height: 30px;
`
export const Boton = styled(Button)`
  width: 100px;
  height: 30px;
  border-radius: 5px;
`

import styled from '@emotion/native'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
export const ContainerPreferencesStyle = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  gap: 8px;
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
  margin-right: 10px;
`

export const BotonLeft = styled(Button)`
  border-bottom-left-radius: 900px;
  border-top-right-radius: 200px;
  border-bottom-right-radius: 400px;
  border-top-left-radius: 700px;
  margin-left: 40px;
`
export const BotonRight = styled(Button)`
  border-bottom-left-radius: 400px;
  border-top-right-radius: 700px;
  border-bottom-right-radius: 900px;
  border-top-left-radius: 100px;
  margin-left: 5px;
`

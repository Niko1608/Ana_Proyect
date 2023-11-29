import styled from '@emotion/native'
import { TextInput, Button, Text } from 'react-native-paper'

export const Container = styled.View`
  display: flex;
  background-color: #fff;
  height: 100%;
  width: 100%;
  gap: 20px;
`
export const WelcomeText = styled(Text)`
  font-size: 40px;
  color: #635a51;
  margin: 20px 0px 0px 40px;
`
export const InputText = styled(TextInput)`
  background-color: #fff;
  margin: 20px 40px 0px 40px;
`
export const ForgotText = styled(Text)`
  font-size: 15px;
  color: #635a51;
  margin: 10px 0px 0px 53%;
`
export const LogInButton = styled(Button)`
  margin: 20px 40px 0px 40px;
  border-radius: 24px;
`
export const NoAccountText = styled(Text)`
  font-size: 15px;
  color: #ccc;
  margin: 0px 0px 0px 30%;
`
export const RegisterText = styled(Text)`
  font-size: 15px;
  color: #bb816b;
  font-weight: bold;
`

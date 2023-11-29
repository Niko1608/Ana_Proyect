import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthRoutes, AuthRoutesProps } from './types'
import { Login } from '../login'

const Stack = createNativeStackNavigator<AuthRoutesProps>()

const AuthRouter = () => (
  <Stack.Navigator>
    <Stack.Screen name={AuthRoutes.Login} component={Login} />
  </Stack.Navigator>
)

export default AuthRouter
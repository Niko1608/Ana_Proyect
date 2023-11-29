import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthRoutes, AuthRoutesProps } from './types'
import { Login } from '../login'
import { Register } from '../register'
import { Start } from '../start/index'

const Stack = createNativeStackNavigator<AuthRoutesProps>()

const AuthRouter = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AuthRoutes.Login}
      component={Login}
      options={{ title: 'Login', headerTitleAlign: 'center' }}
    />
    <Stack.Screen
      name={AuthRoutes.Register}
      component={Register}
      options={{ title: 'Register', headerTitleAlign: 'center' }}
    />
    <Stack.Screen
      name={AuthRoutes.Start}
      component={Start}
      options={{ title: 'Start', headerTitleAlign: 'center' }}
    />
  </Stack.Navigator>
)

export default AuthRouter

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { IconButton } from 'react-native-paper'

import { AuthRoutes, AuthRoutesProps } from './types'
import Login from '../login'
import Register from '../register'
import Start from '../start/index'

const Stack = createNativeStackNavigator<AuthRoutesProps>()

const AuthRouter = () => (
  <Stack.Navigator initialRouteName={AuthRoutes.Start}>
    <Stack.Screen
      name={AuthRoutes.Start}
      component={Start}
      options={{
        title: 'Start',
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={AuthRoutes.Register}
      component={Register}
      options={({ navigation }) => ({
        title: 'Register',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconButton
            icon="chevron-left"
            size={30}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate(AuthRoutes.Start)}
          />
        ),
      })}
    />
    <Stack.Screen
      name={AuthRoutes.Login}
      component={Login}
      options={({ navigation }) => ({
        title: 'Login',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <IconButton
            icon="chevron-left"
            size={30}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate(AuthRoutes.Start)}
          />
        ),
      })}
    />
  </Stack.Navigator>
)

export default AuthRouter

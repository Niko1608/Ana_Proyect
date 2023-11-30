import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'

import { AdminRoutes, AdminRoutesProps } from './types'
import AuthRouter from '../auth/router/AuthRouter'
import HomeRouter from '../home/router/HomeRouter'

const Stack = createNativeStackNavigator<AdminRoutesProps>()

const AppRouter = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={AdminRoutes.Home}
        component={HomeRouter}
        options={{ title: 'Home', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name={AdminRoutes.Auth}
        component={AuthRouter}
        options={{
          title: 'Authentication',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppRouter

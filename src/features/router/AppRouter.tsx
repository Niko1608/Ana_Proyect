import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'

import { AdminRoutes, AdminRoutesProps } from './types'
import AuthRouter from '../auth/router/AuthRouter'

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator<AdminRoutesProps>()

const AppRouter = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={AdminRoutes.Auth}
        component={AuthRouter}
        options={{ title: 'Authentication', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name={AdminRoutes.Home}
        component={Home}
        options={{ title: 'Home', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppRouter

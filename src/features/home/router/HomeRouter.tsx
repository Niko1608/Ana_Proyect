import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeRoutesProps, HomeRoutes } from './types'
import Account from '../account/Account'
import Maps from '../maps/Maps'
import Menu from '../menu/Menu'
import Preferences from '../preferences/Preferences'

const Tab = createBottomTabNavigator<HomeRoutesProps>()

const HomeRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeRoutes.Menu}
      screenOptions={{
        tabBarActiveTintColor: '#BB816B',
        tabBarInactiveTintColor: '#635a51',
      }}
    >
      <Tab.Screen
        name={HomeRoutes.Menu}
        component={Menu}
        options={{
          tabBarLabel: '',
          title: 'Menu',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={HomeRoutes.Map}
        component={Maps}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name={HomeRoutes.Preferences}
        component={Preferences}
        options={({ navigation }) => ({
          tabBarLabel: '',
          title: 'Preferences',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={30}
            />
          ),
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate(HomeRoutes.Menu)}
              />
            )
          },
        })}
      />
      <Tab.Screen
        name={HomeRoutes.Account}
        component={Account}
        options={({ navigation }) => ({
          tabBarLabel: '',
          title: 'Account',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={30}
            />
          ),
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate(HomeRoutes.Menu)}
              />
            )
          },
        })}
      />
    </Tab.Navigator>
  )
}

export default HomeRouter

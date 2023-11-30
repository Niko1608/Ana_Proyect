import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeRoutesProps, HomeRoutes } from './types'
import Account from '../account/Account'
import Maps from '../maps/Maps'
import Menu from '../menu/Menu'
import Preferences from '../preferences/Preferences'

const Tab = createBottomTabNavigator<HomeRoutesProps>()

const HomeRouter = () => (
  <Tab.Navigator>
    <Tab.Screen name={HomeRoutes.Menu} component={Menu} />
    <Tab.Screen name={HomeRoutes.Map} component={Maps} />
    <Tab.Screen name={HomeRoutes.Preferences} component={Preferences} />
    <Tab.Screen name={HomeRoutes.Account} component={Account} />
  </Tab.Navigator>
)

export default HomeRouter

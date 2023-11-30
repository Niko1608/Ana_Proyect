import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'

import { AdminRoutes, AppNavigation } from '../../router/types'

export enum HomeRoutes {
  Map = 'map',
  Preferences = 'preferences',
  Menu = 'menu',
  Account = 'account',
}

export type HomeRoutesProps = {
  map: undefined
  preferences: undefined
  menu: undefined
  account: undefined
}

export type HomeNavigation<CurrentRoute extends keyof HomeRoutesProps> =
  CompositeNavigationProp<
    AppNavigation<AdminRoutes.Home>,
    BottomTabNavigationProp<HomeRoutesProps, CurrentRoute>
  >

import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AdminRoutes, AppNavigation } from '../../router/types'

export enum AuthRoutes {
  Login = 'login',
  Register = 'register',
  Start = 'start',
}

export type AuthRoutesProps = {
  login: undefined
  register: undefined
  start: undefined
}

export type AuthNavigation<CurrentRoute extends keyof AuthRoutesProps> =
  CompositeNavigationProp<
    AppNavigation<AdminRoutes.Auth>,
    NativeStackNavigationProp<AuthRoutesProps, CurrentRoute>
  >

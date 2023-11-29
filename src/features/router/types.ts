import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum AdminRoutes {
  Auth = 'auth',
  Home = 'home',
}

export type AdminRoutesProps = {
  auth: undefined
  home: undefined
}

export type AppNavigation<CurrentRoute extends keyof AdminRoutesProps> =
  NativeStackNavigationProp<AdminRoutesProps, CurrentRoute>

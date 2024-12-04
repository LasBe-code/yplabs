import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
import DetailScreen from '../../screens/detail';
import {ITodo} from '../../store/todo/todo.type';

export type RootStackParam = {
  Home: undefined;
  Detail: {todoData: ITodo};
};

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {headerShown: false},
  screens: {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;

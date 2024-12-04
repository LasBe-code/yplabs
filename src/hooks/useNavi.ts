import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParam} from '../commons/navigation';

const useNavi = () => useNavigation<NavigationProp<RootStackParam>>();
export default useNavi;

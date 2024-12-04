import styled from 'styled-components/native';
import {Animated} from 'react-native';

const TouchableContainer = styled.TouchableOpacity<{color: string}>`
  width: 36px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${props => props.color};
`;

const Wheel = styled(Animated.View)`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 99px;
`;

const ToogleStyled = {TouchableContainer, Wheel};
export default ToogleStyled;

import styled from 'styled-components/native';
import COLOR from '../../commons/color';

const Default = styled.TouchableOpacity<{
  bgColor?: keyof typeof COLOR;
  disabled?: boolean;
}>`
  background-color: ${props => props.bgColor || COLOR.blue};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const Button = {Default};
export default Button;

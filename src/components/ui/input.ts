import styled from 'styled-components/native';
import COLOR from '../../commons/color';

const Default = styled.TextInput`
  flex: 1;
  padding: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${COLOR.gray};
  font-size: 22px;
  font-weight: 500;
`;
const Input = {Default};
export default Input;

import styled from 'styled-components/native';

const Default = styled.Text<{
  color?: string;
  align?: 'left' | 'center' | 'right';
}>`
  color: ${props => props.color || 'black'};
  text-align: ${props => props.align || 'left'};
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const Title = styled(Default)`
  font-size: 22px;
`;
const SubTitle = styled(Default)`
  font-size: 18px;
`;
const Body = styled(Default)`
  font-size: 16px;
`;
const Caption = styled(Default)`
  font-size: 14px;
`;

const Font = {Title, SubTitle, Body, Caption};
export default Font;

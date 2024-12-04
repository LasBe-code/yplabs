import styled from 'styled-components/native';

const RootSafe = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
`;

type ViewProps = {
  flex?: number;
  flexDirection?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  padding?: string;
};

const View = styled.View<ViewProps>`
  ${({flex}) => flex && `flex:${flex};`}
  ${({flexDirection}) => flexDirection && `flex-direction:${flexDirection};`}
  ${({justifyContent}) =>
    justifyContent && `justify-content:${justifyContent};`}
  ${({alignItems}) => alignItems && `align-items:${alignItems};`}
  ${({gap}) => gap && `gap:${gap};`}
  ${({padding}) => padding && `padding:${padding};`}
`;

const Card = styled(View)`
  background-color: white;
  border-radius: 8px;
`;

const Container = {RootSafe, View, Card};
export default Container;

import Font from '../font';
import TitleStyled from './title.styled';

type TitleProps = {
  title: string;
};

export default function Title({title}: TitleProps) {
  return (
    <TitleStyled.Container>
      <Font.Title>{title}</Font.Title>
    </TitleStyled.Container>
  );
}

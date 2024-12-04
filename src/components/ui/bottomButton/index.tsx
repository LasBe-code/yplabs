import Button from '../button';
import Font from '../font';
import BottomButtonStyled from './bottomButton.styled';

type BottomButtonProps = {
  onPress: () => any;
  text: string;
};

export default function BottomButton({onPress, text}: BottomButtonProps) {
  return (
    <BottomButtonStyled.Container>
      <Button.Default onPress={onPress}>
        <Font.SubTitle color="white" align="center">
          {text}
        </Font.SubTitle>
      </Button.Default>
    </BottomButtonStyled.Container>
  );
}

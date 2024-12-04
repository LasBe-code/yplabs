import {ITodo} from '../../store/todo/todo.type';
import TodoStyled from './todo.styled';
import Font from '../ui/font';
import useNavi from '../../hooks/useNavi';
import dateUtil from '../../commons/utils/date';
import COLOR from '../../commons/color';
import TodoToggle from '../todoToogle';
import Container from '../ui/container';

type TodoProps = {
  data: ITodo;
};

export default function Todo({data}: TodoProps) {
  const navigation = useNavi();
  const handlePress = () => navigation.navigate('Detail', {todoData: data});

  return (
    <TodoStyled.TouchableContainer onPress={handlePress}>
      <Container.View
        flex={1}
        flexDirection="row"
        justifyContent="space-between">
        <Font.Caption color={COLOR.gray}>
          {dateUtil.formatStringDate(data.create_at)}
        </Font.Caption>
        <TodoToggle id={data.id} />
      </Container.View>
      <Font.SubTitle numberOfLines={5}>{data.content}</Font.SubTitle>
    </TodoStyled.TouchableContainer>
  );
}

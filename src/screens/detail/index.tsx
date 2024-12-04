import BottomButtonContainer from '../../components/ui/bottomButtonContainer';
import Container from '../../components/ui/container';
import Font from '../../components/ui/font';
import Button from '../../components/ui/button';
import {ITodo} from '../../store/todo/todo.type';
import dateUtil from '../../commons/utils/date';
import useNavi from '../../hooks/useNavi';
import React, {useState} from 'react';
import UpdateTodoModal from '../../components/updateTodoModal';
import useTodo from '../../hooks/useTodo';
import Title from '../../components/ui/title';
import TodoToggle from '../../components/todoToogle';
import useIsDoneTodo from '../../hooks/useIsDoneTodo';

export default function DetailScreen({
  route,
}: {
  route: {params: {todoData: ITodo}};
}) {
  const todoData = route.params.todoData;
  const {deleteTodo, updateTodo} = useTodo();
  const {isDoneTodo} = useIsDoneTodo(todoData.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavi();
  const handleDelete = () => {
    deleteTodo(todoData.id);
    navigation.goBack();
  };
  const handleUpdate = (value: string) =>
    updateTodo({id: todoData.id, content: value});
  const handleBack = () => navigation.goBack();
  return (
    <>
      <Container.View flex={1} padding="16px">
        <Container.View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Title title="Todo Detail" />
          <TodoToggle id={todoData.id} />
        </Container.View>
        <Container.View flex={1} justifyContent="center" gap="8px">
          <Container.Card padding="16px" flex={1}>
            <Font.Caption color="gray">todo</Font.Caption>
            <Font.SubTitle>{todoData?.content}</Font.SubTitle>
          </Container.Card>
          <Container.Card padding="16px">
            <Font.Caption color="gray">create</Font.Caption>
            <Font.SubTitle>
              {dateUtil.formatStringDate(todoData.create_at)}
            </Font.SubTitle>
          </Container.Card>
          <Container.Card padding="16px">
            <Font.Caption color="gray">update</Font.Caption>
            <Font.SubTitle>
              {dateUtil.formatStringDate(todoData.update_at)}
            </Font.SubTitle>
          </Container.Card>
          <BottomButtonContainer>
            <Button.Default
              onPress={() => setIsModalOpen(true)}
              disabled={isDoneTodo()}>
              <Font.Body color="white" align="center">
                수정
              </Font.Body>
            </Button.Default>
            <Button.Default bgColor="red" onPress={handleDelete}>
              <Font.Body color="white" align="center">
                삭제
              </Font.Body>
            </Button.Default>
            <Button.Default bgColor="gray" onPress={handleBack}>
              <Font.Body color="white" align="center">
                뒤로가기
              </Font.Body>
            </Button.Default>
          </BottomButtonContainer>
        </Container.View>
      </Container.View>
      <UpdateTodoModal
        isModalOpen={isModalOpen}
        onUpdate={handleUpdate}
        onClose={() => setIsModalOpen(false)}
        todoData={todoData}
      />
    </>
  );
}

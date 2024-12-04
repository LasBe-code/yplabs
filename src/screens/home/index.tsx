import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import Todo from '../../components/todo';
import CreateTodoModal from '../../components/createTodoModal';
import useTodo from '../../hooks/useTodo';
import Container from '../../components/ui/container';
import Title from '../../components/ui/title';
import BottomButtonContainer from '../../components/ui/bottomButtonContainer';
import Button from '../../components/ui/button';
import Font from '../../components/ui/font';

export default function HomeScreen() {
  const {todoList, isLoading, isEndPage, initTodo, fetchTodo, createTodo} =
    useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCreate = (value: string) => {
    createTodo(value);
    setIsModalOpen(false);
  };
  const handleRefresh = () => {
    initTodo();
    fetchTodo();
  };

  return (
    <Container.View flex={1} padding="16px">
      <Title title="Todos" />
      <Container.View flex={1}>
        {!!todoList?.length && (
          <FlatList
            contentContainerStyle={styleSheet.contentContainer}
            data={todoList}
            ItemSeparatorComponent={Separator}
            renderItem={data => <Todo data={data.item} />}
            keyExtractor={item => `todo-${item.id}`}
            onEndReached={!isEndPage ? fetchTodo : undefined}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={handleRefresh}
              />
            }
          />
        )}
      </Container.View>
      <BottomButtonContainer>
        <Button.Default onPress={() => setIsModalOpen(true)}>
          <Font.Body color="white" align="center">
            +
          </Font.Body>
        </Button.Default>
      </BottomButtonContainer>
      <CreateTodoModal
        isModalOpen={isModalOpen}
        onCreate={handleCreate}
        onClose={() => setIsModalOpen(false)}
      />
    </Container.View>
  );
}

const styleSheet = StyleSheet.create({
  contentContainer: {paddingBottom: 8},
  separator: {height: 8},
});

const Separator = () => <View style={styleSheet.separator} />;

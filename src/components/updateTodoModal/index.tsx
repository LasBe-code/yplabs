import {Modal, View} from 'react-native';
import Font from '../ui/font';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import Input from '../ui/input';
import Button from '../ui/button';
import BottomButtonContainer from '../ui/bottomButtonContainer';
import Container from '../ui/container';
import {ITodo} from '../../store/todo/todo.type';
import useNavi from '../../hooks/useNavi';
import Title from '../ui/title';

type UpdateTodoModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  onUpdate: (value: string) => void;
  todoData: ITodo;
};

export default function UpdateTodoModal({
  isModalOpen,
  onUpdate,
  onClose,
  todoData,
}: UpdateTodoModalProps) {
  const [content, setContent] = useState('');
  const navigation = useNavi();
  const handleOnSave = () => {
    if (!content) {
      Toast.show({type: 'error', text1: '할 일을 작성해주세요'});
      return;
    }
    onUpdate(content);
    onClose();
    navigation.goBack();
  };
  useEffect(() => {
    setContent(todoData.content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);
  return (
    <Modal visible={isModalOpen}>
      <Container.View flex={1} gap="8px" padding="16px">
        <Title title="Update Todo" />
        <Container.View flex={1} justifyContent="center">
          <Input.Default value={content} onChangeText={setContent} multiline />
        </Container.View>
        <View>
          <BottomButtonContainer>
            <Button.Default onPress={handleOnSave}>
              <Font.Body color="white" align="center">
                저장
              </Font.Body>
            </Button.Default>
            <Button.Default bgColor="gray" onPress={onClose}>
              <Font.Body color="white" align="center">
                닫기
              </Font.Body>
            </Button.Default>
          </BottomButtonContainer>
        </View>
        <Toast />
      </Container.View>
    </Modal>
  );
}

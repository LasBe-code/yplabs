import {Modal, View} from 'react-native';
import Font from '../ui/font';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import Input from '../ui/input';
import Button from '../ui/button';
import BottomButtonContainer from '../ui/bottomButtonContainer';
import Container from '../ui/container';
import Title from '../ui/title';

type CreateTodoModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  onCreate: (value: string) => void;
};

export default function CreateTodoModal({
  isModalOpen,
  onCreate,
  onClose,
}: CreateTodoModalProps) {
  const [content, setContent] = useState('');
  const handleOnSave = () => {
    if (!content) {
      Toast.show({type: 'error', text1: '할 일을 작성해주세요'});
      return;
    }
    onCreate(content);
  };
  useEffect(() => {
    setContent('');
  }, [isModalOpen]);
  return (
    <Modal visible={isModalOpen}>
      <Container.View flex={1} gap="8px" padding="16px">
        <Title title="Create Todo" />
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

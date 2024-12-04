import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {cancelDoneTodo, doneTodo} from '../store/isDoneTodo/isDoneTodo.slice';

export default function useIsDoneTodo(id: number) {
  const isDoneTodoList = useSelector((state: RootState) => state.isDoneTodo);
  const dispatch = useDispatch();
  const isDoneTodo = () => isDoneTodoList.includes(id);
  const setIsDoneTodo = () => {
    isDoneTodo() ? dispatch(cancelDoneTodo(id)) : dispatch(doneTodo(id));
  };

  return {isDoneTodo, setIsDoneTodo};
}

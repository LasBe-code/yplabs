import Toogle from '../ui/toogle';
import useIsDoneTodo from '../../hooks/useIsDoneTodo';

export default function TodoToggle({id}: {id: number}) {
  const {isDoneTodo, setIsDoneTodo} = useIsDoneTodo(id);
  return <Toogle onToggle={() => setIsDoneTodo()} isOn={isDoneTodo()} />;
}

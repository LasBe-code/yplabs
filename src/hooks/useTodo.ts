import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {useEffect} from 'react';
import {
  createTodoRequest,
  deleteTodoRequest,
  getTodoListFetch,
  resetTodo,
  updateTodoRequest,
} from '../store/todo/todo.slice';
import {IUpdateTodoReq} from '../store/todo/todo.type';

export default function useTodo() {
  const data = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoListFetch());
  }, [dispatch]);

  const initTodo = () => dispatch(resetTodo());
  const fetchTodo = () => dispatch(getTodoListFetch());
  const createTodo = (value: string) => dispatch(createTodoRequest(value));
  const deleteTodo = (id: number) => dispatch(deleteTodoRequest(id));
  const updateTodo = (params: IUpdateTodoReq) =>
    dispatch(updateTodoRequest(params));

  return {...data, initTodo, fetchTodo, createTodo, deleteTodo, updateTodo};
}

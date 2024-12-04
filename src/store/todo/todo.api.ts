import fetchApi from '../../commons/fetchApi';
import {ITodo, IUpdateTodoReq} from './todo.type';

const getAll = async () => {
  return await fetchApi<ITodo[]>({path: 'todo/'});
};

const create = async (content: string) => {
  return await fetchApi<ITodo>({
    path: 'todo/',
    init: {
      method: 'POST',
      body: JSON.stringify({content}),
    },
  });
};

const remove = async (id: number) => {
  return await fetchApi({path: `todo/${id}/`, init: {method: 'DELETE'}});
};

const update = async (params: IUpdateTodoReq) => {
  return await fetchApi<ITodo>({
    path: `todo/${params.id}/`,
    init: {method: 'PATCH', body: JSON.stringify({content: params.content})},
  });
};

const todoApi = {getAll, create, remove, update};

export default todoApi;

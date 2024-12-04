export interface ITodo {
  id: number;
  content: string;
  update_at: string;
  create_at: string;
}

export interface IUpdateTodoReq {
  id: number;
  content: string;
}

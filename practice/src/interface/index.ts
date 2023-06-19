interface ITodo {
  id: number;
  task?: string;
  status?: boolean;
}

interface ITodoResponse {
  data: ITodo[];
}

interface IObject {
  [key: string]: string | number | boolean;
}

interface IArray {
  [key: number]: IObject;
}

export type { ITodo, ITodoResponse, IArray };

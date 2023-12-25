export type Todo = {
  id: number;
  title: string;
  from: string;
  completed: boolean;
};
export type ToView = {
  id: number;
  title: string;
  link?: string;
  started: boolean;
};

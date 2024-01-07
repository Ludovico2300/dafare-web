export type Todo = {
  id: number;
  title: string;
  from: string;
  completed: boolean;
  motivazione?: string;
};

export type ToView = {
  id: number;
  title: string;
  link?: string;
  started: boolean;
};
export type Wish = {
  id: number;
  title: string;
  from: string;
  completed: boolean;
};

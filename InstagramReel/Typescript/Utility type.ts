interface ITodo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<ITodo, "description">;

const todo: TodoPreview = {
  title: "InXcode",
  completed: true,
};

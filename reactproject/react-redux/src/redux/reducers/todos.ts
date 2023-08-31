import { ReduxActionInterface } from "../types";

export const todosReducer = (
  todos: TodosInterface[],
  action: ReduxActionInterface
) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...todos, action.payload];

    case "UPDATE_TODO":
        return todos.map({id}) => id === action.paylod.id )

    default:
      return todos;
  }
};

import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { Todos } from "../../components/Todos";
import { todosReducer } from "./todos";

export const allReducers = combineReducers({
    counter: counterReducer,
    todos: todosReducer
});


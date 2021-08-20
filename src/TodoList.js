import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import TodoItem from "./TodoItem";
import { TodosContext } from "./contexts/TodosContext";

function TodoList() {
    const todos = useContext(TodosContext);

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={i}>
                            <TodoItem {...todo} />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
};

export default TodoList;
import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import { useSelector, shallowEqual } from 'react-redux'

// const selectTodos = (state) => state.todos
// const selectTodoIds = (state) => state.todos.map((todo) => todo.id)
const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  //   const todoIds = useSelector(selectTodoIds)

  //   const todos = useSelector(selectTodos)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map((todo) => {
    // return <TodoListItem key={todo.id} todo={todo} />
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList

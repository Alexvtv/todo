import { useState } from 'react';
import styles from './App.module.scss';
import { Filter, TodoItem, InputField } from './components';

type TodoStatus = 'active' | 'completed'
export type FilterStatus = TodoStatus | 'all'

export type Todo = {
  status: TodoStatus,
  title: string
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState<FilterStatus>('all');

  const todosToView: Todo[] = status === 'all'
    ? todos
    : todos.filter((todo) => todo.status === status);

  const addTodo = (title: string): void => {
    setTodos(todos => [...todos, {
      title,
      status: 'active'
    }])
  }
  const changeTodoStatus = (current: Todo) => {
    setTodos(todos => todos.map(todo => todo === current
      ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' }
      : todo))
  }
  const clear = () => {
    setTodos(todos => todos.filter(({ status }) => status === 'active'));
  }

  return (
    <div className={styles.app}>
      <h1>todos</h1>
      <div className={styles.app__main}>
        <InputField addTodo={addTodo} />

        {todosToView.map((todo, index) =>
          <TodoItem {...todo} key={index} changeTodoStatus={() => changeTodoStatus(todo)} />)}

        <Filter
          status={status} setStatus={setStatus} clear={clear}
          activeTodos={todos.filter(({ status }) => status === 'active').length} />
      </div>
    </div>
  );
}

'use client';

import { useAppSelector } from '../store/hooks';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);

  const hasTodos = todos.length > 0;

  return (
    <div className='bg-blue-50 rounded-lg shadow-md overflow-hidden'>
      <ul className='divide-y divide-gray-200'>
        {hasTodos ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <li className='p-6 text-center text-gray-500'>
            No tasks yet. Add one above!
          </li>
        )}
      </ul>
    </div>
  );
}

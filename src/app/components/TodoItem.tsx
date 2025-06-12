'use client';

import { useAppDispatch } from '../store/hooks';
import { deleteTodo, Todo, toggleTodo } from '../store/slices/todoSlice';

// Defines the expected props for this component for better type safety.
interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch();

  // For better readability, conditional classes are determined here.
  const textStyle = todo.completed
    ? 'line-through text-gray-400'
    : 'text-gray-800';

  return (
    <li
      className='
        flex items-center justify-between gap-4 
        p-4 
        bg-gray-100 
        border-b border-gray-200 last:border-b-0
      '
    >
      {/* Todo text area */}
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`
          cursor-pointer flex-grow 
          text-base sm:text-lg 
          break-words 
          ${textStyle}
        `}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className='
          flex-shrink-0 
          px-3 py-1 
          bg-red-500 text-white text-sm rounded-md 
          hover:bg-red-600 active:bg-red-700 
          transition-colors
        '
      >
        Delete
      </button>
    </li>
  );
}

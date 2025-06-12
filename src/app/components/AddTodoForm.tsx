'use client';

import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/slices/todoSlice';

export default function AddTodoForm() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // The trim() check ensures that empty or whitespace-only strings aren't added.
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row gap-3 mb-4'
    >
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a new task...'
        // The input field grows to fill available space in a horizontal layout.
        className='
          w-full flex-grow p-3 
          border-2 border-gray-200 rounded-lg 
          focus:outline-none focus:border-blue-500 
          transition-colors'
      />
      <button
        type='submit'
        className='
          relative inline-block w-full sm:w-auto 
          px-8 sm:px-12 py-3 
          font-semibold text-white rounded-full 
          bg-gradient-to-br from-[#007ACC] to-[#005A9E] 
          shadow-lg shadow-blue-800/30 
          hover:scale-105 hover:shadow-xl 
          active:scale-95 
          transition-transform duration-200 ease-in-out'
      >
        Add
      </button>
    </form>
  );
}

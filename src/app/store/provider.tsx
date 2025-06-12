'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';
import { setInitialTodos, Todo } from './slices/todoSlice';

// --- Helper Functions for LocalStorage ---

function loadTodosFromLocalStorage(): Todo[] | undefined {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return undefined;
  }
}

function saveTodosToLocalStorage(todos: Todo[]) {
  try {
    const serializedState = JSON.stringify(todos);
    localStorage.setItem('todos', serializedState);
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
}

// --- Redux Provider Component ---

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initialTodos = loadTodosFromLocalStorage();
    if (initialTodos && initialTodos.length > 0) {
      store.dispatch(setInitialTodos(initialTodos));
    }

    const handleStoreChange = () => {
      const state = store.getState();
      saveTodosToLocalStorage(state.todos.todos);
    };

    const unsubscribe = store.subscribe(handleStoreChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className='container mx-auto max-w-2xl p-4 sm:p-6 md:p-8'>
      <div className='rounded-xl bg-white p-6 shadow-lg'>
        <h1 className='mb-6 text-center text-4xl font-extrabold text-gray-800'>
          <span className='bg-gradient-to-br from-[#007ACC] to-[#005A9E] bg-clip-text text-transparent'>
            My To-Do List
          </span>
        </h1>

        <AddTodoForm />
        <TodoList />
      </div>
    </main>
  );
}

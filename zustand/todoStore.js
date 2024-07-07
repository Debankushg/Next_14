import { create } from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (title) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
    })),

    updateTodo: (id, title) => set((state) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, title } : todo
        ),
    })),

}));

export default useTodoStore;

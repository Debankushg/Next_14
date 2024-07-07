"use client";

import React, { useState } from 'react';
import useTodoStore from '../../zustand/todoStore';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [editingTodoId, setEditingTodoId] = useState(null); // Track the id of the todo being edited
  const [newTitle, setNewTitle] = useState('');

  const handleUpdate = (id) => {
    updateTodo(id, newTitle);
    setEditingTodoId(null);
  };

  const handleEdit = (id, currentTitle) => {
    setNewTitle(currentTitle);
    setEditingTodoId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white text-yellow-700 shadow-lg rounded-lg p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a new todo"
        />
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              {editingTodoId === todo.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="mr-2 p-1 border"
                />
              ) : (
                <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
              )}
            </div>
            <div className="flex items-center">
              {editingTodoId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-green-500 hover:text-green-700 mr-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.title)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

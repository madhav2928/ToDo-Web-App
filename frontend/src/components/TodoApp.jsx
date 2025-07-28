import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import { Plus, Check, Trash2, Edit3 } from 'lucide-react';


const API_BASE_URL = 'http://localhost:8080/api/todos';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: '', description: '' });
    const [loading, setLoading] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    // Whenever darkMode changes, toggle the HTML root class
    useEffect(() => {
    if(darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }, [darkMode]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const createTodo = async (e) => {
        e.preventDefault();
        if (!newTodo.title.trim()) return;

        setLoading(true);
        try {
            const response = await axios.post(API_BASE_URL, newTodo);
            setTodos([...todos, response.data]);
            setNewTodo({ title: '', description: '' });
        } catch (error) {
            console.error('Error creating todo:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleTodo = async (id, todo) => {
        try {
            await axios.put(`${API_BASE_URL}/${id}`, {
                ...todo,
                completed: !todo.completed
            });
            fetchTodos();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4 animate-fade-in">
                ✨ Modern Todo App
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Built with Spring Boot & React</p>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className='absolute top-6 right-6 bg-gray-300 dark:bg-gray-700 p-2 rounded-full transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600'
                aria-label='Toggle Dark Mode'
                >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </div>
    
            {/* Add Todo Form */}
            <div className="max-w-2xl mx-auto mb-8">
              <form onSubmit={createTodo} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 animate-slide-up">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Add a description (optional)"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-indigo-600 dark:to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
                  >
                    <Plus className="w-5 h-5" />
                    <span>{loading ? 'Adding...' : 'Add Todo'}</span>
                  </button>
                </div>
              </form>
            </div>
    
            {/* Todo List */}
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4">
                {todos.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-gray-500 text-lg">No todos yet. Create your first one!</p>
                  </div>
                ) : (
                  todos.map((todo) => (
                    <div
                      key={todo.id}
                      className={`bg-white rounded-2xl shadow-lg p-6 transform hover:scale-102 transition-all duration-200 animate-slide-up ${
                        todo.completed ? 'opacity-75' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <button
                            onClick={() => toggleTodo(todo.id, todo)}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                              todo.completed
                                ? 'bg-green-500 border-green-500 text-white'
                                : 'border-gray-300 hover:border-primary-500'
                            }`}
                          >
                            {todo.completed && <Check className="w-5 h-5" />}
                          </button>
                          <div className="flex-1">
                            <h3 className={`text-lg font-semibold ${
                              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                            }`}>
                              {todo.title}
                            </h3>
                            {todo.description && (
                              <p className={`text-sm ${
                                todo.completed ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {todo.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
    
            {/* Stats */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">{todos.length}</div>
                    <div className="text-sm text-gray-600">Total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {todos.filter(t => t.completed).length}
                    </div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      {todos.filter(t => !t.completed).length}
                    </div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

};

export default TodoApp;
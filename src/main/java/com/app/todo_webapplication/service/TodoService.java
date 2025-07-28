package com.app.todo_webapplication.service;

import com.app.todo_webapplication.entity.Todo;
import com.app.todo_webapplication.repository.TodoRepository;
import org.apache.juli.logging.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    private static final Logger logger = LoggerFactory.getLogger(TodoService.class);

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id, Todo todo) {
        return todoRepository.findById(id)
                .map(existingTodo -> {
                    existingTodo.setTitle(todo.getTitle());
                    existingTodo.setDescription(existingTodo.getDescription());
                    existingTodo.setCompleted(todo.isCompleted());
                    return todoRepository.save(existingTodo);
                })
                .orElseThrow(() -> new RuntimeException("Todo not found"));
    }

    public String deleteTodo(Long id) {
        try {
            todoRepository.deleteById(id);
            return "Success";
        } catch (Exception e) {
            System.out.println("Exceptions occured while deleting the item, error: "+ e);
            logger.error("Exceptions occured while deleting the item, error:", e);
            return "Failure occured, check error logs for more details";
        }
    }
}

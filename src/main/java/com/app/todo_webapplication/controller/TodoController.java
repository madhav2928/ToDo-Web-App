package com.app.todo_webapplication.controller;

import com.app.todo_webapplication.entity.Todo;
import com.app.todo_webapplication.repository.TodoRepository;
import com.app.todo_webapplication.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000") // For local deployment
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody Todo todo) {
        return ResponseEntity.ok(todoService.createTodo(todo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @Valid @RequestBody Todo todo) {
        return ResponseEntity.ok(todoService.updateTodo(id, todo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id) {
        return new ResponseEntity<>(todoService.deleteTodo(id), HttpStatus.OK);
    }
}

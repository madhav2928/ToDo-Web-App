package com.app.todo_webapplication.repository;

import com.app.todo_webapplication.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByCompletedOrderByCreatedAtDesc(boolean completed);
}

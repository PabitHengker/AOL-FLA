package com.FLA.LibraryProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.FLA.LibraryProject.service.BookService;
import com.FLA.LibraryProject.dto.BookDTO;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<List<BookDTO>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @PostMapping
    public ResponseEntity<BookDTO> createBook(@RequestBody Map<String, String> payload) {
        String type = payload.get("type");
        String title = payload.get("title");
        
        // Use default if title is empty or missing
        if (title == null || title.trim().isEmpty()) {
            title = "Untitled Book";
        }
        
        BookDTO newBook = bookService.createBook(type, title);
        return ResponseEntity.ok(newBook);
    }

    @PostMapping("/{id}/read")
    public ResponseEntity<BookDTO> readBook(@PathVariable Long id) {
        BookDTO updatedBook = bookService.readBook(id);
        if (updatedBook != null) {
            return ResponseEntity.ok(updatedBook);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        boolean deleted = bookService.deleteBook(id);
        if (deleted) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}

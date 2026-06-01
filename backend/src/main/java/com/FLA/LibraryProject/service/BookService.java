package com.FLA.LibraryProject.service;

import org.springframework.stereotype.Service;
import model.ReadContent;
import factory.BookFactory;
import factory.ComicFactory;
import factory.MagazineFactory;
import factory.NovelFactory;
import proxy.BookProxy;
import com.FLA.LibraryProject.dto.BookDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Service
public class BookService {
    private List<ReadContent> bookList = new ArrayList<>();
    private AtomicLong idGenerator = new AtomicLong(1);

    public List<BookDTO> getAllBooks() {
        return bookList.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public BookDTO createBook(String type, String title) {
        BookFactory factory = null;
        if ("comic".equalsIgnoreCase(type)) {
            factory = new ComicFactory();
        } else if ("magazine".equalsIgnoreCase(type)) {
            factory = new MagazineFactory();
        } else if ("novel".equalsIgnoreCase(type)) {
            factory = new NovelFactory();
        } else {
            throw new IllegalArgumentException("Unknown book type: " + type);
        }

        ReadContent newBook = factory.createBook(title);
        newBook.setId(idGenerator.getAndIncrement());
        bookList.add(newBook);
        return convertToDTO(newBook);
    }

    public BookDTO readBook(Long id) {
        ReadContent book = findBookById(id);
        if (book != null) {
            BookProxy proxy = new BookProxy(book);
            proxy.read();
            book.incrementReadCount();
            return convertToDTO(book);
        }
        return null;
    }

    public boolean deleteBook(Long id) {
        return bookList.removeIf(b -> b.getId().equals(id));
    }

    private ReadContent findBookById(Long id) {
        return bookList.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    }

    private BookDTO convertToDTO(ReadContent book) {
        return new BookDTO(book.getId(), book.getType(), book.getJudul(), book.getReadCount());
    }
}

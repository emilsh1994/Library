package ru.ufanet.library.controller

import org.springframework.web.bind.annotation.*
import ru.ufanet.library.domain.Book
import ru.ufanet.library.service.BookService

@RestController()
@RequestMapping("/book")
class BookController(private val bookService: BookService) {

    @CrossOrigin(origins = ["http://localhost:8081"])
    @GetMapping
    fun getBooks(): Iterable<Book> {
        return bookService.getAll()
    }

    @GetMapping("{id}")
    fun getBook(@PathVariable id: Long): Book {
        return bookService.getById(id)
    }

    @PostMapping
    fun addBook(book: Book): Book {
        bookService.add(book)
        return book
    }

    @PutMapping("{id}")
    fun editBook(@PathVariable id: Long, book: Book) : Book {
        bookService.edit(id, book)
        return book
    }

    @CrossOrigin(origins = ["http://localhost:8081"])
    @DeleteMapping("{id}")
    fun deleteBook(@PathVariable id: Long) {
        bookService.remove(id)
    }
}

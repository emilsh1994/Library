package ru.ufanet.library.domain

import ru.ufanet.library.domain.enum.BookType
import javax.persistence.*

@Entity
data class Book(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    open var id: Long? = 0,
    open var title: String? = "тут ноль",
    open var quantity: Int? = 0,
    open var bookType: BookType? = BookType.PHYSICAL_BOOK
)

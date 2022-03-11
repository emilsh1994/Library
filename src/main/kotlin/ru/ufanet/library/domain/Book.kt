package ru.ufanet.library.domain

import ru.ufanet.library.domain.enum.BookType
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Book(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val title: String = "",
    val quantity: Int = 0,
    val bookType: BookType = BookType.PHYSICAL_BOOK
)

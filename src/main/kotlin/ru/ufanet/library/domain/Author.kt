package ru.ufanet.library.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Author(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val surname: String = "",
    val name: String = "",
    val patronymic: String = "",
    val description: String = ""
)


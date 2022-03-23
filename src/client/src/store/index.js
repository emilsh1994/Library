import axios from "axios";
import { createStore } from "vuex";

var url = 'http://localhost:8081/book/'

export default createStore({
    state: {
        books: [],
        book: {}
    },
    mutations: {
        ADD_BOOK(state, book) {
            console.log('state: ' + book)
            state.books.push(book)
        },
        GET_BOOK(state, id) {
            state.book = state.books.filter(book => book.id === id)
        },
        SET_BOOKS(state, books) {
            state.books = books
        },
        DELETE_BOOK(state, id) {
            let index = state.books.findIndex(book => book.id == id);
            state.books.splice(index, 1)
        }

    },
    actions: {
        getBooks({ commit }) {
            axios.get(url)
                .then(response => {
                    var books = response.data.sort((a, b) => a.id - b.id)
                    commit('SET_BOOKS', books)
                })
        },
        addBook({ commit }, book) {
            axios.post(url, book)
                .then(response => {
                    if (response.status == '200') {
                        console.log(response.data)
                        console.log(response.status)
                        commit('ADD_BOOK', response.data)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteBook({ commit }, id) {
            try {
                axios.delete(url + id)
                    .then(() => {
                        commit('DELETE_BOOK', id)
                    });
            } catch (error) {
                console.log(error)
            }
        },
        getBook({ commit }, id) {
            try {
                axios.get(url + id).then(response => {
                    if (response.data !== null) {
                        commit('GET_BOOK', response.data)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
});
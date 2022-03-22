import axios from "axios";
import { createStore } from "vuex";

var url = 'http://localhost:8081/book/'


// var config = {
//     headers: {
//         'Content-Type': 'application/json',

//     }
// }

export default createStore({
    state: {
        books: [],
        book: {}
    },
    mutations: {
        ADD_BOOK(state, book) {
            state.book = book
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
                    commit('SET_BOOKS', response.data)
                })
        },
        addBook() {
            const book = {
                title: "1",
                quantity: 1
            }
            axios.post(url, book)
                .then(response => {
                    console.log(response.status)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteBook({ commit }, id) {
            try {
                axios.delete(url + id)
                    .then(() => {
                        commit('DELETE_BOOK', id)
                    });
            } catch (e) {
                console.log(e)
            }
        }
    }
});
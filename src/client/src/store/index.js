import axios from "axios";
import { createStore } from "vuex";

var url = 'http://localhost:8081/book/'


export default createStore({
    state: {
        books: []
    },
    mutations: {
        ADD_BOOK(state, book) {
            console.log('state: ' + book)
            state.books.push(book)
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
        getBooks( { commit } ) {
            axios.get(url)
                .then(response => {
                    var books = response.data.sort((a, b) => a.id - b.id)
                    commit('SET_BOOKS', books)
                })
        },
        addBook( {commit}, book) {
            axios.post(url, book)
                .then(response => {
                    if (response.status == '200') {
                        console.log(response.data)
                        console.log(response.status)
                        commit('ADD_BOOK', response.data)                   
                    }
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
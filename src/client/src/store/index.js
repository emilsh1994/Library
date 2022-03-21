import axios from "axios";
import { createStore } from "vuex";

var url = 'http://localhost:8081/book/'



export default createStore({
    state: {
        books: [],
        bookId: 0
    },
    mutations: {
        SET_BOOKS(state, books) {
            state.books = books
        },
        DELETE_CAR(state, id) {
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
        deleteBook({ commit }, id) {
            try {
                axios.delete(url + id)
                .then(() => {
                    commit('DELETE_CAR', id)
                });
            } catch(e) {
                console.log(e)
            }

        }
    },

});
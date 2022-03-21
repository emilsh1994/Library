import axios from "axios";
import { createStore } from "vuex";

const url = 'http://localhost:8080/book/'

export default createStore ({
    state: {
        books: [],
        bookId: 0
    },
    mutations: {
        SET_BOOKS(state, books) {
            state.books = books
        }
    },
    actions: {
        getBooks( {commit} ) {
            axios.get(url).then(response => {
                commit('SET_BOOKS', response.data)
            })
        },
        removeBook( id ) {
            console.log(id)
            // axios.delete(url + id).then(response => { console.log(response.data) })
        }
    },

});
import { createStore } from 'vuex'
import { DATA } from '@/mocks/workersData'

const store = createStore({
    state: {
        workers: [],
        worker: JSON.parse(localStorage.getItem('oneWorker'))
    },
    mutations: {
        /*
        * Создает список работников на главной странице
        * **/
        SET_WORKERS: (state, DATA) => {
            if (localStorage.getItem('data')) {
                let a = JSON.parse(localStorage.getItem('data'))
                state.workers = a;
            } else {
                state.workers = DATA;
                let a = JSON.stringify(state.workers);
                localStorage.setItem('data', a);
            }
        },
        /*
        * Создает рабочего, информация о котором
        * будет выводиться на отдельной странице
        * **/
        SET_ONE_WORKER: (state, people) => {
            state.worker = people;
            let a = JSON.stringify(state.worker);
            localStorage.setItem('oneWorker', a);
        },
        /*
        * Добавляет новых рабочих в список
        * **/
        ADD_PEOPLE: (state, people) => {
            state.workers.push(people);
            localStorage.setItem('data', JSON.stringify(state.workers));
        },
        /*
        * Обновляет существующих рабочих в списке
        * **/
        CHANGE_PEOPLE: (state, change) => {
            state.workers.splice(change.changeIndex, 1, change.changePerson);
            localStorage.setItem('data', JSON.stringify(state.workers));
        },
        /*
        * Удаляет рабочего из списка
        * **/
        DELETE_PEOPLE: (state, index) => {
            state.workers.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(state.workers));
        },
        /*
        * Сортирует по имени
        * **/
        SORT_NAME: (state) => {
            state.workers.sort((a,b) => {
                let aname = a.name.toLowerCase();
                let bname = b.name.toLowerCase();
                if (aname < bname) return -1;
                if (aname == bname) return 0;
                if (aname > bname) return 1;
            })
        },
        /*
        * Сортирует по отчеству
        * **/
        SORT_SECONDNAME: (state) => {
            state.workers.sort((a,b) => {
                let asecondName = a.secondName.toLowerCase();
                let bsecondName = b.secondName.toLowerCase();
                if (asecondName < bsecondName) return -1;
                if (asecondName == bsecondName) return 0;
                if (asecondName > bsecondName) return 1;
            })
        },
        /*
        * Сортирует по фамилии
        * **/
        SORT_SURNAME: (state) => {
            state.workers.sort((a,b) => {
                let asurname = a.surname.toLowerCase();
                let bsurname = b.surname.toLowerCase();
                if (asurname < bsurname) return -1;
                if (asurname == bsurname) return 0;
                if (asurname > bsurname) return 1;
            })
        }
    },
    actions: {
        GET_WORKERS({ commit }) {
            commit('SET_WORKERS', DATA)
        },
        GET_ONE_WORKER({ commit }, people) {
            commit('SET_ONE_WORKER', people)
        },
        ADD_WORKERS({ commit }, people) {
            commit('ADD_PEOPLE', people)
        },
        CHANGE_WORKERS({ commit }, changePeople) {
            commit('CHANGE_PEOPLE', changePeople)
        },
        DELETE_WORKERS({ commit }, index) {
            commit('DELETE_PEOPLE', index)
        },
        SORT_BY_NAME({ commit }) {
            commit('SORT_NAME')
        },
        SORT_BY_SECONDNAME({ commit }) {
            commit('SORT_SECONDNAME')
        },
        SORT_BY_SURNAME({ commit }) {
            commit('SORT_SURNAME')
        }
    },
    getters: {
        WORKERS(state) {
            return state.workers
        },
        ONEWORKER(state) {
            return state.worker
        }
    }
})

export default store

<template>
  <div class="main-page">
    <h3>Список сотрудников:</h3>
    <div class="table">
      <div class="table_header">
        <p class="header"
           @click="SORT_BY_NAME">Имя ↑↓:
        </p>
        <p class="header"
           @click="SORT_BY_SECONDNAME">Фамилия ↑↓:</p>
        <p class="header"
           @click="SORT_BY_SURNAME">Отчество ↑↓:</p>
        <p class="header">Должность:</p>
        <p class="header"></p>
        <p class="header"></p>
        <p class="header"></p>
      </div>
      <div class="table__body">
        <div class="body__row"
             v-for="(people, index) in WORKERS"
             :key="index">
          <div class="row row__name">{{people.name}}</div>
          <div class="row row__secondName">{{people.secondName}}</div>
          <div class="row row__surname">{{people.surname}}</div>
          <div class="row row__post">{{people.post}}</div>
          <div class="row row__delete"
               @click="showDeleteWindow(index)">Удалить</div>
          <div class="row row__change"
               @click="showChangeFormWindow(people, index)">Изменить</div>
          <div class="row"
               @click="setOneWorker(people)"><router-link
              class="row__more_info"
              :to="{name: 'moreInformation'}">Подробнее</router-link></div>
        </div>
      </div>
    </div>

    <div class="">
      <button class="addWorkerBtn" @click="showPopupWindow">Добавить работника</button>
    </div>
    <changeWorkerForm
        :needChangePerson="this.changePeople"
        :index="this.changePeopleIndex"
        v-if="isChangeFormVisible"
        @close-popup="closeWindowPopup"
    />
    <newWorkerForm v-if="isNewPeopleFormVisible" @close-popup="closeWindowPopup" />
    <delete-popup
      :index="this.changePeopleIndex"
      v-if="isDeleteFormVisible"
      @close-popup="closeWindowPopup"/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import changeWorkerForm from '@/components/popups/changeWorkerForm'
import newWorkerForm from '@/components/popups/newWorkerForm'
import deletePopup from "@/components/popups/deletePopup";

export default {
  name: 'main-page',
  components: {
    changeWorkerForm,
    newWorkerForm,
    deletePopup
  },
  props: {},
  data() {
    return {
      changePeople: {},
      changePeopleIndex: 0,
      isNewPeopleFormVisible: false,
      isChangeFormVisible: false,
      isDeleteFormVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'WORKERS',
      'ONEWORKER'
    ])
  },
  methods: {
    ...mapActions([
      'GET_WORKERS',
      'GET_ONE_WORKER',
      'SORT_BY_NAME',
      'SORT_BY_SECONDNAME',
      'SORT_BY_SURNAME'
    ]),
    setOneWorker(people) {
      this.GET_ONE_WORKER(people)

    },
    showChangeFormWindow(changePeople, index) {
      this.changePeople = changePeople;
      this.changePeopleIndex = index;
      this.isChangeFormVisible = true;
    },
    showDeleteWindow(index) {
      this.changePeopleIndex = index;
      this.isDeleteFormVisible = true;
    },
    closeWindowPopup() {
      this.isNewPeopleFormVisible = false;
      this.isChangeFormVisible = false;
      this.isDeleteFormVisible = false;
    },
    showPopupWindow() {
      this.isNewPeopleFormVisible = true;
    },
    sortByName() {
      this.WORKERS.sort((a,b) => {
        a.name.localeCompare(b.name)
      })
    }
  },
  watch: {},
  mounted() {
    this.GET_WORKERS()
  }
}
</script>

<style scoped>
.table {
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 20px;
}

.table_header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 0px 8px;
}

.body__row {
  display: flex;
  justify-content: space-around;
  margin: 8px 0;
}

.row {
  text-align: left;
  padding: 8px 16px;
  flex-basis: 14.2%;
}

.header {
  flex-basis: 14.2%;
  text-align: left;
  cursor: pointer;
}

.row__delete {
  color: gray;
  cursor: pointer;
}

.row__change {
  cursor: pointer;
}

.row__more_info {
  color: black;
}

.addWorkerBtn {
  margin: 30px auto;
  padding: 10px;
  border-radius: 20px;
  background-color: white;
  color: #2c3e50;
}
</style>

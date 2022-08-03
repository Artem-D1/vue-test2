<template>
  <div class="changeWorkerForm" ref="popup_wrapper">
    <form class="newWorkerForm__form" @submit.prevent="onSubmit">
      <p class="form_formTextElement">
        <input
            id="name"
            name="name"
            v-model="name"
            class="textElement"
            type="text"
            placeholder="Введите имя"
            maxlength="100"
            minlength="2"
            required
        />
      </p>
      <p class="form_formTextElement">
        <input
            id="secondName"
            name="secondName"
            v-model="secondName"
            class="textElement"
            type="text"
            placeholder="Введите отчество"
            maxlength="100"
            minlength="2"
            required
        />
      </p>
      <p class="form_formTextElement">
        <input
            id="surname"
            name="surname"
            v-model="surname"
            class="textElement"
            type="text"
            placeholder="Введите фамилию"
            maxlength="100"
            minlength="2"
            required
        />
      </p>
      <p class="form_formTextElement">
        <input
            id="post"
            name="post"
            v-model="post"
            class="textElement"
            type="text"
            placeholder="Введите занимаемую должность"
            maxlength="100"
            minlength="2"
            required
        />
      </p>
      <p class="form_formСompositeElement">
        <label for="salary">Заработная  плата:</label>
        <input
            id="salary"
            name="salary"
            v-model="salary"
            class="salaryElement"
            type="number"
            min="1000"
            placeholder="Введите зарплату"
            required
        />
      </p>
      <p class="form_formСompositeElement">
        <label for="isJobBook">Трудовая книжка: </label>
        <input type="checkbox"
               name="isJobBook"
               value=true
               id="isJobBook"
               class="checkboxElement"
               v-model="isJobBook">Сдана
      </p>
      <p class="form_formСompositeElement">
        <label for="startJobDate">Дата принятия на работу: </label>
        <input type="date"
               id="startJobDate"
               name="startJobDate"
               v-model="startJobDate"
               class="salaryElement"
               required
        />
      </p>
      <p class="form_formСompositeElement">
        <label for="workTime">Ставка: </label>
        <select id="workTime"
                name="workTime"
                class="salaryElement"
                v-model="workTime"
                required>
          <option>Полная</option>
          <option>Половина</option>
        </select>
      </p>
      <div class="form_buttonsElement">
        <p class="">
          <input class="buttonElement" value="Изменить" type="submit" />
        </p>
        <p class="">
          <input class="buttonElement closeBtn" @click="closePopup" value="Закрыть окно" type="button" />
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'changeWorkerForm',
  data() {
    return {
      name: this.needChangePerson.name,
      secondName: this.needChangePerson.secondName,
      surname: this.needChangePerson.surname,
      post: this.needChangePerson.post,
      isJobBook: this.needChangePerson.isJobBook,
      salary: this.needChangePerson.salary,
      startJobDate: this.needChangePerson.startJobDate,
      workTime: this.needChangePerson.workTime
    };
  },
  props: {
    needChangePerson: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions([
      'CHANGE_WORKERS'
    ]),
    closePopup() {
      this.$emit("close-popup");
    },
    onSubmit() {
      let newPerson = {
        name: this.name,
        secondName: this.secondName,
        surname: this.surname,
        post: this.post,
        isJobBook: this.isJobBook,
        salary: this.salary,
        startJobDate: this.startJobDate,
        workTime: this.workTime
      }
      let change = {
        changePerson: newPerson,
        changeIndex: this.index
      }
      this.CHANGE_WORKERS(change)
      this.closePopup()
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
}
</script>

<style scoped>
.changeWorkerForm {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.newWorkerForm__form {
  width: max-content;
  height: max-content;
  overflow: auto;
  margin: auto;
  position: fixed;
  padding: 40px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FFFFFF;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 10;
}

.form_formTextElement {
  height: 32px;
  padding: 0;
  margin: 25px 0;
}

.textElement {
  height: 32px;
  width: 98%;
  padding-left: 10px;
  border-radius: 20px;
  border-color: black;
}

.salaryElement {
  height: 32px;
  padding: 0 10px;
  border-radius: 20px;
  border-color: black;
  margin-left: 10px;
}

.form_formСompositeElement {
  text-align: left;
}

.checkboxElement {
  padding: 0 10px;
  margin-left: 10px;
}

.form_buttonsElement {
  width: 98%;
  display: flex;
  justify-content: space-around;
}

.buttonElement {
  height: 32px;
  boreder: 1px solid black;
  border-radius: 20px;
  padding: 0px 10px;
  background-color: white;
}

.closeBtn {
  border: none;
  color: gray;
}
</style>

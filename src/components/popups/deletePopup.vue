<template>
  <div class="deletePopup" ref="popup_wrapper">
    <form class="deletePopup__form" @submit.prevent="onSubmit">
      <div class="">
        <h3 class="deleteForm_header">Вы действительно хотите удалить работника?</h3>
        <div class="form_buttonsElement">
          <p class="">
            <input class="buttonElement" value="Удалить" type="submit" />
          </p>
          <p class="">
            <input class="buttonElement closeBtn" @click="closePopup" value="Закрыть окно" type="button" />
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "deletePopup",
  data() {
    return {
    };
  },
  props: {
    index: {
      type: Number,
    default() {
        return 0;
      }
    }
  },
  methods: {
  ...mapActions([
      'DELETE_WORKERS'
    ]),
        closePopup() {
      this.$emit("close-popup");
    },
    onSubmit() {
      this.DELETE_WORKERS(this.index)
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
.deletePopup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.deletePopup__form {
  width: max-content;
  height: max-content;
  overflow: auto;
  margin: auto;
  position: fixed;
  padding: 60px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #FFFFFF;
  border: 2px solid black;
  border-radius: 10px;
  z-index: 10;
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

.deleteForm_header {
  color: black;
}
</style>

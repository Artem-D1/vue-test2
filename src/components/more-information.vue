<template>
  <div class="moreInformation">
    <h3 class="moreInformation__header">{{ONEWORKER.name}} {{ONEWORKER.secondName}} {{ONEWORKER.surname}}</h3>
    <div class="jobInformation">
      <div class="jobInformation__post"><b>Должность:</b> {{ONEWORKER.post}}</div>
      <div class="jobInformation__salary"><b>Зарплата:</b> {{ONEWORKER.salary}} ₽</div>
      <div class="jobInformation__workTime"><b>Ставка:</b> {{ONEWORKER.workTime}}</div>
    </div>
    <div class="specialInformation">
      <div class="specialInformation__startJobDate"><b>Дата начала работы:</b> {{ONEWORKER.startJobDate}}</div>
      <div class="specialInformation__isJobBook" v-if="ONEWORKER.isJobBook"><b>Трудовая книжка:</b> Сдана</div>
      <div class="specialInformation__isJobBook" v-if="!ONEWORKER.isJobBook"><b>Трудовая книжка:</b> Не сдана</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'more-information',
  components: {

  },
  props: {
  },
  data() {
    return {
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
      'GET_WORKERS'
    ])
  },
  watch: {},
  mounted () {
  }
}
</script>

<style scoped>

.moreInformation {
  max-width: 900px;
  border: 2px solid black;
  border-radius: 20px;
  margin: auto;
}

.moreInformation__header {
  color: black;
}

.jobInformation {
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.specialInformation {
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}


</style>

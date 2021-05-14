<template>
  <section class="logIn">
      112
  </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "logIn",
  data() {
    return {}
  },
  computed: {
    ...mapGetters([])
  },
  created() {
    this.$router.push({path:'clockIn'});
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.logIn {
}
</style>
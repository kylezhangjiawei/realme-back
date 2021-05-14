<template>
  <div class="home">
    <left-nav></left-nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import leftNav from "@/components/leftNav";

export default {
  name: 'Home',
  components: {
    leftNav
  }
}
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
}
</style>

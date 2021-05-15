<template>
  <div class="home">
    <left-nav></left-nav>
    <main>
      <article class="header">
        <div>
          <el-breadcrumb>
            <el-breadcrumb-item v-for="item in $route.matched">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span>admin</span>
        </div>
      </article>
      <section class="content">
        <router-view/>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import leftNav from "@/components/leftNav";

export default {
  name: 'Home',
  components: {
    leftNav
  },
}
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  background-color: #f0f2f5;
  main{
    width: 100%;
    .header{
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      padding: 0 20px;
      background-color: #ffffff;
      border-bottom: 1px solid #ebebeb;
      &>div:nth-of-type(2){
        display: flex;
        align-items: center;
      }
    }
    .content{
      padding: 15px;
      height: calc(100% - 130px);
      width: 100%;
      box-sizing: border-box;
    }
  }

}
</style>

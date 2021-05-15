<template>
  <section class="leftNav">
    <p>
      Realme activities
    </p>
    <el-menu
        :uniqueOpened="true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001529"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
      <el-submenu :index="item.name" v-for="(item,i) in navList">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="items.path" v-for="(items,index) in item.children">{{ items.name }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "leftNav",
  data() {
    return {
      navList:[
        {
          name:'Clock in',
          children:[
            {
              name:'Punch In Settings',
              path:'/clockIn'
            },
            {
              name:'Card management',
              path:'/clockIn/cardManagement'
            },
            {
              name:'Data statistics',
              path:'/clockIn/dataStatistics'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([])
  },
  created() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped lang="scss">
.leftNav {
  width: 240px;
  height: 100%;
  &>p{
    height: 100px;
    line-height: 100px;
    font-size: 22px;
    background-color: #00284d;
    color: #ffffff;
    box-sizing: border-box;
    width: 239px;
  }
  .el-menu {
    height: calc(100% - 100px);
    border-right: none;
  }
}
</style>
<template>
  <section class="dataStatistics">
    <p>
      <el-button type="text">Basic statistics</el-button>
      <el-divider direction="vertical"></el-divider>
      <el-button type="text">Attendance statistics</el-button>
    </p>
    <p>
      <el-date-picker
          v-model="value2"
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-value="[new Date(), new Date()]">
      </el-date-picker>
    </p>
    <main>
      <div id="myChart"
           :style="{ width: '100%', height: '100%' }"></div>
    </main>
  </section>
</template>

<script>
export default {
  name: "dataStatistics",
  data:()=>({
    value2: ''
  }),
  mounted(){
    let myChart = this.$root.$echarts.init(
        document.getElementById("myChart")
    );
    // 绘制图表
    myChart.setOption({
      title: {
        text: '折线图堆叠'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.dataStatistics{
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  &>p{
    &:nth-of-type(1){
      text-align: left;
      height: 50px;
    }
    &:nth-of-type(2){
      text-align: right;
      height: 50px;
    }
  }
  &>main{
    width: 100%;
    height: calc(100% - 100px);
  }
}
</style>
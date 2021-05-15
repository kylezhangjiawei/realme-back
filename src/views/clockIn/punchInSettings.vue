<template>
  <section class="punchInSettings">
    <p>Seven day reward setting</p>
    <div>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="Days"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Steps"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Award number">
        </el-table-column>
        <el-table-column
            label="operation"
            width="100">
          <template #default="scope">
            <el-button type="text" size="small" @click="dialogTableVisible = true">edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>


<!--  表单编辑模态框  -->
    <el-dialog title="Edit" v-model="dialogTableVisible" :width="500">
      <section class="editModal">
        <article>
          <span>Days</span>
          <el-input  :disabled="true" ></el-input>
        </article>
        <article>
          <span>Steps</span>
          <el-input placeholder="Please input"></el-input>
        </article>
        <article>
          <span>Award Number</span>
          <el-input  placeholder="Please input"></el-input>
        </article>
      </section>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import { defineComponent, ref } from 'vue'

export default {
  name: "punchInSettings",
  setup() {
    return {
      input: ref('')
    }
  },
  data: () => ({
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }],
    dialogTableVisible:false
  }),
  computed: {
    ...mapGetters([])
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.punchInSettings {
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #ffffff;

  & > p {
    text-align: left;
    margin-bottom: 30px;
  }
  &>div:nth-of-type(2){
    padding-top: 20px;
    text-align: right;
  }
  .editModal{
    display: flex;
    flex-direction: column;
    &>article{
      display: flex;
      align-items: center;
      padding-bottom: 15px;
      &>span{
        width: 150px;
        text-align: left;
      }
    }
  }
}
</style>
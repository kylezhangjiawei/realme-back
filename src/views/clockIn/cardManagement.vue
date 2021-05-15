<template>
  <section class="cardManagement">
    <header>
      <span>Product name:</span>
      <el-input  placeholder="Please input"></el-input>
      <el-button type="primary">Query</el-button>
      <el-button >Reset</el-button>
      <el-button type="primary" @click="drawer = true">Add</el-button>
    </header>
    <main>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="date"
            label="Product name"
            >
        </el-table-column>
        <el-table-column
            prop="name"
            label="Selling point description"
            >
        </el-table-column>
        <el-table-column
            prop="address"
            label="Price">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Link">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Pricture">
        </el-table-column>
        <el-table-column
            label="operation"
            >
          <template #default="scope">
            <el-button type="danger" size="small">Delete</el-button>
            <el-button type="primary" size="small" @click="drawer = true">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </main>
    <footer>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout=" sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </footer>

<!--   drawar   -->
    <el-drawer
        title="Add/Edit"
        v-model="drawer"
        :direction="direction"
        :before-close="handleClose" destroy-on-close>
      <section>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
          <el-form-item label="Product name:"  required>
            <el-input v-model="ruleForm.name" placeholder="Please input"></el-input>
          </el-form-item>
          <el-form-item label="Selling point description:"  required>
            <el-input v-model="ruleForm.name" placeholder="Please input"></el-input>
          </el-form-item>
          <el-form-item label="Price:"  required>
            <el-input v-model="ruleForm.name" placeholder="Please input"></el-input>
          </el-form-item>
          <el-form-item label="Link:"  required>
            <el-input v-model="ruleForm.name" placeholder="Please input"></el-input>
          </el-form-item>
          <el-form-item label="Upload picture:"  required>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Confirm</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </section>
    </el-drawer>
  </section>
</template>

<script>
export default {
  name: "cardManagement",
  data:()=>({
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
    currentPage1: 5,
    currentPage2: 5,
    currentPage3: 5,
    currentPage4: 4,
    drawer: false,
    direction: 'rtl',
    ruleForm: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    rules: {
      name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      region: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
      date1: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      ],
      type: [
        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
      ],
      resource: [
        { required: true, message: '请选择活动资源', trigger: 'change' }
      ],
      desc: [
        { required: true, message: '请填写活动形式', trigger: 'blur' }
      ]
    },
    imageUrl: ''
  }),
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClose(done) {
      done();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped lang="scss">
.cardManagement{
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  &>header{
    display: flex;
    align-items: center;
    padding: 15px 0;
    .el-input{
      width: 30%;
      margin: 0 10px;
    }
  }
  &>main{
    padding-top: 15px;
  }
  &>footer{
    padding-top: 20px;
    text-align: right;
  }
}
</style>
<style lang="scss">
.cardManagement{
    .el-drawer__header{
      text-align: left;
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-drawer__body{
    padding-right: 30px;
  }
}
</style>
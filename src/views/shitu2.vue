<template>
    <div class="box3">
        
        
     <el-row>
        <el-col :span="16" class="headerlogo">
          <div class="grid-content bg-purple">
            <h1>这是视图二</h1>
          </div>
        </el-col>
        <el-col :span="8" class="rightsection">
          <div class="grid-content bg-purple-light">
            <span class="el-dropdown-link userinfo-inner">欢迎您，管理员</span>
            <span class="userinfo-inner">退出</span>
          </div>
        </el-col>
      </el-row>

      <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>

<el-row :gutter="20">

<el-col :span="6"><div class="grid-content bg-purple">这是第二栏</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>

    </div>
</template>
<style scoped>
.box3{
    width: 1400px;
    height: 600px;
    margin: 0px;
    float: left;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
    height: 50px;
  }
  .bg-purple {
    background: #d3dce6;
    height: 100px !important;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 25px;
    min-height: 36px;
    height: 50px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
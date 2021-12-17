<template>
    <div>
        <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
</el-row>
<el-row :gutter="20">

<el-col :span="9" :offset="3"><div class="grid-content bg-purple"></div></el-col>

<el-col :span="9" :offset="0"><div class="grid-content bg-purple"></div></el-col>

</el-row>
<!-- 居中对齐 -->
<el-row type="flex" class="row-bg" justify="center">

<el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>
<!-- 左对齐 -->
<el-row type="flex" class="row-bg" justify="start">

<el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>
<!-- 右对齐 -->
<el-row type="flex" class="row-bg" justify="end">

<el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>
<!-- 空格间距在中间对齐 -->
<el-row type="flex" class="row-bg" justify="space-between">

<el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>
<!-- 左右各占半格空格对齐 -->
<el-row type="flex" class="row-bg" justify="space-around">

<el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
<el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>

</el-row>
<!-- 响应式布局 -->
<el-row :gutter="30">

<el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="grid-content bg-purple"></div></el-col>

<el-col :xs="2" :sm="2" :md="2" :lg="2"><div class="grid-content bg-purple-light"></div></el-col>

<el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>

<el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>

</el-row>
    </div>
</template>
<style scoped>
 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 24px;
    min-height: 36px;
    height: 50px;
    border-radius: 25px;
    line-height: 20px;
    
  }
  /* .row-bg {
    padding: 10px 0;
    background-color: #e5e9f2;  
  } */
</style>
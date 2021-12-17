<template>
  <div class="box">
    
    <el-container>
  <el-header><h1>实习管理系统</h1></el-header>
  <el-container>
    <el-aside width="200px">
      
        
        
        <el-menu
          router="true"
          :default-active="index"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">选项1</template>
              <el-menu-item index="/shitu1.vue">视图1</el-menu-item>
              <el-menu-item index="/shitu2.vue">视图2</el-menu-item>
            </el-submenu>
            <el-submenu title="1-2">
              <template slot="title">选项2</template>
              <el-menu-item index="/shitu3.vue">视图3</el-menu-item>
              <el-menu-item index="/shitu4.vue">视图4</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">选项3</template>
              <el-menu-item index="/shitu5.vue">视图5</el-menu-item>
              <el-menu-item index="/shitu6.vue">视图6</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-submenu index="2-1">
              <template slot="title">选项1</template>
              <el-menu-item index="/shitu2·1">视图2·1</el-menu-item>
              <el-menu-item index="/shitu7.vue">视图7</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">选项2</template>
              <el-menu-item index="2-2-1">视图3</el-menu-item>
              <el-menu-item index="2-2-2">视图4</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项3-1</el-menu-item>
              <el-menu-item index="3-2">选项3-2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-2-1">选项3-2-1</el-menu-item>
              <el-menu-item index="3-2-2">选项3-2-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项4-1</el-menu-item>
              <el-menu-item index="4-2">选项4-2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-2-1">选项4-2-1</el-menu-item>
              <el-menu-item index="4-2-2">选项4-2-2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        
        
      
      </el-aside>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>  
    </div>
      
      
  
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 1600px;
  height: 1000px;
  margin: 0 auto;
  overflow: hidden;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #535f68;
    color: #333;
    text-align: center;
    line-height: 200px;
    padding: 0px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
    min-height: 750px;
    padding: 0px !important;
  }

  .el-menu{
    height: 100%;
    width:100%;
    border-right: 0 !important;  
  }
  .el-scrollbar {
        height: 100%;
    }
  .el-scrollbar__wrap {
  overflow-x: hidden;
}
  body > .el-container {
    margin-bottom: 40px;
    height: 400px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

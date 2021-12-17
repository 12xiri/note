<template>
  <div>
    名称：<el-input v-model="mingcheng" placeholder="请输入名称"></el-input>
    分类：<el-input v-model="fenlei" placeholder="请输入分类"></el-input>
    卖点：<el-input v-model="maidian" placeholder="请输入卖点"></el-input>
    价格：<el-input v-model="jiage" placeholder="请输入价格"></el-input>

    <el-button type="primary" round @click="tijiao">提交</el-button>
    <el-button round @click="huoqu">获取</el-button>

    <el-table :data="tableData" height="270" border style="width: 100%">
      <el-table-column prop="mingcheng" label="名称" width="350"> </el-table-column>
      <el-table-column prop="fenlei" label="分类" width="350"> </el-table-column>
      <el-table-column prop="maidian" label="卖点" width="349"> </el-table-column>
      <el-table-column prop="jiage" label="价格" width="349"> </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      mingcheng: "",
      fenlei: "",
      maidian: "",
      jiage: "",
      tableData: [
 
      ],
    };
  },
  methods: {
    tijiao() {
      console.log(this.mingcheng);
      console.log(this.fenlei);
      console.log(this.maidian);
      console.log(this.jiage);
      this.$axios({
        url: "https://kaoshi-shangpin.theluyuan.com/addshop",
        method: "post",
        data: {
          mingcheng: this.mingcheng,
          fenlei: this.fenlei,
          maidian: this.maidian,
          jiage: this.jiage,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.code == 0) {
          this.$message({
            message: "添加成功！",
            type: "success",
            duration: 1000,
          });
          this.mingcheng = "";
          this.fenlei = "";
          this.jiage = "";
          this.maidian = "";
        }
      });
    },
    huoqu(){
        this.$axios({
            url:"https://kaoshi-shangpin.theluyuan.com/findshop",
            method:"get",
        }).then((res)=>{
            console.log(res.data.data)
            this.tableData = res.data.data
        })
    }
  },
};
</script>
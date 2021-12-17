<template>
  <div class="box1">
    <h1>这是视图一</h1>
    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<style scoped>
.box1 {
  width: 1400px;
  height: 700px;
  margin: 0px;
  float: left;
}
</style>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
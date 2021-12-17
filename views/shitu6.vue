<template>
    <div class="app">
        <div>
            <span>姓名：</span>
            <input type="text" v-bind:value='name' v-on:input='updateName'>
            {{name}}
        </div>
        <div>
            <span>年龄：</span>
            <input type="text" value='age' @input='age = $event.target.value'>
            {{age}}
        </div>
        <div>
            <span>工作：</span>
            <input type="text" v-model='job'>
            {{job}}
        </div>
        <div class="xuanran">
            <h2 v-if='score>=90'>优秀</h2>
            <h2 v-else-if='score>=80'>良好</h2>
            <h2 v-else-if='score>=70'>中等</h2>
            <h2 v-else-if='score>=60'>合格</h2>
            <h2 v-else>差</h2>
            <button @click='isShow=!isShow'>显示/隐藏</button>
            <!-- 每次根据isShow的值，确定是否渲染页面 -->
            <div v-if='isShow'>
                <h1>开始渲染</h1>
            </div>
            <hr>
            <!-- 模板已经渲染成功，通过样式控制显示隐藏 -->
            <div v-show='isShow'>
                <h1>渲染成功</h1>
            </div>

            <!-- 简单的v-if切换 -->
            <div>
                <span>方块选择：</span>
                <!-- 选择屏幕 -->
                <select v-model="selected" @change="selectbj(selected)">
                    <option v-for="option in layouts" :key="option.value" :value="option.value">
                    {{option.name}}
                </option>
                </select>
                <!-- 内容 -->
                <h2 v-if="selected==0">1*1模式</h2>
                <h2 v-else-if="selected==1">2*1模式</h2>
                <h2 v-else-if="selected==2">3*1模式</h2>
                <h2 v-else-if="selected==3">4*1模式</h2>
                <h2 v-else-if="selected==4">5*1模式</h2>
                <h2 v-else-if="selected==5">6*1模式</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        name:'张三',
        age:22,
        job:'程序员',
        score:65,
        isShow:true,
        selected:0,
        layouts: [

{ 'name': '1x1模式', 'value': '0' },

{ 'name': '2x1模式', 'value': '1' },

{ 'name': '3x1模式', 'value': '2' },

{ 'name': '4x1模式', 'value': '3' },

{ 'name': '5x1模式', 'value': '4' },

{ 'name': '6x1模式', 'value': '5' }

],
        }
        
    },
methods:{
    updateName(e){
        //获取文本框里面的内容，更新数据
        this.name = e.target.value
    },
    updateAge(e){
        this.age = e.target.value
    }
}
}
</script>
<style scoped>

</style>
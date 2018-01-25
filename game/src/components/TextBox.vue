<template>
  <div class="textBox-wrapper">
    <section class="textBox"></section>
  </div>
</template>

<script>
  export default {
    created(){
      this.$api.req('static/json/story1.json', 'GET', {}, this.getDataSuc, this.failure)
    },
    data(){
      return {
        storyData: {},
        text: '',
        currentSence: 0,
        currentTalkIndex: 0,
        currentSenceTalkLength: 0
      }
    },
    methods: {
      getDataSuc(data){
        this.storyData = JSON.parse('\'' + data + '\'')
        console.log(this.storyData)
        debugger
        let currentSenceTalkLength = data.sence[this.currentSence].talk[0]
        console.log(this.currentSenceTalkLength)
      },
      failure(er){
        console.log('r_错误')
        console.log(er)
      }
    }
  }
</script>

<style lang="stylus">
  .textBox-wrapper
    .textBox
      position: absolute;
      bottom: 20px;
      left: 10%;
      right: 10%;
      height: 100px;
      padding: 20px;
      border: 1px solid #F0AD4E;
      background: #67434E;
      opacity: 0.6;
      font-family: "微软雅黑";
      color: white;
      font-size: 1rem;
      word-wrap: break-word;


</style>

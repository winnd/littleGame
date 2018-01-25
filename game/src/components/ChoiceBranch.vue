<template>
  <div class="chocie-branch-wrapper">
    <ul class="choice-box" v-show="showBranch">
      <li class="choice" v-for="(item,index) in branchData" v-bind:key="index">
        {{item.txt}}
      </li>
    </ul>
  </div>
</template>

<script>
  import choiceText from '../../static/img/logo.png'
  import data from '../../static/json/choice1.json'
  //  import logo from '/static/img/logo.png'
  import axios from 'axios'

  export default {
    created(){
      this.$api.req('static/json/choice1.json', 'GET', {}, this.getDataSuc, this.failure)
    },
    data(){
      return {
        showBranch: false,
        branchData: []
      }
    },
    methods: {
      getDataSuc(data){
        this.branchData = JSON.parse(data).content
        console.log(this.branchData)
      },
      failure(er){
        console.log('r_错误')
        console.log(er)
      }
    }
  }
</script>

<style lang="stylus">

  .choice-box
    position: absolute
    right: 10%
    left: 10%
    top: 100px
    height: 200px
    text-align: center
    color: #fff
    background pink
    opacity: 0.6
    li
      width: 80%
      margin: 0px auto
      margin-top: 10px

</style>

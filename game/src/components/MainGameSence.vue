<template>
  <div class="window-wrapper">
    <ChoiceBranch></ChoiceBranch>
    <TextBox></TextBox>
  </div>
</template>

<script>
  import ChoiceBranch from '../components/ChoiceBranch.vue'
  import TextBox from '../components/TextBox.vue'

  export default {
    data () {
      return {
      }
    },
    components: { ChoiceBranch, TextBox },
    methods: {
      getText(){
        this.$api.req('static/json/choice1.json', 'GET', {}, this.getDataSuc, this.failure)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>

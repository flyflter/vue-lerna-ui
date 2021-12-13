<template>
  <div>
    <div class="main-content">   
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },

  methods: {

  }
}
</script>

<style lang="less" scoped>
.right {
  float: right !important;
}
.main-content {
  padding: 10px 40px;
}

</style>

<template>
  <div class="row">
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.id">
      <!-- 动态绑定要加【：】 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isLoading">加载中</h1>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        info: {
          isFirst: true, //是否为第一次加载
          isLoading: false,
          errMsg: '',
          users: [],
        },
      }
    },
    mounted() {
      // 接收方创建
      this.$bus.$on('updateListData', (dataObj) => {
        // console.log(dataObj)
        this.info = { ...this.info, ...dataObj } //合并两个对象，重名以后面的为主
      })
    },
  }
</script>

<style>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

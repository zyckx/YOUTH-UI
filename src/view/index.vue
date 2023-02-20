<template>
  <div class="contentBox">
    <div class="imgLogo">
      <img src="../assets/Youth-UI.jpeg" alt="YOUTH-UI" />
    </div>
    <h3>一套适合开发者使用的轻量级UI组件库</h3>
    <div class="tiBox">
      <div class="buttonGroups">
        <y-button
          type="primary"
          round
          style="padding: 15px 50px; margin-right: 2vw; font-size: 17px"
          @click="toComponents"
          >立即上手</y-button
        >
        <y-button
          round
          icon="m-icon-github"
          style="padding: 15px 50px; margin-left: 2vw; font-size: 17px"
          @click="goGuthub"
          >Github</y-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toComponents = () => {
  router.push('/components/Button');
};
const goGuthub = () => {
  window.open('https://github.com/allblueee/YOUTH-UI');
};
</script>
<style lang="scss" scoped>
.contentBox {
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  background: rgba(9, 195, 190, 0.02);
  .imgLogo {
    margin: 0 auto;
    display: block;
    width: 12vw;
    margin-top: 60px;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
  }

  h3 {
    text-align: center;
    font-size: 2vw;
    color: #4a5264;
    margin: 80px 0 0 0;
  }
  .tiBox {
    width: 70%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    p {
      text-align: center;
      color: #636e86;
      font-size: 0.9vw;
    }
    .buttonGroups {
      width: 100%;
      text-align: center;
      height: auto;
      overflow: hidden;
      margin-top: 5vh;
    }
  }
}
</style>

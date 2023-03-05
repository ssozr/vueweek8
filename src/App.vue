<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <div class="header row">
      <div class="d-flex justify-content-between py-4 m-0 px-0">
        <div>
          <RouterLink to="/"><img h-24 src="https://s3-alpha-sig.figma.com/img/c808/7901/34a7249bffdfebe8fca256378bad1a3e?Expires=1678665600&Signature=VsPOZUuQP70-5ZMFIs6MfeHIY~OtNV701HU5eIwArSWPfhJL3KFdgwOR5Jy4ver~fKF5dHdMahBUmPXohZMnJ05u6tFWLJlYUWF60oz~ln8tQrvova9RFzRIO5FzMI9cd8X2KqQSak8fAgmoobDANqP6b~xML7Xa~ATvVJTGLXwGpIAir6fz1-1DxK1s1XnqET3SIpGIkaaYgayKQG~Zc4KcrnrY4TRUn8mgy6dAs-6wfnQ~Bj22O7vd6R9ImiQn4plRdCu0unPXGVkoR~XWunm3no9KMU8SrB8ldIrDu8Z8VeUGRyadGaMEMIE7m8JfYRXcq2pEJNoFWAW~i72XtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""></RouterLink>
        </div>
        <ul class="d-flex m-0 p-0">
          <li class="me-6"><RouterLink to="/article">文章分享</RouterLink></li>
          <li class="me-6"><RouterLink to="/about">關於我們</RouterLink></li>
          <li class="me-6"><RouterLink to="/teachers">導師列表</RouterLink></li>
          <li><RouterLink to="/cart">收藏課程</RouterLink></li>
        </ul>
      </div>
      <hr class="m-0">
     </div>
    </div>
      <RouterView />
    <div class="container">
      <div class="footer row">
        <div class="text-center">
          <div class="mb-17"><img src="https://s3-alpha-sig.figma.com/img/c808/7901/34a7249bffdfebe8fca256378bad1a3e?Expires=1678665600&Signature=VsPOZUuQP70-5ZMFIs6MfeHIY~OtNV701HU5eIwArSWPfhJL3KFdgwOR5Jy4ver~fKF5dHdMahBUmPXohZMnJ05u6tFWLJlYUWF60oz~ln8tQrvova9RFzRIO5FzMI9cd8X2KqQSak8fAgmoobDANqP6b~xML7Xa~ATvVJTGLXwGpIAir6fz1-1DxK1s1XnqET3SIpGIkaaYgayKQG~Zc4KcrnrY4TRUn8mgy6dAs-6wfnQ~Bj22O7vd6R9ImiQn4plRdCu0unPXGVkoR~XWunm3no9KMU8SrB8ldIrDu8Z8VeUGRyadGaMEMIE7m8JfYRXcq2pEJNoFWAW~i72XtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""></div>
          <a class="mb-2" href="#">Line icon</a>
          <ul class="fs-6 text-gray-04 mb-3">
            <li class="mb-1">客服信箱：ＸＸＸＸ＠gmail.com </li>
            <li>客服電話：0912345678</li>
          </ul>
          <p class="f-7 text-primary mb-8">正視心靈 © 2023 Copyright</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

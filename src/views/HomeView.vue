<template>
  <div class="container-fluid banner px-0 d-flex align-items-center mb-30">
    <div class="container">
      <div class="row">
        <div class="px-0 col-5">
          <h1 class="mb-0">用我們的專業，幫您看見內心</h1>
          <label for="search"><h4 class="mt-8 mb-6">我想看見...</h4></label>
          <div class="input-group">
            <input id="search" type="text" class="form-control" placeholder="人生方向、家庭關係...">
            <span class="input-group-text bg-primary">
              <span class="material-symbols-outlined text-white">search</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container second mb-30">
    <div class="row">
      <h2 class="fs-10 text-center mb-18">您內心的疑惑，我們懂</h2>
      <ul class="row mb-0">
        <li class="col-3">
          <div class="img-1"></div>
          <h5 class="text-center mt-6 mb-0">家人不懂我</h5>
        </li>
        <li class="col-3">
          <div class="img-2"></div>
          <h5 class="text-center mt-6 mb-0">我還能再愛嗎?</h5>
        </li>
        <li class="col-3">
          <div class="img-3"></div>
          <h5 class="text-center mt-6 mb-0">該換工作嗎?</h5>
        </li>
        <li class="col-3">
          <div class="img-4"></div>
          <h5 class="text-center mt-6 mb-0">我在追求什麼?</h5>
        </li>
      </ul>
    </div>
  </div>
  <div class="container-fluid bg-primary third pb-30">
    <div class="row pt-30 pb-18">
      <h2 class="text-center">讓專業，協助您看見真實</h2>
    </div>
    <div class="row">
      <div class="col-6 p-0">
        <div class="d-flex justify-content-end me-42">
          <div class="card border-primary border-3" style="width:306px;">
            <div class="bg-primary border-primary">
              <div class="rounded-circle border border-secondary">
                <div class="teacher-1 m-5"></div>
              </div>
            </div>
            <div class="card-body bg-primary p-0">
              <h5 class="card-title mt-6 text-center mb-8">Aaliyah</h5>
              <p class="card-text mb-6">人的一生中，與自己的對話其實多過與別人的對話 但我們對自己講的話，不一定是溫和，真實，有幫助， 有時甚至毫不尊重．</p>
              <div class="text-center">
                <button type="button" class="btn btn-secondary rounded-pill px-10 py-3">課程連結</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-0">
        <div class="d-flex justify-content-start ms-42">
          <div class="card border-primary border-3" style="width:306px;">
            <div class="bg-primary border-primary">
              <div class="rounded-circle border border-secondary">
                <div class="teacher-2 m-5"></div>
              </div>
            </div>
            <div class="card-body bg-primary p-0">
              <h5 class="card-title mt-6 text-center mb-8">Aaliyah</h5>
              <p class="card-text mb-6">人的一生中，與自己的對話其實多過與別人的對話 但我們對自己講的話，不一定是溫和，真實，有幫助， 有時甚至毫不尊重．</p>
              <div class="text-center">
                <button type="button" class="btn btn-secondary rounded-pill px-10 py-3">課程連結</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-30 mb-30">
    <div class="row">
      <swiper></swiper>
    </div>
  </div>

</template>

<script>
import swiper from '../components/Swiper.vue'
export default {
  components: {
    swiper
  }
}
</script>

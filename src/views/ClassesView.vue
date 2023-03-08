<style>
.card-img {
  height: 268px;
  width: 268px;
  object-fit: cover;
  object-position: center;
}


</style>

<template>
  <div class="container-fluid bg-primary">
    <div class="container py-15 px-0">
      <div>
        <div class="dropdown mb-6">
          <button class="btn btn-secondary dropdown-toggle" type="button">
            課程篩選
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">自我成長</a></li>
            <li><a class="dropdown-item" href="#">諮商談話</a></li>
            <li><a class="dropdown-item" href="#">感情婚姻</a></li>
            <li><a class="dropdown-item" href="#">人際關係</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div v-for="(product, i) in classData" :key="i" class="col-lg-4 col-md-6 mb-8 card-group">
          <div class="card bg-primary border-0">
            <div class="d-flex justify-content-center" >
              <div class="d-flex justify-content-center align-items-center border rounded-circle border-secondary" style="width: 308px height: 308px;">
                <img :src="product.imageUrl" class="card-img-top rounded-circle card-img p-5" alt="...">
              </div>
            </div>
            <div class="card-body text-center p-0 mt-5">
              <h2 class="card-title fs-4">{{ product.title}}</h2>
              <div class="mt-8 mb-6">
                <p class="card-text fs-6">{{ product.description }}</p>
              </div>
            </div>
            <div class="card-foot text-center">
              <RouterLink :to="`/class/${product.id}`" class="btn btn-secondary text-white px-10 py-3 rounded-pill">詳細介紹</RouterLink>
            </div>
          </div>
        </div>
      </div>
        <pagination
        :pages="pagination"
        @change-page="changePage"
        ></pagination>
    </div>
  </div>
</template>

<script>
const {VITE_PATH, VITE_URL} = import.meta.env
import pagination from '../components/PaginationView.vue'
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      classData: [],
      pagination: {}
    }
  },
  components: {
    pagination,
    RouterLink
  },
  methods: {
   getClassData (page = 1) {
    this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)
      .then((res) => {
        console.log(res.data.products)
        this.classData = res.data.products
        this.pagination = res.data.pagination
      })
      .catch((err) => {
        coneosl.log(err)
      })
   },
   changePage (page) {
      this.getClassData(page)
    },
  },
  mounted () {
    this.getClassData()
  }
}
</script>

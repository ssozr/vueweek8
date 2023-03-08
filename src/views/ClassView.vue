<template>
  <div>
    <div class="container-fluid bg-primary">
      <div class="container pt-15">
        <div class="row">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const {VITE_PATH, VITE_URL} = import.meta.env
export default {
  data () {
    return {
      classData: []
    }
  },
  methods: {
   getClassData () {
    this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        coneosl.log(err)
      })
   } 
  },
  mounted () {
    this.getClassData()
  }
}
</script>

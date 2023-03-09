<template>
  <div class="container p-0">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">課程名稱</th>
          <th scope="col">授課老師</th>
          <th scope="col">總堂數</th>
          <th scope="col">課程數</th>
          <th scope="col">價格</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cartData" :key="i">
          <td>
            <RouterLink :to="`/class/${item.product.id}`">{{ item.product.title }}</RouterLink>
          </td>
          <!-- <td>{{ item.product.title }}</td> -->
          <td>{{ item.product.unit }}</td>
          <td>{{ item.product.origin_price }}堂</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.product.price }}</td>
          <td><button type="button" class="btn btn-primary rounded-pill">刪除</button></td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal" tabindex="-1" ref="delModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
const { VITE_URL, VITE_PATH } = import.meta.env
import { RouterLink } from 'vue-router'
export default {
  data () {
    return {
      cartData: [],
      dalModal: ''
    }
  },
  components: {
    RouterLink,
  },
  methods: {
    getCartData () {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res)
          this.cartData = res.data.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDelModal (item) {
      this.delModal.show()
    }
  },
  mounted () {
    this.getCartData()
    this.delModal = new Modal(this.$refs.delModal)
  }
}
</script>

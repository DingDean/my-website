<template>
  <ovtemplate>
    <div slot="header">
      <span class="i-ov-title"> 正在读 </span>
      <icon class="i-ov-icon" name="book" scale="2"></icon>
    </div>
    <div>
      <book-list v-for="book in booklist" :key="book" :book="book">
      </book-list>
    </div>
  </ovtemplate>
</template>

<script>
import BookList from './ov.douban.list'
export default {
  data () {
    return {
      booklist: null
    }
  },
  components: {
    BookList
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/douban/list/do').then(response => {
        this.booklist = response.body.books
      }, response => {
        this.booklist = []
      })
    }
  }
}
</script>

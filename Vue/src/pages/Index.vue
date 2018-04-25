<template>
  <div class="page">
    <index-header></index-header>
    <index-about></index-about>
    <index-footer></index-footer>
  </div>
</template>

<script>
import IndexHeader from './components/Header'
import IndexAbout from './components/About'
import IndexFooter from './components/Footer'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    IndexHeader,
    IndexAbout,
    IndexFooter
  },
  methods: {
    googleAnalytics () {
      window.dataLayer = window.dataLayer || []
      function gtag () { window.dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', 'UA-71315338-1')
    }
  },
  created () {
    this.googleAnalytics()
  }
}
</script>

<style lang="stylus" scoped>
  .page
    margin-top 1.51rem
</style>

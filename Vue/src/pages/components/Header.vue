<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="nav-logo">
        FANGDA
      </div>
      <div class="nav-tabs">
        <div class="nav-tab">
          <a href="" v-scroll-to="'#about'">Home</a>
        </div>
        <div class="nav-tab" >
          <a href="" v-scroll-to="'#pub'">Publication</a>
        </div>
        <div class="nav-tab">
          <a href="" v-scroll-to="'#contact'">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="stylus" scoped>
  @media screen and (min-width: 800px)
    .nav
      z-index 1
      background white
      position fixed
      top 0
      width 100%
      height 1.5rem
      line-height 1.5rem
      text-align center
      font-family 'Roboto','Fedra Sans',sans-serif
      box-shadow 0 .1rem .1rem rgba(0, 0, 0, .2)
      .nav-bar
        display inline-block
        width 80%
        max-width 25rem
        .nav-logo
          font-size .7rem
          float left
          font-weight bold
        .nav-tabs
          display flex
          float right
          font-family 'Lato',sans-serif
          .nav-tab
            font-weight bold
            font-size .4rem
            padding 0 .2rem
            a
              color black
          .nav-tab:hover
            a
              color red
  @media screen and (max-width: 800px)
    .nav
      z-index 1
      background white
      position fixed
      top 0
      width 100%
      height 1.5rem
      line-height 1.5rem
      text-align center
      font-family 'Roboto','Fedra Sans',sans-serif
      box-shadow 0 .1rem .1rem rgba(0, 0, 0, .2)
      .nav-bar
        display inline-block
        width 80%
        max-width 25rem
        text-align middle
        .nav-logo
          font-size .7rem
          font-weight bold
        .nav-tabs
          display none
          float right
          font-family 'Lato',sans-serif
          .nav-tab
            font-weight bold
            font-size .4rem
            padding 0 .2rem
            a
              color black
          .nav-tab:hover
            a
              color red
</style>

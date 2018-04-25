<template>
  <div class="about">
    <div id="about" class="section">
      <div class="sec-container">
        <about-profile class="sec-left"></about-profile>
        <about-biography class="sec-right"></about-biography>
      </div>
    </div>
    <div id="pub" class="bg-gray section"></div>
    <div id="contact" class="section"></div>
  </div>
</template>

<script>
import AboutProfile from './sub-components/profile'
import AboutBiography from './sub-components/biography'
export default {
  name: 'About',
  components: {
    AboutProfile,
    AboutBiography
  }
}
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 800px)
  .about
    .bg-gray
      height 50vh
      // background rgb(247, 247, 247) !important
    .section
      padding .5rem 0 1rem 0
      background white
      width 100%
      // height calc(100vh- 6rem)
      .sec-container
        display flex
        padding 0 10% 0 5%
        .sec-left
          flex 1
        .sec-right
          flex 2
</style>

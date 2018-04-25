<template>
  <div class="profile">
    <div class="portrait-container">
      <img
        class="portrait"
        src="/static/potray.png">
    </div>
    <div class="name">{{this.name}}</div>
    <div class="title">{{this.title}}</div>
    <div class="affliation"><a href="http://www.bath.ac.uk">{{this.affliation}}</a></div>
    <ul class="network-icon">
      <li>
        <a href="mailto:fx240@bath.ac.uk">
          <i class="fa fa-envelope big-icon"></i>
        </a>
      </li>
      <li>
        <a href="//github.com/xufangda">
          <i class="fa fa-github big-icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'Fangda Xu',
      title: 'Ph.D Candidate in Additive Manufacturing',
      affliation: 'University of Bath'
    }
  }

}
</script>

<style lang="stylus" scoped>
  .profile
    text-align center
    padding .6rem 0
    .portrait-container
      overflow hidden
      display inline-block
      width 4rem
      height 4rem
      border-radius 50%
      margin-bottom .8rem
    .portrait
      width 120%
      margin-left -10%
    .name
      font-size .8rem
      padding .2rem 0
    .title
      padding .2rem
      color #aaaaaa
    .affliation
      color #222
    a:hover
      color red
    ul
      padding .2rem
      text-align center
    li
      display inline-block
      font-size .5rem
      a
        padding .1rem
        color #0084ff

</style>

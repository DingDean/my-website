<template>
  <header id="my-nav" :class="classObject">
    <div class="nav-reserve">
    </div>
    <nav-menu id="nav-menu"></nav-menu>
    <legal-info id="legal-info">
    </legal-info>
  </header>
</template>

<script>
import NavMenu from './menu'
import LegalInfo from './legalInfo'
export default {
  computed: {
    classObject () {
      return {
        displayMenu: this.$store.state.showMenu
      }
    }
  },
  components: {
    LegalInfo,
    NavMenu
  }
}
</script>

<style lang="stylus" scoped>
.displayMenu
  display grid !important
#my-nav
  background dark-primary-c
  text-align center
  display grid
  @media (min-width: 1025px)
    width side-menu-width
    height 100%
    position fixed
    grid-template-columns 1fr
    grid-template-rows repeat(12, 1fr)
    color white
    .nav-reserve
      grid-row 1 / 2
    #nav-menu
      grid-row 3 / 11
    #legal-info
      grid-row 12
  @media (max-width: 1024px)
    display none
    box-shadow 0px -2px 15px 0px rgba(64,66,71,1)
    width 100%
    position fixed
    bottom 0
    grid-template-columns repeat(6, 1fr)
    grid-template-rows repeat(2, 75px) 100px
    .nav-reserve
      display none
    #nav-menu
      grid-row 1 / 3
      grid-column 1 / 7
    #legal-info
      grid-row 3 / 4
      grid-column 1 / 7
</style>

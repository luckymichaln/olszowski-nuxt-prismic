<template>
  <div class="container">
    <nav class="social-nav">
      <ul v-if="homePageDataV2.social">
        <li
          v-for="(el, i) in homePageDataV2.social"
          :key="i"
        >
          <prismic-link
            :field="el.social_link"
          >
            {{ el.link_text }}
          </prismic-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('pages', ['homePageDataV2'])
  },

  mounted() {
    const allLinks = document.querySelectorAll('.social-nav a')
    allLinks.forEach(node => {
      const svg = document.getElementById('arrow').cloneNode(true)
      node.prepend(document.createElement('div').appendChild(svg))
    })
  }
}
</script>

<style lang="scss">
  @import '~/assets/styles/variables/layout';

  .social-nav {
    display: none;

    @media (min-width: 767px) {
      display: block;
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      width: 100%;
      max-width: $container-width;
      padding: 0 $container-padding;
      pointer-events: none;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      li {
        pointer-events: auto;
      }
    }
  }
</style>
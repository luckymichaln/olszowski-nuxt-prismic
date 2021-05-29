<template>
  <div class="container">
    <nav class="social-nav">
      <ul v-if="homePageData.social">
        <li
          v-for="(el, i) in homePageData.social"
          :key="i"
        >
          <prismic-link
            :field="el.social_link"
          >
            {{ linkLabel(el.social_link.url) }}
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
    ...mapGetters('pages', ['homePageData'])
  },

  methods: {
    linkLabel(url) {
      if (url) {
        const chunk = url.split('//')[1].split('.')[0] === 'www' ? url.split('//')[1].split('.')[1] : url.split('//')[1].split('.')[0]
        const label = chunk.split('.')[0]
        return label.charAt(0).toUpperCase() + label.slice(1)
      }
    }
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
      text-transform: uppercase;
      pointer-events: none;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-weight: 600;
      }

      li {
        pointer-events: auto;
      }
    }
  }
</style>
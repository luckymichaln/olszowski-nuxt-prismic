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
      console.log(url)
      if (url) {
        const chunk = url.split('//')[1].split('.')[0] === 'www' ? url.split('//')[1].split('.')[1] : url.split('//')[1].split('.')[0]
        const label = chunk.split('.')[0]
        return label.charAt(0).toUpperCase() + label.slice(1)
      }
    }
  },

  mounted() {
    console.log(this.homePageData, 'homePageDatahomePageDatahomePageData')
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

  .social-nav {
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    width: 100%;
    max-width: $container-width;
    padding: 0 $container-padding;
    font-size: 18px;
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
</style>
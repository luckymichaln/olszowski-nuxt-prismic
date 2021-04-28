<template>
  <div class="container">
    <nav class="social-nav">
      <ul v-if="socialNav">
        <li
          v-for="(el, i) in socialNav.social_links"
          :key="i"
        >
          <prismic-link
            :field="el.link"
          >
            {{ linkLabel(el.link.url) }}
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
    ...mapGetters('pages', ['socialNav'])
  },

  methods: {
    linkLabel(url) {
      console.log(url)
      if (url) {
        const label = url.split('//')[1].split('.')[0]
        return label.charAt(0).toUpperCase() + label.slice(1)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables/layout';

  .social-nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: $container-width;
    padding: 0 15px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-weight: 600;
    }
  }
</style>
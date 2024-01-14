<template>
  <div>
    <button
      class="burger-opener"
      @click="toggleMenu()"
      :style="{
        color: color
      }"
    >
      Button
    </button>
    <ul
      class="burger-menu"
      ref="burgerMenu"
    >
      <li
        v-for="(item, i) in menu"
        :key="i"
      >
        <nuxt-link
          :to="item.path"
        >
          {{item.label}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: () => '#000'
    }
  },

  methods: {
    toggleMenu() {
      if (this.menuIsOpen) {
        this.$refs.burgerMenu.classList.remove('burger-menu--opened');
        this.menuIsOpen = false;
        return;
      }
      this.$refs.burgerMenu.classList.add('burger-menu--opened');
      this.menuIsOpen = true;
    }
  },

  data() {
    return {
      menu: [
        {
          label: 'Work',
          path: '/home'
        },
        {
          label: 'About',
          path: '/about'
        },
        {
          label: 'Contact',
          path: '/contactv2'
        },
      ],
      menuIsOpen: false,
    }
  },

}
</script>

<style lang="scss">
.burger-opener {
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999991;
  cursor: pointer;
}

.burger-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  z-index: 999999;
  transition: opacity .3s;
  opacity: 0;
  pointer-events: none;



  &--opened {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
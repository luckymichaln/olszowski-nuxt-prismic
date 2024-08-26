<template>
  <div
    class="burger"
    ref="burgerMenu"
  >
    <button
      class="burger-opener"
      @click="(ev) => toggleMenu(ev.target.current)"
    >
      <p class="burger-opener-icon" :style="{
            color: color || '#000'
          }">
        +
      </p>
    </button>
    <ul
      class="burger-menu"
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

  data() {
    return {
      menu: [
        {
          label: 'Work',
          path: '/'
        },
        {
          label: 'About',
          path: '/about'
        },
        {
          label: 'Contact',
          path: '/contact'
        },
      ],
      menuIsOpen: false,
    }
  },

  methods: {
    toggleMenu(ev) {
      console.log(ev, 'ev')
      if (this.menuIsOpen) {
        this.$refs.burgerMenu.classList.remove('burger--opened');
        this.menuIsOpen = false;
        return;
      }
      this.$refs.burgerMenu.classList.add('burger--opened');
      this.menuIsOpen = true;
    }
  }
}
</script>

<style lang="scss">
.burger-opener {
  position: fixed;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999991;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  .burger-opener-icon {
    position: relative;
    height: 30px;
    width: 30px;
    font-size: 54px;
    line-height: 32px;
    user-select: none;
    color: inherit;
    transition: .3s all ease-out;
  }
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
  font-size: 40px;
  background: #F5F5F5;
  color: #1D1D1D;
  z-index: 999999;
  transition: opacity .3s;
  opacity: 0;
  pointer-events: none;

  li {
    margin-bottom: 10px;
  }

  .nuxt-link-exact-active {
    text-decoration: underline;
    pointer-events: none;
  }
}

.burger {
  &--opened {
    .burger-menu {
      opacity: 1;
      pointer-events: all;
    }

    .burger-opener-icon {
      transform: rotate(45deg) translate(-3px);
      color: #000 !important;
    }
  }
}
</style>
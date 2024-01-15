<template>
  <div
    class="burger"
    ref="burgerMenu"
  >
    <button
      class="burger-opener"
      @click="toggleMenu()"
    >
      <ul class="burger-opener-icon">
        <li
          :style="{
            backgroundColor: color || '#000'
          }"
        />
        <li
          :style="{
            backgroundColor: color || '#000'
          }"
        />
        <li
          :style="{
            backgroundColor: color || '#000'
          }"
        />
        <li
          :style="{
            backgroundColor: color || '#000'
          }"
        />
      </ul>
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

  methods: {
    toggleMenu() {
      if (this.menuIsOpen) {
        this.$refs.burgerMenu.classList.remove('burger--opened');
        this.menuIsOpen = false;
        return;
      }
      this.$refs.burgerMenu.classList.add('burger--opened');
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
    color: inherit;

    li {
      position: absolute;
      left: 0;
      height: 3px;
      width: 30px;
      background: inherit;
      transition: .3s all ease-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: 7px;
      }
      &:nth-child(3) {
        top: 14px;
      }
      &:nth-child(4) {
        top: 21px;
      }
    }
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
  background: #fff;
  color: #000;
  z-index: 999999;
  transition: opacity .3s;
  opacity: 0;
  pointer-events: none;
}

.burger {
  &--opened {
    .burger-menu {
      opacity: 1;
      pointer-events: all;
    }

    .burger-opener-icon {
      li {
        background-color: #000 !important;

        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          transform: rotate(45deg) translate(2px, 3px);
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(2px, -3px);
        }
        &:nth-child(4) {
          opacity: 0;
        }
      }
    }
  }
}
</style>
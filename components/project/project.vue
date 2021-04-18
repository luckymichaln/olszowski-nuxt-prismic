<template>
  <div
    class="project-page"
    :style="{ backgroundColor: data.background_color, color: data.text_color }"
  >
    <div class="container">
      <nav class="nav">
        <nuxt-link
          to="/"
        >
          Work
        </nuxt-link>
      </nav>

      <prismic-rich-text
        :field="data.project_info"
      />
    </div>

    <projectRow
      v-for="(row, index) in data.body"
      :key="index"
      :data="row"
    />

  </div>
</template>

<script>
import projectRow from '~/components/project/project-row'

export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
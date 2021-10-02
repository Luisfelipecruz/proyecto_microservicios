<template>
  <div>
    <section>
      <h1 :style='{color:category.color}' class='text-center text-primary-title text-alegraya'>{{ category.title }}</h1>
      <p class='text-center text-description'>A continuación encontrarás el listado de emprendimientos registrados en
        esta categoría:</p>
      <div class='container'>
        <div v-for='(project, i) in $store.state.projects.list[$route.params.category_id]' :key='i' class='row'>
          <div class='col-3'>
            <project :project='project' />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data: () => ({
    category: {
      title: ''
    }
  }),
  computed: {
    projects() {
      return this.$store.state.projects.list[this.$route.params.category_id]
    }
  },

  async mounted() {
    await this.getProjects()
  },
  methods: {
    async getProjects() {
      await this.$store.dispatch('projects/getProjectsByCategory', this.$route.params.category_id)
      this.category = this.$store.state.categories.list.find((e) => e.id === Number(this.$route.params.category_id))
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang='scss'>
</style>

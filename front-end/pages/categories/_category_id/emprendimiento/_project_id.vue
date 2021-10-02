<template>
  <div>
    <article class="container">
      <section>
        <h1 v-bind:style="categoryStyle" class="text-center text-primary-title text-alegraya">{{
            category.name
          }}</h1>
      </section>
      <section>
        <div class="d-flex justify-content-center my-5">
          <img class="rounded-circle" src='https://lorempixel.com/120/120' width="200" alt="empredimiento destacado">
        </div>
      </section>
      <section class="mb-5">
        <h5 class="text-center text-black fs-1 fw-bold">{{ category.shortDescription }}</h5>
      </section>
      <div class="container d-flex justify-content-center">
        <div class="row w-75">
          <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
            <svg v-bind:style="categoryStyle" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 fill="currentColor" class="bi bi-geo-alt-fill mx-2" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <p
              v-bind:style="categoryStyle"
              class="fw-bold fs-1 text-center text-green align-self-center my-0 mx-4 mx-sm-0 mx-md-0 mx-lg-0 text-uppercase">
              {{ category.city }}, {{ category.state }}</p>
          </div>
          <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
            <svg v-bind:style="categoryStyle" width="20" height="20" viewBox="0 0 51 51" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.4111 0.618841C50.124 0.333411 49.7612 0.135791 49.3655 0.0492144C48.9698 -0.0373618 48.5576 -0.00929447 48.1773 0.130117L1.37297 17.1292C0.969318 17.2822 0.6218 17.5541 0.376569 17.909C0.131338 18.2638 0 18.6848 0 19.116C0 19.5472 0.131338 19.9682 0.376569 20.323C0.6218 20.6779 0.969318 20.9499 1.37297 21.1028L19.6479 28.3912L33.1361 14.8769L36.1358 17.873L22.5838 31.4085L29.9023 49.6613C30.06 50.0567 30.3329 50.3957 30.6856 50.6343C31.0384 50.873 31.4548 51.0004 31.8809 51C32.3108 50.9912 32.728 50.8525 33.0774 50.6021C33.4268 50.3518 33.692 50.0015 33.8381 49.5976L50.8579 2.84998C51.0028 2.47403 51.0378 2.06468 50.9587 1.66965C50.8796 1.27462 50.6897 0.910185 50.4111 0.618841Z"/>
            </svg>
            <p v-bind:style="categoryStyle"
               class="fw-bold fs-1 text-center text-green align-self-center my-0 mx-4 mx-sm-0 mx-md-0 mx-lg-4">
              {{ category.hasSales === 'true' ? 'ENVIOS NACIONALES' : '' }}</p>
          </div>
        </div>
      </div>
      <section class="container">
        <p style="text-align:justify" class="fs-1 px-3 mt-5">{{ category.description }}</p>
      </section>
      <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 mb-2 mb-sm-0">
              <picture class="d-flex justify-content-center">
                <img class="img-fluid rounded-3" src='/sections/matera-1.svg' width="450" alt="emprendimiento">
              </picture>
              <p class="fs-1 fw-bold text-center mt-4">Imagen 1</p>
            </div>
            <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0">
              <picture class="d-flex justify-content-center">
                <img class="img-fluid rounded-3" src='/sections/matera-2.svg' width="450" alt="empredimiento">
              </picture>
              <p class="fs-1 fw-bold text-center mt-4">Imagen 2</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p id="OptionalInfo" class="fs-1 fw-bold text-center px-3">{{}}</p>
      </section>
      <section>
        <div class="container">
          <div class="row justify-items-center">
            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
              <a :href="category.facebook" class="d-flex text-decoration-none" target="_blank">
                <svg v-bind:style="categoryStyle" width="40" height="40" viewBox="0 0 72 72" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36 0C16.2 0 0 16.2289 0 36.2169C0 54.2892 13.176 69.2892 30.384 72V46.6988H21.24V36.2169H30.384V28.2289C30.384 19.1566 35.748 14.1687 43.9919 14.1687C47.9159 14.1687 52.0199 14.8554 52.0199 14.8554V23.7831H47.4839C43.0199 23.7831 41.616 26.5663 41.616 29.4217V36.2169H51.6239L50.0039 46.6988H41.616V72C50.0991 70.6549 57.8239 66.3091 63.3957 59.7472C68.9675 53.1853 72.0192 44.8397 71.9999 36.2169C71.9999 16.2289 55.7999 0 36 0Z"/>
                </svg>
                <p v-bind:style="categoryStyle" class="text-center text-green text-uppercase fs-1 fw-bold m-0 mx-3">
                  {{ category.name }}</p>
              </a>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-center">
              <a :href="category.instagram" class="d-flex text-decoration-none" target="_blank">
                <svg v-bind:style="categoryStyle" width="40" height="40" viewBox="0 0 72 72" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.88 0H51.12C62.64 0 72 9.36 72 20.88V51.12C72 56.6577 69.8001 61.9686 65.8844 65.8844C61.9686 69.8001 56.6577 72 51.12 72H20.88C9.36 72 0 62.64 0 51.12V20.88C0 15.3423 2.19985 10.0314 6.11561 6.11561C10.0314 2.19985 15.3423 0 20.88 0ZM20.16 7.2C16.7228 7.2 13.4264 8.56542 10.9959 10.9959C8.56542 13.4264 7.2 16.7228 7.2 20.16V51.84C7.2 59.004 12.996 64.8 20.16 64.8H51.84C55.2772 64.8 58.5736 63.4346 61.0041 61.0041C63.4346 58.5736 64.8 55.2772 64.8 51.84V20.16C64.8 12.996 59.004 7.2 51.84 7.2H20.16ZM54.9 12.6C56.0935 12.6 57.2381 13.0741 58.082 13.918C58.9259 14.7619 59.4 15.9065 59.4 17.1C59.4 18.2935 58.9259 19.4381 58.082 20.282C57.2381 21.1259 56.0935 21.6 54.9 21.6C53.7065 21.6 52.5619 21.1259 51.718 20.282C50.8741 19.4381 50.4 18.2935 50.4 17.1C50.4 15.9065 50.8741 14.7619 51.718 13.918C52.5619 13.0741 53.7065 12.6 54.9 12.6ZM36 18C40.7739 18 45.3523 19.8964 48.7279 23.2721C52.1036 26.6477 54 31.2261 54 36C54 40.7739 52.1036 45.3523 48.7279 48.7279C45.3523 52.1036 40.7739 54 36 54C31.2261 54 26.6477 52.1036 23.2721 48.7279C19.8964 45.3523 18 40.7739 18 36C18 31.2261 19.8964 26.6477 23.2721 23.2721C26.6477 19.8964 31.2261 18 36 18ZM36 25.2C33.1357 25.2 30.3886 26.3379 28.3632 28.3632C26.3379 30.3886 25.2 33.1357 25.2 36C25.2 38.8643 26.3379 41.6114 28.3632 43.6368C30.3886 45.6621 33.1357 46.8 36 46.8C38.8643 46.8 41.6114 45.6621 43.6368 43.6368C45.6621 41.6114 46.8 38.8643 46.8 36C46.8 33.1357 45.6621 30.3886 43.6368 28.3632C41.6114 26.3379 38.8643 25.2 36 25.2Z"/>
                </svg>
                <p v-bind:style="categoryStyle" class="text-center text-green fs-1 fw-bold m-0 mx-3 text-lowercase">
                  @{{ category.name }}</p>
              </a>
            </div>
            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center">
              <a href="" class="text-decoration-none d-flex" target="_blank">
                <svg v-bind:style="categoryStyle" width="40" height="40" viewBox="0 0 47 73" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40.2857 59.7273H6.71429V13.2727H40.2857V59.7273ZM40.2857 0H6.71429C2.98786 0 0 2.95318 0 6.63636V66.3636C0 68.1237 0.707396 69.8117 1.96657 71.0563C3.22574 72.3008 4.93355 73 6.71429 73H40.2857C42.0665 73 43.7743 72.3008 45.0334 71.0563C46.2926 69.8117 47 68.1237 47 66.3636V6.63636C47 4.87629 46.2926 3.18831 45.0334 1.94375C43.7743 0.699186 42.0665 0 40.2857 0Z"/>
                </svg>
                <p v-bind:style="categoryStyle" class="text-center text-green text-uppercase fs-1 fw-bold m-0 mx-3">
                  {{ category.cellPhone }}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container justify-content-center align-items-center">
          <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
              <img class="img-fluid" src='/elements/player.svg' width="500" alt="reproductor">
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data: () => ({
    category: {}
  }),
  mounted() {
    this.getData()
  },
  computed: {
    categoryStyle() {
      return this.$store.state.categories.list.find((e => Number(this.$route.params.category_id) === e.id))
    },
  },
  methods: {
    async getData() {

      const projects = this.$store.state.projects.list[this.$route.params.category_id]

      console.log(this.$store.state.projects.list)
      if (!projects) {
        await this.$store.dispatch('projects/getProjectsByCategory', this.$route.params.category_id);
      }
      const projects2 = this.$store.state.projects.list[this.$route.params.category_id]
      console.log('temp')
      console.log(projects)
      this.category = projects2.find((e) => e.id === this.$route.params.project_id)
    },
  }
}
</script>
<style scoped lang="scss">

</style>

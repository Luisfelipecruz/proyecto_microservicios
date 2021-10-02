<template>
  <div>
    <div class="col-12 mt-3">
      <label for="youtubeFormControl" class="form-label text-description">Enlace de YouTube del video descriptivo de su
        emprendimiento:</label>
      <input id="youtubeFormControl" v-model="data.youtube" class="form-control p-3 fs-4" type="text"
             placeholder="Enlace de YouTube del video descriptivo de su emprendimiento">
    </div>
    <div class="col-12 mt-3">
      <label for="driveFormControl" class="form-label text-description">Enlace de Drive u otra plataforma digital con su
        portafolio de servicios o productos (si aplica):</label>
      <input id="driveFormControl" v-model="data.pdf" class="form-control p-3 fs-4" type="text"
             placeholder="Enlace de Drive u otra plataforma digital con su portafolio de servicios o productos (si aplica)">
    </div>
    <div
      class="d-flex flex-column align-items-lg-start align-items-md-start align-items-sm-center align-items-center mt-3">
      <div class="d-flex flex-row form-check align-items-center p-0">
        <form>
          <label class="form-check-label text-description" for="flexCheckData">
            Autorizo el uso de mis datos personales:
          </label>
          <input id="flexCheckData" v-model='data.personalData' class="form-check-input-lg mx-5" type="checkbox" value="true" required>
        </form>
      </div>
    </div>
    <div
      class="d-flex flex-column align-items-lg-start align-items-md-start align-items-sm-center align-items-center mt-3">
      <div class="d-flex flex-row form-check align-items-center p-0">
        <form>
          <label class="form-check-label text-description" for="flexCheckPrivacy">
            He leído y autorizo la política de privacidad:
          </label>
          <input id="flexCheckPrivacy" v-model='data.privacyData' class="form-check-input-lg mx-5" type="checkbox" value="true" required>
        </form>
      </div>
      <section class="mt-4">
        <p class="text-description">Gracias por suministrar los datos y querer hacer parte de la familia de Impulsa UIS,
          pronto nos comunicaremos
          con usted por medio del correo electrónico diligenciado para notificarle si sus datos son validos para ser
          publicados.</p>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StepThree',
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  computed: {
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
  },

}
</script>

<style scoped lang="scss">

::placeholder {
  font-size: 1.5rem;
}

select {
  font-size: 1.5rem;

  option {
    font-size: 1.5rem;
  }
}
</style>

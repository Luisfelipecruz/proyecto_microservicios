<template>
  <div>
    <div class='col-12 my-3'>
      <label for='scheduleFormControl' class='form-label text-description'>Horarios de atención:</label>
      <input id='scheduleFormControl' v-model='data.businessHours' type='text' class='form-control p-3 fs-4'
             placeholder='Horarios de atención'>
    </div>
    <div class='col-12 mt-3'>
      <label for='shortDescriptionFormControl' class='form-label text-description'>Descripción corta o subcategoría a la
        cual pertenece: </label>
      <input id='shortDescriptionFormControl' v-model='data.shortDescription' type='text' class='form-control p-3 fs-4'
             placeholder='Descripción corta o subcategoría a la cual pertenece'>
    </div>
    <div class='col-12 mt-3'>
      <label for='largeDescriptionFormControl' class='form-label text-description'>Descripción del
        emprendimiento/empresa (maximo 800 caracteres).</label>
      <textarea id='largeDescriptionFormControl' v-model='data.description' type='text' class='form-control p-3 fs-4'
                rows='3'></textarea>
    </div>
    <div class='col-12 mt-3'>
      <label for='webFormControl' class='form-label text-description'>Página web (enlace):</label>
      <input id='webFormControl' v-model='data.webPage' type='text' class='form-control p-3 fs-4'
             placeholder='Página web (enlace)'>
    </div>
    <div class='col-12 mt-3'>
      <label for='facebookFormControl' class='form-label text-description'>Redes sociales: Facebook (enlace):</label>
      <input id='facebookFormControl' v-model='data.facebook' type='text' class='form-control p-3 fs-4'
             placeholder='Redes sociales: Facebook (enlace)'>
    </div>
    <div class='col-12 mt-3'>
      <label for='instagramFormControl' class='form-label text-description'>Redes sociales: Instagram (enlace):</label>
      <input id='instagramFormControl' v-model='data.instagram' type='text' class='form-control p-3 fs-4'
             placeholder='Redes sociales: Instagram (enlace)'>
    </div>
    <div class='col-12 mt-3'>
      <label for='twitterControl' class='form-label text-description'>Redes sociales: Twitter (enlace):</label>
      <input id='twitterControl' v-model='data.twitter' type='text' class='form-control p-3 fs-4'
             placeholder='Redes sociales: Twitter (enlace)'>
    </div>
    <div class='col-12 mt-3'>
      <label for='linkedinFormControl' class='form-label text-description'>Redes sociales: Linkedin (enlace)</label>
      <input id='linkedinFormControl' v-model='data.linkedin' type='text' class='form-control p-3 fs-4'
             placeholder='Redes sociales: Linkedin (enlace)'>
    </div>
    <div class='col-12 mt-3'>
      <label for='formFileLogo' class='form-label text-description'>Cargar logo del emprendimiento/empresa: </label>
      <input id='formFileLogo' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'logo')">
    </div>
    <div
      class='col-12 mt-3 d-flex flex-column justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center'>
      <section>
        <p class='text-description'>Cargar imagenes de contenido (6 imagenes):</p>
      </section>
      <div class='mb-3'>
        <label for='formFile1' class='form-label text-description'>Imagen #1:</label>
        <input id='formFile1' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image1')">
        <label for='formFile2' class='form-label text-description'>Imagen #2:</label>
        <input id='formFile2' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image2')">
        <label for='formFile3' class='form-label text-description'>Imagen #3:</label>
        <input id='formFile3' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image3')">
        <label for='formFile4' class='form-label text-description'>Imagen #4:</label>
        <input id='formFile4' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image4')">
        <label for='formFile5' class='form-label text-description'>Imagen #5:</label>
        <input id='formFile5' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image5')">
        <label for='formFile6' class='form-label text-description'>Imagen #6:</label>
        <input id='formFile6' class='form-control form-control-lg' type='file' @input="selectedImg($event, 'image6')">
      </div>
    </div>
  </div>
</template>

<script>
import { Storage } from 'aws-amplify'

import { v4 } from 'uuid'

export default {
  props: ['value'],
  computed: {
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    selectedImg(e, field) {
      const file = e.target.files[0]
      const filename = `${v4()}.${file.name.split('.')[file.name.length - 1]}`
      Storage.put(filename, file, {
        level: 'public'
      }).then((res) => {
        this.data[field] = 'https://impulsa-uploads.s3.amazonaws.com/public/' + res.key
      }).catch((err) => {
        alert(err)
      })
    }
  }
}
</script>

<style scoped lang='scss'>

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

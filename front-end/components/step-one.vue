<template>
  <div>
    <div class='col-12 mt-3'>
      <label for='projectFormControl' class='form-label text-description'>Nombre del emprendimiento/empresa:</label>
      <input id='projectFormControl' v-model='data.name' class='form-control p-3 fs-4' type='text'
             placeholder='Nombre del emprendimiento o empresa' required>
    </div>
    <div class='row my-3 align-items-end'>
      <div class='col-lg-6 col-md-6 col-sm-12 col-12'>
        <label for='nitccFormControl' class='form-label text-description'>NIT o CC del propietario (sin puntos, guiones
          ni dígito de verificación):</label>
        <input id='nitccFormControl' v-model="data.documentType" required class='form-control p-3 fs-4' type='number' placeholder='NIT o CC del propietario'>
      </div>
      <div class='col-lg-6 col-md-6 col-sm-12 col-12'>
        <label for='codeFormControl' class='form-label text-description'>Dígito de verificación (si aplica):</label>
        <input id='codeFormControl' v-model="data.verificationDigit" class='form-control p-3 fs-4' type='number' placeholder='Dígito de verificación'>
      </div>
    </div>
    <div class='col-12 mt-3'>
      <label for='camaraComercioFormSelect' class='form-label text-description'>Se encuentra registrado en la Cámara de
        Comercio:</label>
      <select id='camaraComercioFormSelect' v-model="data.isRegisteredAtCommerce" class='form-select p-3 fs-4' required
              aria-label='Se encuentra registrado en la Cámara de Comercio'>
        <option selected disabled>Seleccione una opcion</option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
    </div>
    <div class='col-12 mt-3'>
      <label for='categoryFormSelect' class='form-label text-description'>Categoría a la cual pertenece:</label>
      <select id='categoryFormSelect' v-model="data.categoryId" class='form-select p-3 fs-4'
              aria-label='Categoría a la cual pertenece' required>
        <option selected>Seleccione una categoria</option>
        <option v-for='(category, i) in categories' :key='i' :value='category.id'>
          {{ category.title }}
        </option>
      </select>
    </div>
    <div class='col-12 mt-3'>
      <label for='constituidForControl' class='form-label text-description'>Años de constituido el
        emprendimiento/empresa:</label>
      <input id='constituidForControl' v-model="data.years" required type='number' class='form-control p-3 fs-4'
             placeholder='Años de constituido el emprendimiento/empresa'>
    </div>
    <div class='col-12 mt-3'>
      <label for='soldFormSelect' class='form-label text-description'>Ha realizado ventas en los últimos dos
        meses:</label>
      <select id='soldFormSelect' v-model="data.hasSales" required class='form-select p-3 fs-4'
              aria-label='Ha realizado ventas en los últimos dos meses'>
        <option selected>Seleccione una opcion</option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
    </div>
    <div class='col-12 mt-3'>
      <label for='stateFormSelect' class='form-label text-description'>Ubicación del lugar de base del
        emprendimiento/empresa (departamento):</label>
      <select id='stateFormSelect' v-model="data.state" required class='form-select p-3 fs-4'
              aria-label='Ubicación del lugar de base del emprendimiento/empresa (departamento)'>
        <option selected disabled>Seleccione un departamento</option>
        <option v-for='(state, i) in states' :key='i' :value='state'>{{ state.departamento }}</option>
      </select>
    </div>
    <div class='col-12 mt-3'>
      <label for='cityFormSelect' class='form-label text-description'>Ubicación del lugar de base del
        emprendimiento/empresa (municipio):</label>
      <select id='cityFormSelect' v-model='data.city' class='form-select p-3 fs-4'
              aria-label='Ubicación del lugar de base del emprendimiento/empresa (municipio)'>
        <option selected disabled>Seleccione un municipio</option>
        <option v-for='(city, i) in data.state.ciudades' :key='i' :value='city'>{{ city }}</option>
      </select>
    </div>
    <div class='col-12 mt-3'>
      <label for='addressFormControl' class='form-label text-description'>Dirección:</label>
      <input id='addressFormControl' v-model="data.address" required class='form-control p-3' type='text' placeholder='Dirección'>
    </div>
    <div class='col-12 mt-3'>
      <label for='phoneContactFormControl' class='form-label text-description'>Teléfono/celular de contacto:</label>
      <input id='phoneContactFormControl' v-model="data.cellPhone" required class='form-control p-3 fs-4' type='number'
             placeholder='Teléfono/celular de contacto'>
    </div>
    <div class='col-12 mt-3'>
      <label for='employeesFormControl' class='form-label text-description'>Número de empleados:</label>
      <input id='employeesFormControl' v-model="data.employeesNumber" required class='form-control p-3 fs-4' type='number' placeholder='Número de empleados'>
    </div>
    <div class='col-12 mt-3'>
      <label for='shipFormSelect' class='form-label text-description'>Realiza envíos nacionales:</label>
      <select id='shipFormSelect' v-model="data.hasDelivery" required class='form-select p-3 fs-4'
              aria-label='Realiza envíos nacionales'>
        <option selected disabled>Seleccione una opcion</option>
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  // eslint-disable-next-line vue/require-prop-types
  props: ['value'],
  data: () => ({
    states: []
  }),
  computed: {
    categories() {
      return this.$store.state.categories.list
    },
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
  },
  mounted() {
    this.getCities()
  },
  methods: {
    async getCities() {
      const { data } = await this.$axios.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
      console.log(data)
      this.states = data
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

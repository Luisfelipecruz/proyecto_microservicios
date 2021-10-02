<template>
  <div>
    <div class="container">
      <section>
        <h1 class="text-center text-yellow text-alegraya text-primary-title">Registro de usuario</h1>
        <p class="text-description">Impulsa UIS busca reconocer a los emprendimientos y empresas creadas por estudiantes
          y egresados de pregrado
          y posgrado de la Universidad Industrial de santander. Esta es una plataforma para la promoción y
          visibilización de sus productos y servicios, cualquier interesado deberá comunicarse directamente con los
          datos de contacto de cada emprendedor.
          <br>
          <strong>Este formulario deberá ser diligenciado completamente.</strong></p>
      </section>
      <form class="row justify-content-center" @submit.prevent='signUp'>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="nameFormControl" class="form-label text-description">Nombres:</label>
          <input id="nameFormControl" v-model="credentials.name" class="form-control p-3 fs-4" type="text"
                 placeholder="Nombres" required>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="lastnameFormControl" class="form-label text-description">Apellidos:</label>
          <input id="lastnameFormControl" v-model="credentials.lastName" class="form-control p-3 fs-4" type="text"
                 placeholder="Apellidos" required>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="selectFormSelect" class="form-label text-description">Tipo de documento de identidad:</label>
          <select id="selectFormSelect" v-model="credentials.documentType" class="form-select p-3 fs-4"
                  aria-label="Documento de identidad">
            <option selected>Seleccione su opcion</option>
            <option value="TI">TI</option>
            <option value="CC">CC</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="documentFormControl" class="form-label text-description">Número de documento de identidad:</label>
          <input id="documentFormControl" v-model="credentials.ccNumber" type="text" class="form-control p-3 fs-4"
                 placeholder="Número de documento de identidad" required>
        </div>
        <div class="col-12 my-3">
          <label for="phoneFormControl" class="form-label text-description">Teléfono de contacto:</label>
          <input id="phoneFormControl" v-model="credentials.celNumber" type="number" class="form-control p-3 fs-4"
                 placeholder="Teléfono de contacto">
        </div>
        <div class="col-12 my-3">
          <label for="relationFormSelect" class="form-label text-description">Relacion con la universidad:</label>
          <select id="relationFormSelect" class="form-select p-3 fs-4">
            <option selected>Seleccione una opcion</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Egresado">Egresado</option>
            <option value="Docente">Docente</option>
            <option value="Directivo">Directivo</option>
          </select>
        </div>
        <div class="col-12 my-3">
          <label for="pregradeSelect" class="form-label text-description">Programa de pregrado al cual pertenece o
            del cual es egresado:</label>
          <select id="pregradeSelect" v-model="credentials.preProgram" class="form-select p-3 fs-4">
            <option selected>Seleccione un programa de pregragrado</option>
            <option v-for='(program, i) in preprogram' :key='i' :value='program.title'>
              {{ program.title }}
            </option>
          </select>
        </div>
        <div class="col-12 my-3">
          <label for="posgradeFormSelect" class="form-label text-description">Programa de posgrado al cual pertenece o
            del cual es egresado:</label>
          <select id="posgradeFormSelect" v-model="credentials.posProgram" class="form-select p-3 fs-4">
            <option selected>Seleccion un programa de posgrado</option>
            <option v-for='(program,i) in posprogram' :key="i" :value="program.title">
              {{ program.title }}
            </option>
          </select>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="userFormControl" class="form-label text-description">Correo electronico:</label>
          <input id="userFormControl" v-model='credentials.email' type='text' class="form-control p-3 fs-4"
                 placeholder='Email' required>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-12 my-3">
          <label for="passwordFormControl" class="form-label text-description">Contraseña</label>
          <input id="passwordFormControl" v-model='credentials.password' type='password' class="form-control p-3 fs-4"
                 placeholder='Contraseña' required>
        </div>
        <div class="d-flex justify-content-center my-3" style="max-width: 250px">
          <button type='submit' class="btn btn-join text-white fw-bold fs-4 text-uppercase px-5 py-3 fs-4">
            Registrar
          </button>
        </div>

      </form>
      <validation-alert v-if='error' color='danger'>
        {{ error.message }}
      </validation-alert>
    </div>
  </div>
</template>

<script>
import {Auth} from 'aws-amplify'

export default {
  name: 'Auth',
  data: () => ({
    error: null,
    credentials: {
      name: null,
      lastName: null,
      documentType: null,
      ccNumber: null,
      celNumber: null,
      email: null,
      password: null,
      uRelation: null,
      preProgram: null,
      posProgram: null
    }
  }),
  async mounted() {
    // const user = await Auth.currentAuthenticatedUser()
    // console.log(user)
  },
  methods: {
    validateInputs() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/
      const res = regex.exec(this.credentials.password)
      console.log('res')
      console.log(res)
    },
    async signUp() {
      this.validateInputs()
      try {
        const {user} = await Auth.signUp({
          username: this.credentials.email,
          password: this.credentials.password,
          'custom:celNumber': this.credentials.celNumber,
          attributes: {
            email: this.credentials.email,
            'custom:name': this.credentials.name,
            'custom:lastName': this.credentials.lastName,
            'custom:documentType': this.credentials.documentType,
            'custom:ccNumber': this.credentials.ccNumber,
            'custom:celNumber': this.credentials.celNumber,
            'custom:uRelation': this.credentials.uRelation,
            'custom:preProgram': this.credentials.preProgram,
            'custom:posProgram': this.credentials.posProgram,
          }
        })
        await this.$router.push('/login')
        console.log(user)
      } catch (error) {
        console.log('error signing up:', error)
        this.error = error
      }
    }
  },
  computed: {
    preprogram() {
      return this.$store.state.preprogram.list
    },
    posprogram() {
      return this.$store.state.posprogram.list
    },
    data: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
  }
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

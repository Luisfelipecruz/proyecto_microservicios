<template>
  <div>
    <article class="container">
      <section>
        <h1 class="text-center text-primary-title text-alegraya text-cyan">Empredimiento destacado</h1>
      </section>
      <section>
        <div class="d-flex justify-content-center my-5">
          <img src="/sections/featured-project-ft.svg" width="200" alt="empredimiento destacado">
        </div>
      </section>
      <section class="mb-5">
        <h5 class="text-center text-black fs-1 fw-bold">{{ featured.descripcion_corta }}</h5>
      </section>
      <div class="container d-flex justify-content-center">
        <div class="row w-75">
          <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
            <svg width="20" height="20" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.5 0C16.5348 0.00700382 10.8159 2.36849 6.59789 6.56645C2.37985 10.7644 0.00706126 16.4561 2.39377e-05 22.3929C-0.00712061 27.2444 1.58521 31.9643 4.53275 35.8286C4.53275 35.8286 5.14638 36.6327 5.24661 36.7487L22.5 57L39.7616 36.7385C39.8516 36.6306 40.4673 35.8286 40.4673 35.8286L40.4693 35.8225C43.4154 31.9599 45.007 27.2422 45 22.3929C44.9929 16.4561 42.6202 10.7644 38.4021 6.56645C34.1841 2.36849 28.4652 0.00700382 22.5 0ZM22.5 30.5357C20.8818 30.5357 19.2999 30.0581 17.9544 29.1634C16.6089 28.2686 15.5603 26.9969 14.941 25.509C14.3217 24.0211 14.1597 22.3838 14.4754 20.8043C14.7911 19.2247 15.5703 17.7738 16.7146 16.635C17.8588 15.4962 19.3167 14.7207 20.9038 14.4065C22.4909 14.0923 24.136 14.2535 25.631 14.8698C27.1261 15.4862 28.4039 16.5298 29.3029 17.8689C30.202 19.208 30.6818 20.7824 30.6818 22.3929C30.6791 24.5517 29.8162 26.6213 28.2824 28.1478C26.7486 29.6743 24.6691 30.533 22.5 30.5357Z"
                fill="#3BB3C3"/>
            </svg>
            <p class="fw-bold fs-1 text-center text-cyan align-self-center px-2 my-0 mx-4 mx-sm-0 mx-md-0 mx-lg-0">
              {{ featured.ciudad }}</p>
          </div>
          <div class="col-12 col-sm-6 d-flex align-items-center justify-content-center">
            <svg width="20" height="20" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50.4111 0.618841C50.124 0.333411 49.7612 0.135791 49.3655 0.0492144C48.9698 -0.0373618 48.5576 -0.00929447 48.1773 0.130117L1.37297 17.1292C0.969318 17.2822 0.6218 17.5541 0.376569 17.909C0.131338 18.2638 0 18.6848 0 19.116C0 19.5472 0.131338 19.9682 0.376569 20.323C0.6218 20.6779 0.969318 20.9499 1.37297 21.1028L19.6479 28.3912L33.1361 14.8769L36.1358 17.873L22.5838 31.4085L29.9023 49.6613C30.06 50.0567 30.3329 50.3957 30.6856 50.6343C31.0384 50.873 31.4548 51.0004 31.8809 51C32.3108 50.9912 32.728 50.8525 33.0774 50.6021C33.4268 50.3518 33.692 50.0015 33.8381 49.5976L50.8579 2.84998C51.0028 2.47403 51.0378 2.06468 50.9587 1.66965C50.8796 1.27462 50.6897 0.910185 50.4111 0.618841Z"
                fill="#3BB3C3"/>
            </svg>
            <p class="fw-bold fs-1 text-center text-cyan align-self-center my-0 mx-4 mx-sm-0 mx-md-0 mx-lg-4">
              {{ featured.envio }}</p>
          </div>
        </div>
      </div>
      <section class="container">
        <p style="text-align: justify" class="fs-1 px-3 mt-5">{{ featured.descripcion_larga }}</p>
      </section>
      <section>
        <div class="container my-5">
          <div class="row">
            <section class="container-fluid category__slider w-100 d-flex align-items-center">
              <div class="col-12 col-sm-6 col-md-6 mb-2 mb-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/1.svg" width="450"
                       alt="emprendimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Matera abstracta nórdico</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/2.svg" width="450"
                       alt="empredimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Materas peques</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/3.svg" width="450"
                       alt="empredimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Recordatorios</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/4.svg" width="450"
                       alt="empredimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Acuarela y lampara</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/5.svg" width="450"
                       alt="empredimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Baby Basquet Zorro</p>
              </div>
              <div class="col-12 col-sm-6 col-md-6 mt-2 mt-sm-0 px-4">
                <picture class="d-flex justify-content-center">
                  <img class="img-fluid rounded-3" src="/sections/featured-project/6.svg" width="450"
                       alt="empredimiento">
                </picture>
                <p class="fs-1 fw-bold text-center mt-4">Baby Basquet Ballena</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <p class="fs-1 fw-bold text-center px-3">Nuestros productos son personalizados y de acuerdo a la temática
          elegida podemos darte un precio por cada uno de ellos. Solo pregunta por el que sea de tu interés.</p>
      </section>
      <section>
        <div class="container">
          <div class="row justify-items-center">
            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
              <a href="http://www.facebook.com/ID3CO" class="d-flex text-decoration-none">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M36 0C16.2 0 0 16.2289 0 36.2169C0 54.2892 13.176 69.2892 30.384 72V46.6988H21.24V36.2169H30.384V28.2289C30.384 19.1566 35.748 14.1687 43.9919 14.1687C47.9159 14.1687 52.0199 14.8554 52.0199 14.8554V23.7831H47.4839C43.0199 23.7831 41.616 26.5663 41.616 29.4217V36.2169H51.6239L50.0039 46.6988H41.616V72C50.0991 70.6549 57.8239 66.3091 63.3957 59.7472C68.9675 53.1853 72.0192 44.8397 71.9999 36.2169C71.9999 16.2289 55.7999 0 36 0Z"
                    fill="#3BB3C3"/>
                </svg>
                <p class="text-center text-cyan text-uppercase fs-1 fw-bold m-0 mx-3">{{ featured.nombre }}</p>
              </a>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-center">
              <a href="http://www.instagram.com/id3co" class="d-flex text-decoration-none">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.88 0H51.12C62.64 0 72 9.36 72 20.88V51.12C72 56.6577 69.8001 61.9686 65.8844 65.8844C61.9686 69.8001 56.6577 72 51.12 72H20.88C9.36 72 0 62.64 0 51.12V20.88C0 15.3423 2.19985 10.0314 6.11561 6.11561C10.0314 2.19985 15.3423 0 20.88 0ZM20.16 7.2C16.7228 7.2 13.4264 8.56542 10.9959 10.9959C8.56542 13.4264 7.2 16.7228 7.2 20.16V51.84C7.2 59.004 12.996 64.8 20.16 64.8H51.84C55.2772 64.8 58.5736 63.4346 61.0041 61.0041C63.4346 58.5736 64.8 55.2772 64.8 51.84V20.16C64.8 12.996 59.004 7.2 51.84 7.2H20.16ZM54.9 12.6C56.0935 12.6 57.2381 13.0741 58.082 13.918C58.9259 14.7619 59.4 15.9065 59.4 17.1C59.4 18.2935 58.9259 19.4381 58.082 20.282C57.2381 21.1259 56.0935 21.6 54.9 21.6C53.7065 21.6 52.5619 21.1259 51.718 20.282C50.8741 19.4381 50.4 18.2935 50.4 17.1C50.4 15.9065 50.8741 14.7619 51.718 13.918C52.5619 13.0741 53.7065 12.6 54.9 12.6ZM36 18C40.7739 18 45.3523 19.8964 48.7279 23.2721C52.1036 26.6477 54 31.2261 54 36C54 40.7739 52.1036 45.3523 48.7279 48.7279C45.3523 52.1036 40.7739 54 36 54C31.2261 54 26.6477 52.1036 23.2721 48.7279C19.8964 45.3523 18 40.7739 18 36C18 31.2261 19.8964 26.6477 23.2721 23.2721C26.6477 19.8964 31.2261 18 36 18ZM36 25.2C33.1357 25.2 30.3886 26.3379 28.3632 28.3632C26.3379 30.3886 25.2 33.1357 25.2 36C25.2 38.8643 26.3379 41.6114 28.3632 43.6368C30.3886 45.6621 33.1357 46.8 36 46.8C38.8643 46.8 41.6114 45.6621 43.6368 43.6368C45.6621 41.6114 46.8 38.8643 46.8 36C46.8 33.1357 45.6621 30.3886 43.6368 28.3632C41.6114 26.3379 38.8643 25.2 36 25.2Z"
                    fill="#3BB3C3"/>
                </svg>
                <p class="text-center text-cyan fs-1 fw-bold m-0 mx-3">@{{ featured.usuario }}</p>
              </a>
            </div>
            <div
              class="col-12 col-sm-4 col-md-4 col-lg-4 my-3 d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center">
              <a href="tel:+573168650648" class="d-flex text-decoration-none">
                <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M67.4865 71.9999C29.097 72.0539 -0.0404578 42.57 4.21681e-05 4.51349C4.21681e-05 2.025 2.01604 0 4.50004 0H16.38C18.6075 0 20.502 1.638 20.8305 3.843C21.614 9.13074 23.1522 14.2787 25.398 19.1295L25.8615 20.1285C26.1729 20.8007 26.2398 21.5606 26.0509 22.2769C25.862 22.9933 25.4289 23.6212 24.8265 24.0525C21.1455 26.6805 19.7415 31.968 22.608 36.09C26.2035 41.265 30.735 45.801 35.91 49.3965C40.0365 52.2584 45.324 50.8544 47.9475 47.178C48.3783 46.5737 49.0068 46.1391 49.7242 45.9493C50.4416 45.7594 51.2027 45.8264 51.876 46.1385L52.8705 46.5975C57.7215 48.8474 62.8695 50.3864 68.157 51.1694C70.362 51.4979 72 53.3924 72 55.6244V67.4999C72 68.0913 71.8835 68.6768 71.657 69.223C71.4306 69.7693 71.0987 70.2656 70.6804 70.6835C70.262 71.1014 69.7654 71.4328 69.219 71.6587C68.6725 71.8846 68.0868 72.0005 67.4955 71.9999H67.4865Z"
                    fill="#3BB3C3"/>
                </svg>
                <p class="text-center text-cyan text-uppercase fs-1 fw-bold m-0 mx-3">{{ featured.telefono }}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container justify-content-center align-items-center">
          <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
              <img class="img-fluid" src="/elements/player.svg" width="500" alt="reproductor">
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  layout: 'default',
  data: () => ({
    featured: {
      nombre: 'id3co',
      usuario: 'id3co',
      telefono: '+57 316 8650648',
      descripcion_corta: 'Decoración para hogar y fiestas',
      ciudad: 'BUCARAMANGA, SANTANDER',
      descripcion_larga: 'Hola somos Id3co, nos dedicamos a elaborar productos que darán un toque de estilo y creatividad en los espacios de tu hogar como oficina rincón green, rincón de lectura y espacios infantiles. Tenemos ilustraciones, materas, kits de celebración, artículos deco infantil; además podrás encontrar anchetas de regalo que harán más fácil la experiencia de dar un detalle especial a los que más quieres. Para celebrar tenemos kits temáticos para todas las fechas especiales, cumpleaños, navidad, etc. Tenemos envíos a todo el país, despachamos desde Medellín, Bucaramanga, y Cartagena. Te invitamos a seguirnos y a conocer todos nuestros productos.',
      envio: 'ENVÍOS NACIONALES'
    }
  })
}
</script>

<style scoped lang="scss">
.category__slider {
  overflow-x: auto;
  overscroll-behavior-x: auto;
  scroll-snap-type: x proximity;
  overflow-y: hidden;
}

.category__slider::-webkit-scrollbar {
  -webkit-appearance: none;
}

.category__slider::-webkit-scrollbar:vertical {
  width: 10px;
}

.category__slider::-webkit-scrollbar-button:increment, .contenedor::-webkit-scrollbar-button {
  display: none;
}

.category__slider::-webkit-scrollbar:horizontal {
  height: 10px;
}

.category__slider::-webkit-scrollbar-thumb {
  background-color: #797979;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}

.category__slider::-webkit-scrollbar-track {
  border-radius: 10px;
}
</style>

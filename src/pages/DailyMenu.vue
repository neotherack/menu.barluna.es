<template>
  <q-page class="flex flex-center column text-center">
    <div class="q-ma-sm col-11 text-h3 text-weight-medium">Menú del día</div>
    <div class="q-ma-sm col-11 text-h3 text-weight-medium text-italic">Daily Meal</div>

    <div class="q-pa-md my-card">
      <q-card class="my-card">
        <q-parallax
          src="https://menu.barluna.es/images/ensaladas_mixta.png"
          :height="200"
        />
        <q-card-section>
          <div class="text-h6 text-blue text-left">Un primer plato, a elegir</div>
          <div class="text-h6 text-left">Choose one starter</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md my-card">
      <q-card class="my-card">
        <q-parallax
          src="https://menu.barluna.es/images/raciones_carrilleras_salsa.png"
          :height="200"
        />
        <q-card-section>
          <div class="text-h6 text-blue text-left">Un segundo plato</div>
          <div class="text-h6 text-left">Choose main dish</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md my-card">
      <q-card class="my-card">
        <q-parallax
          src="https://menu.barluna.es/images/bebidas_vinomesa.png"
          :height="200"
        />
        <q-card-section>
          <div class="text-h6 text-blue text-left">Incluye bebida: vino o agua</div>
          <div class="text-h6 text-left">Drink included: table wine or water</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md my-card">
      <q-card class="my-card">
        <q-parallax
          src="https://menu.barluna.es/images/postres_fruta.png"
          :height="200"
        />
        <q-card-section>
          <div class="text-h6 text-blue text-left">Postre o café, a elegir</div>
          <div class="text-h6 text-left">Choose: dessert or coffee</div>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'DailyMenu',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>

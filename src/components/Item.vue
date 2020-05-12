<template>
  <q-card class="col-11 col-md-5 q-ma-sm" vertical>
    <q-card-section horizontal >
      <q-img
        class="col-5"
        :src="imageurl"
        @click="maximize = true"
        basic
      />
      <q-dialog v-model="maximize" v-if="image != 'no-image.png'" :fullWidth="false" :fullHeight="true">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <q-btn icon="close" flat round dense v-close-popup />
            <q-space />
            <div class="text-h6 text-right col">{{ cost }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2 text-blue text-left">{{ title }}</div>
            <div class="text-subtitle2 text-left">{{ caption }}</div>
            <AllergenIcon
              v-for="allergen in allergens"
              :key="allergen.name"
              v-bind:name="allergen.name"
            />
          </q-card-section>
          <q-card-section>
            <q-img class="col-6" :src="imageurl" @click="maximize = false" width="500px" basic />
          </q-card-section>
      </q-card>
      </q-dialog>
      <q-card-section vertical class="col">
        <q-card-section vertical>
          <div class="text-h4 text-center col">{{ cost }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section vertical class="col">
          <AllergenIcon
            v-for="allergen in allergens"
            :key="allergen.name"
            v-bind:name="allergen.name"
          />
        </q-card-section>
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-section vertical>
      <div class="text-h6 text-weight-bold text-blue text-left">{{ title }}</div>
      <q-separator class="q-my-sm"/>
      <div class="text-h6 text-weight-medium text-left">{{ caption }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import AllergenIcon from 'components/AllergenIcon'

export default {
  name: 'Item',
  components: { AllergenIcon },
  data () {
    return {
      maximize: false
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },

    caption: {
      type: String,
      default: '',
      required: false
    },

    image: {
      type: String,
      default: '',
      required: false
    },

    cost: {
      type: String,
      default: '',
      required: false
    },
    allergens: {
      type: Array,
      required: false
    }
  },
  computed: {
    imageurl: function () {
      return 'https://menu.barluna.es/images/' + this.image
    }
  }
}
</script>

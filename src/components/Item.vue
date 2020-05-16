<template>
  <q-card class="col-11 col-md-5 q-ma-sm" vertical>
    <q-card-section horizontal >
      <q-img
        class="col-6"
        :src="imageurl"
        @click="maximize = true"
        basic
      />
      <q-dialog v-model="maximize" :full-width="$q.screen.lt.sm" v-if="image != 'no-image.png'">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <q-btn icon="close" flat round dense v-close-popup />
            <q-space />
            <Flag
                v-for="flag in flags"
                :key="flag.name"
                v-bind:name="flag.name"
              />
            <div class="text-h5 text-right col">{{ cost }}</div>
          </q-card-section>
          <q-space />
          <q-card-section>
            <div class="text-h6 text-blue text-left">{{ title }}</div>
            <div class="text-h6 text-left">{{ caption }}</div>
            <q-card-section vertical class="col">
              <AllergenIcon
              v-for="allergen in allergens"
              :key="allergen.name"
              v-bind:name="allergen.name"
              />
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-img v-if="$q.screen.lt.sm" :src="imageurl" @click="maximize = false" basic />
            <q-img v-if="!$q.screen.lt.sm" :src="imageurl" @click="maximize = false" width="500px" basic />
          </q-card-section>
      </q-card>
      </q-dialog>
      <q-card-section vertical class="col">
        <q-card-section vertical>
          <Flag
            v-for="flag in flags"
            :key="flag.name"
            v-bind:name="flag.name"
          />
        </q-card-section>
        <q-separator v-if="flags && flags.length >0" />
        <q-card-section vertical>
          <div class="text-h4 text-center col">{{ cost }}</div>
        </q-card-section>
        <q-separator v-if="allergens && allergens.length >0"/>
        <q-card-section vertical class="col">
          <AllergenIcon
            v-for="allergen in allergens"
            :key="allergen.name"
            v-bind:name="allergen.name"
          />
        </q-card-section>
      </q-card-section>
    </q-card-section>
    <q-space />
    <q-card-section vertical>
      <div class="text-h6 text-weight-bold text-blue text-left">{{ title }}</div>
      <q-separator class="q-my-sm"/>
      <div class="text-h6 text-weight-medium text-left">{{ caption }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import AllergenIcon from 'components/AllergenIcon'
import Flag from 'components/Flag'

export default {
  name: 'Item',
  components: { AllergenIcon, Flag },
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
    },
    flags: {
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

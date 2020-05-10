<template>
  <q-card class="col-11 col-md-5 q-ma-sm" vertical>
    <q-card-section horizontal >
      <q-img
        class="pic"
        :src="imageurl"
        basic
      />
      <q-card-section vertical class="col">
        <q-card-section vertical>
          <div class="text-h4 text-center col">{{ cost }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section vertical class="col">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-section>
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-section vertical>
      <div class="text-h6 text-weight-medium text-left">{{ title }}</div>
      <q-separator />
      <div class="text-h6 text-weight-medium text-italic text-left">{{ caption }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Item',
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
    }
  },
  computed: {
    imageurl: function () {
      return 'https://menu.barluna.es/images/' + this.image
    }
  }
}
</script>

<!-- Using CSS modules -->
<style scoped>
.pic {
  width: 220px;
  height: 200px;
}
</style>

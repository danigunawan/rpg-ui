<template>
  <div class="container">
    <div id="header" class="text-left">
      <b-button
        :to='{ name: "MapsNew" }'
        variant='primary'
      >
        Create
      </b-button>
    </div>
    <MapsList/>
  </div>
</template>

<script>
import MapsList from '@/components/maps/List.vue'

export default {
  name: 'MapList',
  components: {
    MapsList
  }
}
</script>

<style scoped>
#header {
  padding-bottom: 15px;
}
</style>

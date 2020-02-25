<template>
  <div class="container">
    <div id="header" class="text-left">
      <b-button
        :to='{ name: "CharacterNew" }'
        variant='primary'
      >
        Create
      </b-button>
    </div>
    <CharactersList/>
  </div>
</template>

<script>
import CharactersList from '@/components/characters/List.vue'

export default {
  name: 'CharacterList',
  components: {
    CharactersList
  }
}
</script>

<style scoped>
#header {
  padding-bottom: 15px;
}
</style>

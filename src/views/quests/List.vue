<template>
  <div class="container">
    <div id="header" class="text-left">
      <b-button
        :to='{ name: "QuestsNew" }'
        variant='primary'
      >
        Create
      </b-button>
    </div>
    <QuestsList/>
  </div>
</template>

<script>
import QuestsList from '@/components/quests/List.vue'

export default {
  name: 'QuestList',
  components: {
    QuestsList
  }
}
</script>

<style scoped>
#header {
  padding-bottom: 15px;
}
</style>

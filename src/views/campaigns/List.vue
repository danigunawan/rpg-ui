<template>
  <div class="container">
    <div id="header" class="text-left">
      <b-button
        :to='{ name: "CampaignsNew" }'
        variant='primary'
      >
        Create
      </b-button>
    </div>
    <CampaignsList/>
  </div>
</template>

<script>
import CampaignsList from '@/components/campaigns/List.vue'

export default {
  name: 'CampaignList',
  components: {
    CampaignsList
  }
}
</script>

<style scoped>
#header {
  padding-bottom: 15px;
}
</style>

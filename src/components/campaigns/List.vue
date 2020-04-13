<template>
  <b-table-lite striped hover
    head-variant="dark"
    :items="campaigns"
    :fields="fields"
    @row-clicked="rowClickedHandler"
  >
    <template v-slot:cell(modify)="row">
      <b-button variant="danger" @click="deleteCampaign(row.item)" class="mr-1 btn-delete">
        Delete
      </b-button>
      <b-button variant="primary" @click="editCampaign(row.item)" class="mr-1 btn-edit">
        Edit
      </b-button>
    </template>
  </b-table-lite>
</template>

<script>
export default {
  name: 'CampaignsShow',
  data () {
    return {
      message: 'Campaigns',
      campaigns: [],
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'modify', label: '' }
      ]
    }
  },

  mounted: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      this.axios.get("/v1/campaigns")
      //this.axios.get('http://localhost:8080/json/campaigns.json')
        .then(response => {
          this.campaigns = response.data["campaigns"]
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    rowClickedHandler (record) {
      console.log(record['id'])
      this.$router.push({ name: 'CampaignsEdit', params: { id: record['id'] } })
    },
    deleteCampaign: function (record) {
      this.axios.delete('/v1/campaigns/' + record['id'])
        .catch(error => {
          console.log(error)
        })

      for (var i = 0; i < this.campaigns.length; i++) {
        if (this.campaigns[i]['id'] === record['id']) {
          this.campaigns.splice(i, 1)
          console.log('Removed campaign: ' + record['name'])
        }
      }
    },
    editCampaign: function (record) {
      this.$router.push({ name: 'CampaignsEdit', params: { id: record['id'] } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  text-align: left;
}

.btn {
  margin-bottom: 1rem;
}

.btn-delete {
  float: right;
}

.btn-edit {
  float: right;
}
</style>

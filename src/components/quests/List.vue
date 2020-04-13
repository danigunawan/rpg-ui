<template>
  <b-table-lite striped hover
    head-variant="dark"
    :items="quests"
    :fields="fields"
    @row-clicked="rowClickedHandler"
  >
    <template v-slot:cell(modify)="row">
      <b-button variant="danger" @click="deletequest(row.item)" class="mr-1 btn-delete">
        Delete
      </b-button>
      <b-button variant="primary" @click="editquest(row.item)" class="mr-1 btn-edit">
        Edit
      </b-button>
    </template>
  </b-table-lite>
</template>

<script>
export default {
  name: 'QuestsList',
  data () {
    return {
      id: '',
      quests: [],
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
      this.axios.get("/v1/quests/" + this.$route.params.id)
      //this.axios.get('http://localhost:8080/json/quests.json')
        .then(response => {
          this.quests = response.data["quests"]
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$store.state.campaign_id = this.$route.params.id
    },
    rowClickedHandler (record) {
      console.log(record['id'])
    this.$router.push({ name: 'QuestsEdit', params: { id: record['id'] } })
    },
    deletequest: function (record) {
      this.axios.delete('/v1/quests/' + record['id'])
        .catch(error => {
          console.log(error)
        })

      for (var i = 0; i < this.quests.length; i++) {
        if (this.quests[i]['id'] === record['id']) {
          this.quests.splice(i, 1)
          console.log('Removed quest: ' + record['name'])
        }
      }
    },
    editquest: function (record) {
      this.$router.push({ name: 'QuestsEdit', params: { id: record['id'] } })
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

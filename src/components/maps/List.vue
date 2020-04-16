<template>
  <b-table-lite striped hover
    head-variant="dark"
    :items="maps"
    :fields="fields"
    @row-clicked="rowClickedHandler"
  >
    <template v-slot:cell(modify)="row">
      <b-button variant="danger" @click="deletemap(row.item)" class="mr-1 btn-delete">
        Delete
      </b-button>
      <b-button variant="primary" @click="editmap(row.item)" class="mr-1 btn-edit">
        Edit
      </b-button>
    </template>
  </b-table-lite>
</template>

<script>
export default {
  name: 'MapsList',
  data () {
    return {
      id: '',
      maps: [],
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
      this.axios.get("/v1/maps/" + this.$route.params.id)
      //this.axios.get('http://localhost:8080/json/maps.json')
        .then(response => {
          this.maps = response.data["maps"]
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$store.state.quest_id = this.$route.params.id
    },
    rowClickedHandler (record) {
      console.log(record['id'])
      this.$router.push({ name: 'MapsEdit', params: { id: record['id'] } })
    },
    deletemap: function (record) {
      this.axios.delete('/v1/maps/' + record['id'])
        .catch(error => {
          console.log(error)
        })

      for (var i = 0; i < this.maps.length; i++) {
        if (this.maps[i]['id'] === record['id']) {
          this.maps.splice(i, 1)
          console.log('Removed map: ' + record['name'])
        }
      }
    },
    editmap: function (record) {
      this.$router.push({ name: 'MapsEdit', params: { id: record['id'] } })
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

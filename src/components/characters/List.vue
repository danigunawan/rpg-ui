<template>
  <b-table-lite striped hover
    head-variant="dark"
    :items="characters"
    :fields="fields"
    @row-clicked="rowClickedHandler"
  >
    <template v-slot:cell(delete)="row">
      <b-button variant="danger" @click="deleteCharacter(row.item)" class="mr-1 btn-delete">
        Delete
      </b-button>
    </template>
  </b-table-lite>
</template>

<script>
export default {
  name: 'CharactersShow',
  data () {
    return {
      message: 'Characters',
      characters: [],
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'delete', label: '' }
      ]
    }
  },

  mounted: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      this.axios.get("/v1/characters")
      //this.axios.get('http://localhost:8080/json/characters.json')
        .then(response => {
          this.characters = response.data["characters"]
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    rowClickedHandler (record) {
      console.log(record['id'])
      this.$router.push({ name: 'CharacterEdit', params: { id: record['id'] } })
    },
    deleteCharacter: function (record) {
      this.axios.delete('/v1/characters/' + record['id'])
        .catch(error => {
          console.log(error)
        })

      for (var i = 0; i < this.characters.length; i++) {
        if (this.characters[i]['id'] === record['id']) {
          this.characters.splice(i, 1)
          console.log('Removed character: ' + record['name'])
        }
      }
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
</style>

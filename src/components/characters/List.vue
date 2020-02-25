<template>
  <b-table-lite striped hover
    head-variant="dark"
    :items="characters"
    :fields="fields"
    @row-clicked="rowClickedHandler"
  >
    <template v-slot:cell(Delete)="row">
      <b-button variant="danger" @click="deleteCharacter(row.item)" class="mr-1">
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
        { key: 'Name', label: 'Name' },
        { key: 'Description', label: 'Description' },
        { key: 'Delete', label: '' }
      ]
    }
  },

  mounted: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      this.axios.get('/json/characters.json')
        .then((response) => {
          this.characters = response.data
        })
        .catch(function (error) {
          console.log(error)
        })

      this.axios.get('/json/flash.json')
        .then((response) => {
          
        })
    },
    rowClickedHandler (record) {
      console.log(record['ID'])
      this.$router.push({ name: 'CharacterEdit', params: { id: record['ID'] } })
    },
    deleteCharacter: function (record) {
      /*this.axios.delete('/json/delete.json', {
        params: { 'id': record['ID'] }
      })*/

      for (var i = 0; i < this.characters.length; i++) {
        if (this.characters[i]['ID'] === record['ID']) {
          this.characters.splice(i, 1)
          console.log('Removed character: ' + record['Name'])
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
</style>

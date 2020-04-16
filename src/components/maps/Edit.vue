<template>
  <b-container fluid>
    <b-row class="form-row">
      <b-col sm="12">
        <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
          {{ name  }} updated!
        </b-alert>
      </b-col>
    </b-row>
    <b-row class="form-row">
      <b-col sm="3">
        <label>Name:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input lazy v-model="name"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="form-row">
      <b-col sm="3">
        <label>Description:</label>
      </b-col>
      <b-col sm="9">
        <b-form-textarea v-model="description"></b-form-textarea>
      </b-col>
    </b-row>
    <b-row class="form-create-row">
      <b-col sm="12">
        <b-button variant="success" @click="submitData">Update</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'MapsEdit',
  data () {
    return {
      id: '',
      name: '',
      description: '',
      show: false,
    }
  },

  created: function () {
    this.fetchData()
  },

  methods: {
    submitData: function() {
      this.axios.put('/v1/maps/' + this.id, {
        id: this.id,
        name: this.name,
        description: this.description
      })
        .then(response => {
          this.show = !this.show
          this.id = response.data['id']
          this.name = response.data["name"]
          this.description = response.data["description"]
        })
        .catch(error => {
          console.log(error)
        })
    },
    dismissed: function () {
      console.log('Alert dismissed')
    },
    fetchData: function () {
      this.axios.get('/v1/maps/show/' + this.$route.params.id)
        .then((response) => {
          this.id = response.data['id']
          this.name = response.data["name"]
          this.description = response.data["description"]
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  }
}
</script>

<style scoped>
.form-row {
  padding: 15px;
}

.form-row div {
  text-align: left;
}

.form-create-row {
  padding: 15px;
}

.form-create-row div {
  text-align: right;
}
</style>

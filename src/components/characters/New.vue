<template>
  <b-container fluid>
    <b-row class="form-row">
      <b-col sm="12">
        <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
          {{ name  }} created!
        </b-alert>
      </b-col>
    </b-row>
    <b-row class="form-row">
      <b-col sm="3">
        <label>Name:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="name"></b-form-input>
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
        <b-button variant="success" @click="submitData">Create</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      show: false
    }
  },

  methods: {
    submitData: function() {
      this.show = !this.show
    },
    dismissed: function () {
      console.log("Alert dismissed")
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

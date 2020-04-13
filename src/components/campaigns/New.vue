<template>
  <b-container fluid>
    <div v-if="errors">
      <ul>
        <li v-for="error in errors" :key="error.id"><span class="errors">{{ error }}</span></li>
      </ul>
    </div>
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
      show: false,
      errors: ''
    }
  },

  methods: {
    submitData: function() {
      this.axios.post("/v1/campaigns/new", {
        name: this.name,
        description: this.description
      })
      .then(response => {
        console.log(response.data["message"])
        this.$router.push({ name: "CampaignList" })
      })
      .catch(error => {
        this.errors = error.response.data["error"].split('\n')
      })
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

<template>
  <v-container>
    <div style="margin-bottom: 1em" class="text-center display-2">~ Contact us ~</div>
    <div class="form">
      <v-form>
        <v-text-field label="Name" outlined/>
        <v-text-field label="Email" outlined/>
        <v-text-field label="Subject" outlined/>
        <v-textarea label="Body" outlined/>
        <v-btn color="primary">Send</v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style scoped>
  .form {
    border-left: 2px solid #bf1e1e;
    padding-left: 20px;
    margin-bottom: 50%;
  }
</style>

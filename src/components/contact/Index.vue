<template>
  <v-container>
    <v-card color="#FFF2CF" style="padding: 25px">
      <div style="margin-bottom: 1em" class="text-center display-2">~ Contact Me ~</div>
      <v-form>
        <v-text-field label="Name" outlined/>
        <v-text-field label="Email" outlined/>
        <v-text-field label="Subject" outlined/>
        <v-textarea label="Body" outlined/>
        <v-btn color="primary">Send</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style scoped>

</style>

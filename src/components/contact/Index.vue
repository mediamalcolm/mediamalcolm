<template>
  <v-container>
    <div style="margin-bottom: 1em" class="text-center display-2">~ Contact us ~</div>
    <div class="form">
      <v-form>
        <v-text-field label="Name" outlined/>
        <v-text-field label="Email" outlined/>
        <v-text-field label="Subject" outlined/>
        <v-textarea label="Body" outlined/>
        <v-btn color="primary" href="mailto:mediamalcolm.outlook.com" @click="handleSend" :loading="loading" :disabled="sent">
          {{sent ? 'Sent' : 'Send'}}
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
    data: () => ({
      sent: false,
      loading: false,
    }),
    methods: {
      handleSend() {
        this.loading = true;
        this.sent = true;
        setTimeout(() => (
          this.loading = false
        ), 3000);

        this.loader = null
      },
    },
  }
</script>
      },
    }
  }
</script>

<style scoped>
  .form {
    border-left: 2px solid #bf1e1e;
    padding-left: 20px;
    margin-bottom: 50%;
  }
</style>

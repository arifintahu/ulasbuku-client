<template>
  <v-container>

    <v-row justify="space-around">
      <v-col lg="10" sm="12">
        <WriteSheet></WriteSheet>
      </v-col>
    </v-row>
    <WriteBottom></WriteBottom>
      
  </v-container>
</template>

<script>
// @ is an alias to /src
import WriteSheet from '@/components/WriteSheet.vue';
import WriteBottom from '@/components/WriteBottom.vue';


export default {
  name: 'Review',
  components: {
    WriteSheet,
    WriteBottom
  }
}
</script>

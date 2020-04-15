<template>
  <v-container>
    <v-row justify="space-around">
      <v-col lg="10" sm="12">
        <ReviewPost :content="content"></ReviewPost>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ReviewPost from '@/components/ReviewPost.vue';

export default {
  name: 'Review',
  props: ['content'],
  components: {
    ReviewPost
  }
}
</script>
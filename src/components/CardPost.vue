<template>
 <v-card
    max-width="100%"
    class="mx-auto my-4"
  >

    <v-img
      v-if="image"
      :src="content.imageSrc"
      height="300"
    ></v-img>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title mb-0">{{content.title}}</v-list-item-title>
        <v-list-item-subtitle class="caption">
            <v-list-item-avatar size="24" class="mr-1" color="grey">
               <v-img :src="avatar"></v-img>
            </v-list-item-avatar>
            {{content.writer}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text class="py-0" v-if="image == 'true'">{{content.body.slice(0,70)}}...</v-card-text>
    <v-card-text class="py-0" v-if="image == null">{{content.body.slice(0,256)}}...</v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="primary"
        :to="{ name: 'Review', params: { title: content.name, content: content }}"
      >
        Baca
      </v-btn>
      <v-btn
        text
        color="primary"
      >
        Simpan
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
  	props: ['image', 'avatar', 'content'],
    data: () => ({

    }),
  }
</script>

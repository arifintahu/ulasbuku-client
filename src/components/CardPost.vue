<template>
 <v-card
    max-width="100%"
    class="mx-auto my-4"
  >

    <v-img
      v-if="image"
      :src="imageSrc"
      height="300"
    ></v-img>

    <v-list-item>
      <v-list-item-avatar>
         <v-img :src="avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="content.title" class="title"></v-list-item-title>
        <v-list-item-subtitle class="caption">Dari Buku {{content.book}}</v-list-item-subtitle>
        <v-list-item-subtitle class="caption">Pengulas {{content.writer}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="body-1" v-html="content.body"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Baca
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
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
  	props: ['image', 'avatar', 'imageSrc', 'content'],
    data: () => ({

    }),
  }
</script>

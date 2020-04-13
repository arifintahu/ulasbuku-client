<template>
  <v-container>
    
    <div class="title">Popular Reviews</div>
    <div v-for="(item, index) in items" :key=index>
      <div class="my-4">
        <div class="body-2">{{item.title}}</div>
        <div class="caption">{{item.subtitle}}</div>
      </div>
    </div>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items : [
        { 
          title : "Ulasan Buku Why A Students Work for C Students : Financial Education for Financial Freedom",
          subtitle : "Miftahul Arifin"
        },
        { 
          title : "Ulasan Buku Menjadi Ayah Pendidik Peradaban : The Good Father",
          subtitle : "Miftahul Arifin"
        },
        { 
          title : "Ulasan Buku “The Mind Map Book : How to Use Your Brain",
          subtitle : "Miftahul Arifin"
        }
      ]
    }),
  }
</script>

<template>
  <v-container>

    <div v-for="(item, index) in items" :key="index">
      <div class="title">{{item.category}}</div>
      <div v-for="(list, index2) in item.lists" :key="index2">
        <div class="my-4">
          <div class="body-2">{{list.title}}</div>
          <div class="caption">Pengulas {{list.writer}}</div>
        </div>
      </div>
      <v-divider class="my-4"></v-divider>
    </div>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items : [
        {
          category  : "Bisnis dan Ekonomi",
          lists     : [
            { 
              title : "Financial Education for Financial Freedom",
              writer : "Miftahul Arifin"
            },
            { 
              title : "Globalisasi, Saatnya Masyarakat Indonesia Mengglobal",
              writer : "Miftahul Arifin"
            },
            { 
              title : "Peganglah Kendali Untuk Menghadapi Platform Economy",
              writer : "Miftahul Arifin"
            }
          ]
        },
        {
          category  : "Islami",
          lists     : [
            { 
              title : "Al-Qur’an sebagai Cerminan Diri",
              writer : "Miftahul Arifin"
            },
            { 
              title : "Tantangan Rasionalitas dalam Dunia Islam Masa Kini",
              writer : "Miftahul Arifin"
            },
            { 
              title : "Sebuah Transformasi Pertumbuhan dan Kesejahteraan Negara-Negara OKI",
              writer : "Miftahul Arifin"
            }
          ]
        },
        {
          category  : "Motivasi",
          lists     : [
            { 
              title : "Meraih Kekayaan Hakiki",
              writer : "Miftahul Arifin"
            }
          ]
        },
        {
          category  : "Pengembangan Diri",
          lists     : [
            { 
              title : "The Good Father",
              writer : "Miftahul Arifin"
            },
            { 
              title : "How to Use Your Brain",
              writer : "Miftahul Arifin"
            },
            { 
              title : "Kreativitas Milik Semua Orang",
              writer : "Miftahul Arifin"
            }
          ]
        }
      ]
    }),
  }
</script>

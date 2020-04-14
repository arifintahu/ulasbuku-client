<template>
  <v-container>

    <div class="title">New Reviews</div>
    <CardPost v-for="(item, index) in items" :imageSrc="item.imageSrc" :content="item.content" :key="index" :avatar="item.avatar"></CardPost>

  </v-container>
</template>

<script>
  import CardPost from '@/components/CardPost.vue'

  export default {
    components: {
      CardPost
    },
    data: () => ({
      items : [
        {
          imageSrc  : "https://1.bp.blogspot.com/-Xws1hzF69rw/XZn1WBPdaxI/AAAAAAAAAIY/x42aJCAzh3che0_iwuDZCFC-zIWqiG1RQCLcBGAsYHQ/s640/Orhan%2BPamuk%2BIstanbul.jpeg",
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "Memories and The City",
            book    : "Istanbul",
            writer  : "Miftahul Arifin",
            body    : "Orhan Pamuk seorang sastrawan turki dan juga peraih nobel sastra."
          }
        },
        {
          imageSrc  : "https://1.bp.blogspot.com/-zR_RjuRWhvI/XYdQWeqtX5I/AAAAAAAAB5w/jW_2W-eVBK0Il2Z728Aq2S-SAY9sIFcawCLcBGAsYHQ/s640/why%2Ba%2Bstudent.jpeg",
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "Financial Education for Financial Freedom",
            book    : "Why A Students Work for C Students",
            writer  : "Miftahul Arifin",
            body    : "Buku karya Robert Kiyosaki ini mengupas tetang pentingnya pendidikan keuangan sebagai bekal untuk menghadapi masa depan."
          }
        },
        {
          imageSrc  : "https://1.bp.blogspot.com/-nz5p2jELIY4/XXZbSgNwCYI/AAAAAAAAAII/g5A3ZqFCiVQjhoWNfzs5LOF8sTQpWLMqACLcBGAs/s640/menjadi%2Bayah%2Bjpg.jpg",
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "The Good Father",
            book    : "Menjadi Ayah Pendidik Peradaban",
            writer  : "Miftahul Arifin",
            body    : "Riset tentang pendidikan keluarga di Indonesia masih sedikit. Artinya, pendidikan keluarga belum menjadi hal yang cukup dipentingkan untuk dibahas, padahal keluarga adalah suatu bagian terpenting dalam membangun manusia juga dalam membangun suatu negara."
          }
        },
        {
          imageSrc  : "https://1.bp.blogspot.com/-zXRWoxmYDBU/XXZbHSMKx0I/AAAAAAAAAIE/kSsgr9h2bhoixlXMeYMnzeTrODd-qRx0gCLcBGAs/s640/the%2Bmind%2Bmap%2Bjpg.jpg",
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "How to Use Your Brain",
            book    : "The Mind Map Book",
            writer  : "Miftahul Arifin",
            body    : "The Mind Map Book merupakan buku karangan Tony Buzan yang memaparkan konsep cara berpikir menggunakan sebuah perangkat yang disebut “Mind Map”."
          }
        },
      ]
    }),
  }
</script>

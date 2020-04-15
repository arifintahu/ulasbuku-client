<template>
  <v-container>

    <div class="title">Ulasan Terbaru</div>
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
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "Memories and The City",
            book    : "Istanbul",
            writer  : "Miftahul Arifin",
            name    : "istanbul",
            imageSrc  : "https://1.bp.blogspot.com/-Xws1hzF69rw/XZn1WBPdaxI/AAAAAAAAAIY/x42aJCAzh3che0_iwuDZCFC-zIWqiG1RQCLcBGAsYHQ/s640/Orhan%2BPamuk%2BIstanbul.jpeg",
            body    : "Orhan Pamuk seorang sastrawan turki dan juga peraih nobel sastra. Dalam berbagai karya novelnya, ia sangat lihai mengisahkan kota kelahirannya, Istanbul. Ia lahir setelah revolusi Turki yakni pada tahun 1952. Di masa kecilnya, ia banyak mengamati tetang kondisi kota kelahirannya yang berubah drastis paska revolusi. Orhan Pamuk memiliki keterikatan yang sangat kuat dengan Istanbul, dibuktikan dengan banyaknya literatur sejarah yang ia pelajari melalui perpustakaan pribadinya.\n \n Orhan Pamuk ialah seorang novelis yang memiliki keterikatan kuat pada kota kelahirannya. Novel-novelnya menceritakan dilema yang dialami oleh bangsa Turki paska revolusi. Ia terlahir dari keluarga yang sangat mapan. Kecintaannya terhadap buku dan keterikatan kuat terhadap Istanbul membuatnya banyak menceritakan tentang bangsa Turki dalam karya novel-novelnya."
          }
        },
        {
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "Financial Education for Financial Freedom",
            book    : "Why A Students Work for C Students",
            writer  : "Miftahul Arifin",
            name    : "financial-education",
            imageSrc  : "https://1.bp.blogspot.com/-zR_RjuRWhvI/XYdQWeqtX5I/AAAAAAAAB5w/jW_2W-eVBK0Il2Z728Aq2S-SAY9sIFcawCLcBGAsYHQ/s640/why%2Ba%2Bstudent.jpeg",
            body    : "Buku karya Robert Kiyosaki ini mengupas tetang pentingnya pendidikan keuangan sebagai bekal untuk menghadapi masa depan. Pendidikan keuangan umumnya tidak diajari di sekolah-sekolah, sementara pendidikan keuangan sangat diperlukan untuk mengetahui bagaimana membuat uang bekerja pada kita, bukannya kita bekerja untuk uang. \n \n Kita tidak sedang mengalami krisis keuangan, tetapi kita mengalami krisis pendidikan keuangan. Semua ini bermula ketika seorang anak masuk sekolah, kemudian menghabiskan waktu tahun demi tahun namun tidak mempelajari apapun soal uang. Sistem pendidikan saat ini lebih banyak mempelajari bagaimana mencari pekerjaan daripada bagaimana membuka lapangan pekerjaan baru."
          }
        },
        {
          avatar    : "https://1.bp.blogspot.com/-yiVYUgphfg4/XNvkN5F8IvI/AAAAAAAABzs/Tj9cf06SEVQpipetIfWfwK0hJeYMz3_UwCK4BGAYYCw/s113/9077305074378.jpg",
          content   : {
            title   : "The Good Father",
            book    : "Menjadi Ayah Pendidik Peradaban",
            writer  : "Miftahul Arifin",
            name    : "the-good-father",
            imageSrc  : "https://1.bp.blogspot.com/-nz5p2jELIY4/XXZbSgNwCYI/AAAAAAAAAII/g5A3ZqFCiVQjhoWNfzs5LOF8sTQpWLMqACLcBGAs/s640/menjadi%2Bayah%2Bjpg.jpg",
            body    : "Riset tentang pendidikan keluarga di Indonesia masih sedikit. Artinya, pendidikan keluarga belum menjadi hal yang cukup dipentingkan untuk dibahas, padahal keluarga adalah suatu bagian terpenting dalam membangun manusia juga dalam membangun suatu negara.\n \n Banyak kita amati dari berbagai sejarah dahulu bahwa visi negara dibangun dari visi keluarga. Misalnya dinasti utsmani, abasiyyah, dan dinasti besar lainnya dibangun berasal dari idealisme keluarga. Namun, ketika nilai-nilai keluarga tersebut dirusak, maka berujung pada social collapse dan hancurnya peradaban."
          }
        },
      ]
    }),
  }
</script>

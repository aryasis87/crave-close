/* ============================================================================
   "Obrolan" — jurnal konsep Close. Setiap tulisan memuat percakapan yang
   ditulis sebagai dialog dua orang (A dan B), diselingi penjelasan. Tidak
   ada nama tokoh supaya pembaca bisa menempatkan dirinya di sisi mana pun.
   Blok: { p }, { h }, { dialog: [['A', '…'], ['B', '…']] }, { inti }
   ========================================================================== */

export const OBROLAN = [
  {
    slug: 'ketika-satu-lebih-ingin',
    judul: 'Ketika salah satu lebih ingin daripada yang lain',
    ringkas: 'Perbedaan keinginan itu biasa — yang membuatnya berat adalah tidak membicarakannya.',
    menit: 5,
    isi: [
      { p: 'Hampir setiap pasangan pernah mengalaminya: satu orang lebih sering ingin, yang lain lebih jarang. Tidak ada yang salah di sini. Keinginan dipengaruhi kelelahan, stres, hormon, obat, bahkan musim. Yang sering salah adalah cara kita diam tentangnya.' },
      { h: 'Yang biasanya terjadi' },
      { dialog: [['A', 'Kamu capek lagi ya?'], ['B', 'Iya… maaf.'], ['A', 'Nggak apa-apa.']] },
      { p: 'Tiga kalimat pendek, dan keduanya pergi tidur dengan perasaan yang berbeda. A merasa ditolak. B merasa bersalah. Tidak satu pun yang benar-benar dikatakan.' },
      { h: 'Versi yang lebih dekat' },
      { dialog: [['A', 'Aku kangen dekat sama kamu. Nggak harus malam ini.'], ['B', 'Aku juga kangen. Cuma belakangan kepalaku penuh terus.'], ['A', 'Mau aku pijat aja? Nggak lebih.'], ['B', 'Mau. Itu kedengarannya enak banget.']] },
      { inti: 'Kedekatan tidak selalu harus berakhir di tempat yang sama. Memisahkan "ingin dekat" dari "ingin lebih" membuat keduanya lebih mudah dijawab.' },
      { p: 'Perhatikan bahwa A tidak meminta sesuatu yang spesifik, dan B tidak menolak kedekatannya — hanya menjelaskan kondisinya. Dari situ muncul pilihan ketiga yang cocok untuk keduanya.' },
      { h: 'Kalau sudah berlangsung lama' },
      { p: 'Bila perbedaan ini sudah berbulan-bulan dan terasa membebani, berbicara dengan konselor hubungan atau tenaga kesehatan bukan tanda kegagalan. Kadang ada penyebab medis yang sederhana untuk ditangani.' },
    ],
  },
  {
    slug: 'dekat-saat-berjauhan',
    judul: 'Tetap dekat saat berjauhan',
    ringkas: 'LDR bukan hanya soal jadwal telepon. Cara menjaga keintiman ketika yang ada hanya layar.',
    menit: 5,
    isi: [
      { p: 'Pasangan yang terpisah jarak sering mengira masalah terbesarnya adalah rindu. Padahal yang lebih sering menggerogoti adalah percakapan yang mengering menjadi laporan harian: sudah makan, sudah sampai, sudah mau tidur.' },
      { h: 'Dari laporan ke percakapan' },
      { dialog: [['A', 'Udah sampai kos?'], ['B', 'Udah. Capek.'], ['A', 'Istirahat ya.']] },
      { p: 'Tidak ada yang salah dengan percakapan ini. Tapi kalau setiap malam seperti ini, jarak terasa makin jauh. Coba satu pertanyaan yang tidak bisa dijawab dengan satu kata:' },
      { dialog: [['A', 'Hal paling random yang kamu lihat hari ini apa?'], ['B', 'Ada kucing naik ojek. Serius. Duduk di depan.'], ['A', 'Aku butuh fotonya sekarang juga.']] },
      { inti: 'Keintiman jarak jauh dibangun dari hal-hal kecil yang dibagikan, bukan dari laporan yang lengkap.' },
      { h: 'Soal keintiman fisik' },
      { p: 'Untuk sebagian pasangan, alat yang bisa dikendalikan dari jauh membantu. Tapi aturannya sama dengan percakapan: dijadwalkan bersama, bukan kejutan; kamera hanya bila keduanya mau; dan tombol putus sambungan selalu dihormati tanpa pertanyaan.' },
      { p: 'Dan bila salah satu sedang tidak ingin, telepon biasa sambil sama-sama berbaring di tempat tidur — tanpa melakukan apa-apa — sering terasa lebih dekat daripada yang dibayangkan.' },
    ],
  },
  {
    slug: 'menyepakati-kata-berhenti',
    judul: 'Menyepakati kata berhenti',
    ringkas: 'Satu kata yang disepakati sebelum mulai membuat keduanya lebih berani — bukan lebih kaku.',
    menit: 4,
    isi: [
      { p: 'Kata berhenti sering dianggap urusan pasangan yang "sudah jauh". Kenyataannya, kata berhenti paling berguna justru di awal: ketika semuanya masih baru dan tidak ada yang tahu persis bagaimana reaksinya sendiri.' },
      { h: 'Cara menyepakatinya' },
      { dialog: [['A', 'Kalau nanti kamu mau berhenti, bilangnya gimana?'], ['B', 'Hmm… "jeruk"?'], ['A', 'Jeruk. Oke. Dan kalau cuma mau pelan-pelan?'], ['B', '"Kuning" aja kali ya, kayak lampu lalu lintas.']] },
      { inti: 'Kata berhenti yang baik mudah diucapkan, tidak mungkin tertukar dengan ucapan lain, dan dihormati tanpa diminta penjelasan.' },
      { h: 'Yang terjadi setelah kata itu diucapkan' },
      { p: 'Berhenti — seketika, tanpa "sebentar lagi". Lalu tanyakan satu hal saja: "Kamu nggak apa-apa?" Bukan "kenapa?". Penjelasan boleh datang nanti, atau tidak sama sekali.' },
      { dialog: [['B', 'Jeruk.'], ['A', 'Oke. Kamu nggak apa-apa?'], ['B', 'Nggak apa-apa. Cuma tiba-tiba kerasa terlalu banyak.'], ['A', 'Mau peluk aja?']] },
      { p: 'Pasangan yang punya kata berhenti justru sering bercerita bahwa mereka jadi lebih berani mencoba. Karena keduanya tahu, jalan keluarnya selalu ada.' },
    ],
  },
]

export const obrolanBySlug = (slug) => OBROLAN.find((o) => o.slug === slug)

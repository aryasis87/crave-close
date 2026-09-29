/* ============================================================================
   Katalog konsep "Close" — Jarak yang Mengecil.
   Ciri khas varian ini: barang disusun menurut situasi hubungan, dan setiap
   barang membawa "obrolan sebelum mencoba" serta tiga kesepakatan kecil.
   Barangnya nomor dua; percakapannya nomor satu.
   Nama, harga, dan spesifikasi adalah contoh untuk purwarupa desain kontes.
   ========================================================================== */

export const SITUASI = [
  { id: 'baru', label: 'Saat baru mulai', jarak: 4, desc: 'Masih saling menebak. Mulai dari yang paling sederhana.' },
  { id: 'dekat', label: 'Saat ingin lebih dekat', jarak: 2, desc: 'Sudah nyaman bicara, ingin mencoba sesuatu berdua.' },
  { id: 'jauh', label: 'Saat berjauhan', jarak: 5, desc: 'Beda kota, beda zona waktu — tetap terhubung.' },
  { id: 'sendiri', label: 'Untuk diri sendiri', jarak: 1, desc: 'Mengenal diri sendiri juga bagian dari kedekatan.' },
]

export const PRODUK = [
  {
    slug: 'langkah-pertama',
    nama: 'Langkah Pertama',
    situasi: 'baru',
    harga: 319000,
    image: '/images/p2.jpg',
    unggulan: true,
    ringkas: 'Kecil, satu tombol, hampir tak bersuara. Cukup untuk memulai obrolan — dan tidak lebih.',
    cerita: 'Kami menamainya begini karena memang itu fungsinya: langkah pertama. Tidak ada pola yang perlu dipelajari, tidak ada aplikasi. Yang perlu dipelajari justru satu sama lain.',
    obrolan: ['"Mau coba dipegang kamu dulu, atau aku?"', '"Kalau terasa aneh, kita ketawa aja ya."'],
    sepakat: ['Siapa pun boleh berhenti kapan saja, tanpa perlu alasan.', 'Mulai dari kekuatan terendah.', 'Bicarakan sesudahnya, bukan hanya sebelumnya.'],
    spek: [['Material', 'Silikon medical-grade, bebas BPA'], ['Kekuatan', '3 tingkat'], ['Daya', 'Baterai AAA, ±3 jam'], ['Air', 'Tahan air penuh (IPX7)']],
  },
  {
    slug: 'minyak-pijat-teduh',
    nama: 'Minyak Pijat Teduh',
    situasi: 'baru',
    harga: 149000,
    image: '/images/minyak-pijat.webp',
    unggulan: false,
    ringkas: 'Untuk malam yang dimulai dari punggung, bukan dari tempat lain.',
    cerita: 'Banyak pasangan lupa bahwa kedekatan bisa dimulai dari pijatan yang tidak menuntut apa-apa. Minyak ini licin cukup lama dan aromanya hilang pelan-pelan.',
    obrolan: ['"Bagian mana yang paling pegal hari ini?"', '"Lebih keras atau lebih pelan?"'],
    sepakat: ['Tidak ada yang "harus" terjadi sesudahnya.', 'Gantian — lima belas menit masing-masing.', 'Ponsel di ruangan lain.'],
    spek: [['Bahan dasar', 'Jojoba & biji anggur'], ['Isi', '100 ml'], ['Aroma', 'Kayu cendana, tipis'], ['Catatan', 'Pemakaian luar; tidak untuk kondom lateks']],
  },
  {
    slug: 'pelumas-tenang',
    nama: 'Pelumas Tenang',
    situasi: 'baru',
    harga: 159000,
    image: '/images/p14.jpeg',
    unggulan: false,
    ringkas: 'Berbahan air, aman untuk semua alat di katalog dan kondom lateks.',
    cerita: 'Rasa tidak nyaman di awal paling sering bukan karena alatnya, tapi karena kurang licin. Membicarakan pelumas juga cara paling ringan untuk mulai membicarakan hal lain.',
    obrolan: ['"Kita siapin ini dulu ya, biar nggak buru-buru."'],
    sepakat: ['Pakai lebih banyak dari yang dikira perlu.', 'Tidak ada yang merasa "kurang" karena memakainya.', 'Berhenti bila terasa perih.'],
    spek: [['Bahan dasar', 'Air, tanpa gliserin'], ['Isi', '100 ml'], ['Aman untuk', 'Alat silikon & kondom lateks'], ['Setelah dibuka', '12 bulan']],
  },
  {
    slug: 'jembatan',
    nama: 'Jembatan',
    situasi: 'dekat',
    harga: 1260000,
    image: '/images/p3.jpg',
    unggulan: true,
    ringkas: 'Dipakai berdua sekaligus. Namanya diambil dari fungsinya: menghubungkan.',
    cerita: 'Jembatan melengkung mengikuti tubuh sehingga bisa dipakai bersama, bukan bergantian. Dua motornya diatur dari satu tombol besar yang mudah ditemukan.',
    obrolan: ['"Kita coba bareng, atau kamu mau lihat dulu cara kerjanya?"', '"Kasih tanda kalau mau ganti pola, ya."', '"Tadi bagian mana yang paling kamu suka?"'],
    sepakat: ['Sepakati satu kata berhenti sebelum mulai.', 'Pola diganti hanya kalau keduanya setuju.', 'Tidak ada evaluasi di malam yang sama — besok saja.'],
    spek: [['Material', 'Silikon medical-grade, bebas BPA'], ['Pola', '10 pola, 2 motor'], ['Daya', 'USB-C, ±2 jam'], ['Air', 'Tahan percik']],
  },
  {
    slug: 'kit-berdua',
    nama: 'Kit Berdua',
    situasi: 'dekat',
    harga: 560000,
    image: '/images/p4.jpg',
    unggulan: false,
    ringkas: 'Pelumas, minyak pijat, pembersih alat, dan dua belas kartu percakapan.',
    cerita: 'Isinya barang-barang yang biasanya terlupa, ditambah dua belas kartu dari dek percakapan kami. Kartunya kami taruh di lapisan paling atas — supaya dibaca lebih dulu.',
    obrolan: ['"Ambil satu kartu, kita jawab bergantian."'],
    sepakat: ['Boleh melewati kartu tanpa menjelaskan kenapa.', 'Jawaban tidak dibahas di depan orang lain.', 'Satu kartu per malam sudah cukup.'],
    spek: [['Isi', 'Pelumas 100 ml, minyak 50 ml, pembersih 100 ml, 12 kartu'], ['Kartu', 'Kertas tebal, tanpa logo'], ['Kemasan', 'Kotak polos'], ['Hemat', 'Rp 80.000 dibanding terpisah']],
  },
  {
    slug: 'set-arus',
    nama: 'Set Arus',
    situasi: 'dekat',
    harga: 1380000,
    image: '/images/p5.jpg',
    unggulan: false,
    ringkas: 'Empat bentuk untuk pasangan yang sudah tahu cara bicara soal apa yang disukai.',
    cerita: 'Kami menaruh set ini setelah Jembatan, bukan sebelumnya. Bukan soal keberanian, tapi soal kebiasaan bicara: semakin banyak pilihan, semakin perlu kesepakatan.',
    obrolan: ['"Dari yang mana kita mulai?"', '"Ada yang pengin kita lewati dulu?"'],
    sepakat: ['Satu bentuk per malam.', 'Yang tidak disukai boleh disimpan tanpa dibahas panjang.', 'Pelumas berbahan air, selalu.'],
    spek: [['Material', 'Silikon medical-grade, bebas BPA'], ['Isi', '4 bentuk, 2 bermotor'], ['Daya', 'USB-C'], ['Air', 'Tahan air penuh (IPX7)']],
  },
  {
    slug: 'jauh-dekat',
    nama: 'Jauh Dekat',
    situasi: 'jauh',
    harga: 1490000,
    image: '/images/p8.jpg',
    unggulan: true,
    ringkas: 'Dikendalikan lewat aplikasi dari kota lain. Untuk pasangan yang terpisah jarak.',
    cerita: 'Jauh Dekat tersambung ke aplikasi lewat internet, jadi pasangan Anda bisa mengatur polanya dari mana pun. Aplikasinya juga punya ruang obrolan suara — karena yang paling dirindukan biasanya suara, bukan getaran.',
    obrolan: ['"Jam berapa di tempatmu sekarang?"', '"Mau aku yang pegang kendali malam ini, atau kamu?"'],
    sepakat: ['Jadwalkan — jangan jadi kejutan saat sedang rapat.', 'Kamera hanya bila keduanya mau.', 'Tombol putus sambungan selalu dihormati.'],
    spek: [['Material', 'Silikon medical-grade, bebas BPA'], ['Koneksi', 'Bluetooth + internet, aplikasi Android & iOS'], ['Daya', 'Magnetik, ±90 menit'], ['Privasi', 'Riwayat sesi tidak disimpan']],
  },
  {
    slug: 'teduh',
    nama: 'Teduh',
    situasi: 'sendiri',
    harga: 940000,
    image: '/images/p7.jpg',
    unggulan: false,
    ringkas: 'Untuk mengenal diri sendiri dulu — supaya lebih mudah menjelaskannya ke orang lain.',
    cerita: 'Kedekatan dengan orang lain sering dimulai dari mengenal tubuh sendiri. Teduh berkepala lebar dan selalu menyala di kekuatan terendah, jadi tidak ada kejutan.',
    obrolan: ['Untuk diri sendiri: "Apa yang terasa paling nyaman hari ini?"'],
    sepakat: ['Tidak ada target.', 'Catat apa yang disukai, kalau ingin berbagi nanti.', 'Waktu untuk diri sendiri itu sah.'],
    spek: [['Material', 'Kepala silikon, gagang ABS'], ['Pola', '8 pola, 5 kekuatan'], ['Daya', 'USB-C, ±2,5 jam'], ['Kebisingan', 'Di bawah 42 dB']],
  },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const produkBySlug = (slug) => PRODUK.find((p) => p.slug === slug)
export const situasiDari = (id) => SITUASI.find((s) => s.id === id)

/* Dara Puspita — penulis & penyair di Yogyakarta (persona fiktif). Satu sumber
   isi untuk surat tautan, buku, dan surat Jumat. Puisi dan surat ditulis khusus
   untuk purwarupa ini; harga dan jadwal adalah contoh. */

export const SITE = 'https://linkinbio-arsip.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const LAMPIRAN = [
  { no: 'Lampiran 1', label: 'Buku terbaru — "Rumah Kata"', meta: 'kumpulan puisi, cetakan ke-3', href: '/buku' },
  { no: 'Lampiran 2', label: 'Satu puisi utuh', meta: 'untuk dibaca sambil menunggu', href: '/buku#puisi' },
  { no: 'Lampiran 3', label: 'Surat Jumat Pagi', meta: 'surat pendek tiap Jumat', href: '/surat' },
  { no: 'Lampiran 4', label: 'Kelas menulis daring', meta: 'batch November, 6 pertemuan', href: '/surat#kelas' },
  { no: 'Lampiran 5', label: 'Surat untuk Dara', meta: 'balas lewat formulir', href: '/surat#tulis' },
];

export const BUKU = {
  judul: 'Rumah Kata',
  jenis: 'Kumpulan puisi',
  cetakan: 'Cetakan ke-3, Agustus 2026',
  halaman: 72,
  ukuran: '13 × 19 cm, sampul tebal',
  harga: 85000,
  isi: [['I', 'Ruang tamu', 9], ['II', 'Dapur', 11], ['III', 'Kamar yang dikunci', 8], ['IV', 'Halaman belakang', 10], ['V', 'Jendela', 7]],
  puisi: {
    judul: 'Rumah Kata',
    bait: [
      ['Di rumah ini, kata-kata tidur', 'di laci yang lupa kukunci.', 'Setiap pagi satu terbangun,', 'menyeduh teh, membuka jendela,'],
      ['lalu duduk di meja makan', 'menunggu aku menuliskannya.', 'Kadang aku datang terlambat —', 'ia sudah pergi, meninggalkan cangkir.'],
    ],
  },
};

// 4, 11, 18, 25 September 2026 = Jumat.
export const SURAT = [
  { tanggal: 'Jumat, 25 Sep 2026', judul: 'Tentang menulis di kereta', petikan: 'Kereta Prambanan Ekspres selalu lebih bising dari yang kuingat, tapi justru di sana kalimat-kalimat paling jujur datang. Barangkali karena tak ada tempat untuk sembunyi.' },
  { tanggal: 'Jumat, 18 Sep 2026', judul: 'Daftar belanja sebagai puisi', petikan: 'Ibu menulis daftar belanja di balik kalender: garam, kangkung, obat batuk untuk bapak. Aku menyimpannya. Itu puisi terbaik yang pernah kubaca minggu ini.' },
  { tanggal: 'Jumat, 11 Sep 2026', judul: 'Cetakan ketiga', petikan: 'Rumah Kata dicetak lagi. Aku ingin berterima kasih satu per satu, tapi surat ini terlalu pendek. Jadi: terima kasih, kamu yang membaca sampai bait terakhir.' },
  { tanggal: 'Jumat, 4 Sep 2026', judul: 'Hujan pertama', petikan: 'Hujan pertama September jatuh tepat ketika aku selesai menyiram tanaman. Ada pelajaran di situ tentang bekerja terlalu keras, tapi aku masih malas memikirkannya.' },
];

// 5 Nov – 10 Des 2026, tiap Kamis.
export const KELAS = {
  nama: 'Menulis dari hal-hal kecil',
  jadwal: 'Kamis malam, 19.30–21.00 WIB · 5 November – 10 Desember 2026',
  pertemuan: 6,
  harga: 450000,
  kuota: 15,
  sisa: 6,
  materi: ['Mencatat tanpa menghakimi', 'Benda sebagai pintu cerita', 'Memotong kalimat', 'Bait dan napas', 'Membaca keras-keras', 'Menyusun kumpulan kecil'],
};

/* Dara Puspita — penulis & penyair di Yogyakarta (persona fiktif). Satu sumber
   isi untuk surat tautan, buku, dan surat Jumat. Puisi dan surat ditulis khusus
   untuk purwarupa ini; harga dan jadwal adalah contoh. */

import { bulanKe, hariBerikut, hariKe, tambahHari, tgl } from './waktu';

export const SITE = 'https://linkinbio-arsip.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

export const LAMPIRAN = [
  { no: 'Lampiran 1', label: 'Buku terbaru — "Rumah Kata"', meta: 'kumpulan puisi, cetakan ke-3', href: '/buku' },
  { no: 'Lampiran 2', label: 'Satu puisi utuh', meta: 'untuk dibaca sambil menunggu', href: '/buku#puisi' },
  { no: 'Lampiran 3', label: 'Surat Jumat Pagi', meta: 'surat pendek tiap Jumat', href: '/surat' },
  { no: 'Lampiran 4', label: 'Kelas menulis daring', meta: '6 pertemuan', batch: true, href: '/surat#kelas' },
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

// Empat surat terakhir, tiap Jumat. Tanggalnya dihitung mundur dari Jumat
// terakhir (WIB) supaya arsip di demo selalu terlihat terbaru.
const POLA_SURAT = [
  { judul: 'Tentang menulis di kereta', petikan: 'Kereta Prambanan Ekspres selalu lebih bising dari yang kuingat, tapi justru di sana kalimat-kalimat paling jujur datang. Barangkali karena tak ada tempat untuk sembunyi.' },
  { judul: 'Daftar belanja sebagai puisi', petikan: 'Ibu menulis daftar belanja di balik kalender: garam, kangkung, obat batuk untuk bapak. Aku menyimpannya. Itu puisi terbaik yang pernah kubaca minggu ini.' },
  { judul: 'Cetakan ketiga', petikan: 'Rumah Kata dicetak lagi. Aku ingin berterima kasih satu per satu, tapi surat ini terlalu pendek. Jadi: terima kasih, kamu yang membaca sampai bait terakhir.' },
  { judul: 'Hujan pertama', petikan: 'Hujan pertama musim ini jatuh tepat ketika aku selesai menyiram tanaman. Ada pelajaran di situ tentang bekerja terlalu keras, tapi aku masih malas memikirkannya.' },
];
export function suratTerakhir(hari) {
  const jumat = tambahHari(hari, -((hariKe(hari) - 5 + 7) % 7));
  return POLA_SURAT.map((x, i) => ({ ...x, tanggal: tgl(tambahHari(jumat, -7 * i)) }));
}

// Kelas enam Kamis berturut-turut, dimulai Kamis yang jatuh paling cepat tiga
// pekan dari hari ini (WIB), supaya pendaftaran di demo selalu masih dibuka.
export const KELAS = {
  nama: 'Menulis dari hal-hal kecil',
  jam: 'Kamis malam, 19.30–21.00 WIB',
  pertemuan: 6,
  harga: 450000,
  kuota: 15,
  sisa: 6,
  materi: ['Mencatat tanpa menghakimi', 'Benda sebagai pintu cerita', 'Memotong kalimat', 'Bait dan napas', 'Membaca keras-keras', 'Menyusun kumpulan kecil'],
};
export function jadwalKelas(hari) {
  const mulai = hariBerikut(hari, 4, 21);
  const akhir = tambahHari(mulai, 7 * (KELAS.pertemuan - 1));
  return { mulai: tgl(mulai, 'pendek'), akhir: tgl(akhir, 'pendek'), tahun: akhir.slice(0, 4), bulan: bulanKe(mulai).nama };
}

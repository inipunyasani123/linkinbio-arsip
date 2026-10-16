'use client';

import { KELAS, jadwalKelas } from '@/lib/dara';
import useHariIni from './useHariIni';

// Teks jadwal kelas yang bergantung tanggal: 'batch' → "batch November", 'jadwal' → jam + rentang tanggal.
// data-tanggal: penanda teks bertanggal (disembunyikan saat membuat og.jpg statis).
export default function InfoKelas({ jenis, hari: awal, akhiran = '' }) {
  const hari = useHariIni(awal);
  const j = jadwalKelas(hari);
  return <span data-tanggal="">{jenis === 'batch' ? `batch ${j.bulan}` : `${KELAS.jam} · ${j.mulai} – ${j.akhir} ${j.tahun}`}{akhiran}</span>;
}

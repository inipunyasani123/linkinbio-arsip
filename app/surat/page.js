import { KELAS, SITE, rp } from '@/lib/dara';
import { hariIniWIB } from '@/lib/waktu';
import Kembali from '../components/Kembali';
import FormSurat from '../components/FormSurat';
import InfoKelas from '../components/InfoKelas';
import SuratTerakhir from '../components/SuratTerakhir';

export const metadata = {
  title: 'Surat Jumat Pagi & Kelas Menulis',
  description: 'Arsip Surat Jumat Pagi Dara Puspita, kelas menulis daring "Menulis dari hal-hal kecil" enam pertemuan, dan formulir untuk berlangganan atau membalas.',
  alternates: { canonical: `${SITE}/surat` },
};

export default function Surat() {
  const hari = hariIniWIB();
  return (
    <main className="px-4 py-12">
      <div className="kertas relative mx-auto w-full max-w-2xl rounded-sm px-7 py-9 md:px-11 md:py-12">
        <Kembali lampiran="Lampiran 3" />
        <h1 className="mt-8 font-type text-4xl text-tinta">Surat Jumat Pagi</h1>
        <p className="mt-2 font-serif italic text-tinta/80">Satu surat pendek, tiap Jumat sebelum pukul tujuh. Empat yang terakhir:</p>

        <SuratTerakhir hari={hari} />

        <section id="kelas" aria-labelledby="kelas-h" className="mt-14 scroll-mt-6 border-t-2 border-dashed border-tinta/30 pt-8">
          <p className="font-type text-[11px] uppercase text-merahpos">Lampiran 4</p>
          <h2 id="kelas-h" className="mt-1 font-type text-2xl text-tinta sm:text-3xl">Kelas menulis: {KELAS.nama}</h2>
          <p className="mt-2 font-serif italic text-tinta/80"><InfoKelas jenis="jadwal" hari={hari} /></p>
          <ol className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {KELAS.materi.map((m, i) => <li key={m} className="font-serif"><span className="font-type text-merahpos">{i + 1}.</span> {m}</li>)}
          </ol>
          <p className="mt-5 font-type text-lg text-tinta">{rp(KELAS.harga)} · {KELAS.pertemuan} pertemuan · sisa {KELAS.sisa} dari {KELAS.kuota} kursi</p>
        </section>

        <FormSurat />
        <p className="mt-8 font-serif text-xs italic text-tinta/75">Surat, kelas, dan harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}

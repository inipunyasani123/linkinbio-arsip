import { BUKU, SITE, rp } from '@/lib/dara';
import Kembali from '../components/Kembali';
import Gambar from '../components/Gambar';
import PesanBuku from '../components/PesanBuku';

export const metadata = {
  title: 'Buku "Rumah Kata"',
  description: 'Kumpulan puisi "Rumah Kata" karya Dara Puspita, cetakan ke-3: daftar isi lima bagian, satu puisi utuh, dan pesan buku bertanda tangan.',
  alternates: { canonical: `${SITE}/buku` },
};

export default function Buku() {
  return (
    <main className="px-4 py-12">
      <div className="kertas relative mx-auto w-full max-w-2xl rounded-sm px-7 py-9 md:px-11 md:py-12">
        <Kembali lampiran="Lampiran 1" />
        <div className="mt-8 grid items-end gap-8 sm:grid-cols-[9rem_1fr]">
          <Gambar src="/images/sampul-rumah-kata.webp" alt="Sampul buku Rumah Kata karya Dara Puspita: rumah kecil berjendela baris kata, huruf mengepul dari cerobong, dan cangkir teh di ambang pintu" width={144} height={208} asli={432} priority className="h-52 w-36 rotate-[-2deg] rounded-sm shadow-[6px_8px_0_rgba(58,49,40,0.25)]" />
          <div>
            <p className="font-type text-xs uppercase tracking-[0.2em] text-tinta/75">{BUKU.jenis}</p>
            <h1 className="mt-1 font-type text-4xl text-tinta">{BUKU.judul}</h1>
            <p className="mt-2 font-serif italic text-tinta/80">{BUKU.cetakan} · {BUKU.halaman} halaman · {BUKU.ukuran}</p>
            <p className="mt-3 font-type text-2xl text-merahpos">{rp(BUKU.harga)}</p>
          </div>
        </div>

        <section aria-labelledby="isi-h" className="mt-10">
          <h2 id="isi-h" className="font-type text-xl text-tinta">Daftar isi</h2>
          <ol className="mt-3">
            {BUKU.isi.map(([no, bagian, n]) => (
              <li key={no} className="flex items-baseline gap-3 border-b border-dashed border-tinta/25 py-2.5">
                <span className="w-8 font-type text-merahpos">{no}</span>
                <span className="flex-1 font-serif">{bagian}</span>
                <span className="font-serif text-sm italic text-tinta/75">{n} puisi</span>
              </li>
            ))}
          </ol>
          <p className="mt-2 text-right font-serif text-sm italic text-tinta/75">{BUKU.isi.reduce((s, [, , n]) => s + n, 0)} puisi dalam lima ruangan</p>
        </section>

        <section id="puisi" aria-labelledby="puisi-h" className="mt-12 scroll-mt-6 border-y-2 border-tinta/20 py-8">
          <h2 id="puisi-h" className="font-type text-2xl text-tinta">{BUKU.puisi.judul}</h2>
          <div className="mt-4 space-y-5 font-serif text-lg leading-relaxed text-tinta/90">
            {BUKU.puisi.bait.map((b) => <p key={b[0]}>{b.map((l) => <span key={l} className="block">{l}</span>)}</p>)}
          </div>
          <p className="mt-5 font-serif text-sm italic text-tinta/75">— dari bagian II, &ldquo;Dapur&rdquo;</p>
        </section>

        <PesanBuku />
        <p className="mt-8 font-serif text-xs italic text-tinta/75">Buku, puisi, dan harga adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}

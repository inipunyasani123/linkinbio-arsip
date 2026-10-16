'use client';

import { useEffect, useState } from 'react';

const JENIS = [['langganan', 'Berlangganan Surat Jumat Pagi'], ['kelas', 'Daftar kelas menulis'], ['balas', 'Menulis surat untuk Dara']];

export default function FormSurat() {
  const [jenis, setJenis] = useState('langganan');
  const [selesai, setSelesai] = useState(false);
  useEffect(() => {
    const h = window.location.hash;
    if (h === '#kelas') setJenis('kelas');
    if (h === '#tulis') setJenis('balas');
  }, []);
  const input = 'w-full border-b border-dashed border-tinta/60 bg-transparent py-2 font-serif focus:border-merahpos';

  return (
    <section id="tulis" aria-labelledby="tulis-h" className="mt-14 scroll-mt-6">
      <p className="font-type text-[11px] uppercase text-merahpos">Lampiran 5</p>
      <h2 id="tulis-h" className="mt-1 font-type text-3xl text-tinta">Kotak surat</h2>
      {selesai ? (
        <div role="status" className="mt-4 font-serif">
          <p className="italic">{jenis === 'balas' ? 'Suratmu sudah masuk kotak. Dara membalas semua surat, pelan-pelan.' : jenis === 'kelas' ? 'Kursimu tercatat. Tautan kelas dikirim H-1.' : 'Sampai jumpa Jumat pagi.'}</p>
          <p className="mt-2 text-sm text-tinta/75">Ini purwarupa desain: tidak ada data yang benar-benar dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-4 min-h-11 font-type text-sm text-merahpos underline underline-offset-4">tulis lagi</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-5 space-y-5 font-serif">
          <fieldset>
            <legend className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Keperluan</legend>
            <div className="mt-1">
              {JENIS.map(([k, n]) => (
                <label key={k} className="flex min-h-11 cursor-pointer items-center gap-3">
                  <input type="radio" name="jenis" value={k} checked={jenis === k} onChange={() => setJenis(k)} className="h-4 w-4 shrink-0 accent-[#b4483c]" />
                  {n}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="s-nama" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Nama</label>
              <input id="s-nama" required autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="s-surel" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Surel</label>
              <input id="s-surel" type="email" required autoComplete="email" className={input} />
            </div>
          </div>
          {jenis === 'balas' && (
            <div>
              <label htmlFor="s-isi" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Isi surat</label>
              <textarea id="s-isi" required rows={5} className={`${input} leading-8`} />
            </div>
          )}
          <button type="submit" className="w-full bg-tinta py-3 font-type text-lg text-kertas hover:bg-merahpos">{jenis === 'balas' ? 'Masukkan ke kotak surat' : jenis === 'kelas' ? 'Daftar kelas' : 'Berlangganan'}</button>
          <p className="text-xs italic text-tinta/75">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}

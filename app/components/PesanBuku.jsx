'use client';

import { useState } from 'react';
import { BUKU, rp } from '@/lib/dara';

const ONGKIR = 15000;

export default function PesanBuku() {
  const [jml, setJml] = useState(1);
  const [ttd, setTtd] = useState(true);
  const [untuk, setUntuk] = useState('');
  const [selesai, setSelesai] = useState(false);
  const total = BUKU.harga * jml + ONGKIR;
  const input = 'w-full border-b border-dashed border-tinta/60 bg-transparent py-2 font-serif focus:border-merahpos';

  return (
    <section aria-labelledby="pesan-h" className="mt-12">
      <h2 id="pesan-h" className="font-type text-2xl text-tinta">Pesan buku</h2>
      {selesai ? (
        <div role="status" className="mt-4 font-serif">
          <p className="italic">Tercatat — {jml} buku{ttd ? `, ditandatangani${untuk ? ` untuk ${untuk}` : ''}` : ''}. Dikirim dalam 3 hari kerja.</p>
          <p className="mt-2 text-sm text-tinta/75">Ini purwarupa desain: tidak ada pembayaran atau pengiriman sungguhan.</p>
          <button type="button" onClick={() => setSelesai(false)} className="mt-4 min-h-11 font-type text-sm text-merahpos underline underline-offset-4">pesan lagi</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="mt-4 space-y-5 font-serif">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="b-jml" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Jumlah</label>
              <select id="b-jml" value={jml} onChange={(e) => setJml(Number(e.target.value))} className={input}>{[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} buku</option>)}</select>
            </div>
            <div>
              <label htmlFor="b-nama" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Nama penerima</label>
              <input id="b-nama" required autoComplete="name" className={input} />
            </div>
          </div>
          <label className="flex min-h-11 cursor-pointer items-center gap-3">
            <input type="checkbox" checked={ttd} onChange={(e) => setTtd(e.target.checked)} className="h-5 w-5 shrink-0 accent-[#b4483c]" />
            Minta tanda tangan Dara (gratis)
          </label>
          {ttd && (
            <div>
              <label htmlFor="b-untuk" className="font-type text-xs uppercase tracking-[0.15em] text-tinta/80">Ditulis untuk (opsional)</label>
              <input id="b-untuk" value={untuk} onChange={(e) => setUntuk(e.target.value)} maxLength={30} placeholder="mis. Ibu" className={input} />
            </div>
          )}
          <div className="flex items-baseline justify-between border-t-2 border-tinta/20 pt-3">
            <span className="text-sm text-tinta/80">{jml} × {rp(BUKU.harga)} + ongkir {rp(ONGKIR)}</span>
            <span className="font-type text-2xl text-merahpos" aria-live="polite">{rp(total)}</span>
          </div>
          <button type="submit" className="w-full bg-tinta py-3 font-type text-lg text-kertas hover:bg-merahpos">Kirim pesanan</button>
          <p className="text-xs italic text-tinta/75">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}

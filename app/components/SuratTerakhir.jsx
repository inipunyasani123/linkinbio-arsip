'use client';

import { suratTerakhir } from '@/lib/dara';
import useHariIni from './useHariIni';

export default function SuratTerakhir({ hari: awal }) {
  const hari = useHariIni(awal);
  return (
    <ol className="mt-8 space-y-7">
      {suratTerakhir(hari).map((s) => (
        <li key={s.judul} className="border-l-2 border-merahpos/60 pl-5">
          <p className="font-type text-xs uppercase text-merahpos">{s.tanggal}</p>
          <h2 className="mt-1 font-type text-xl text-tinta">{s.judul}</h2>
          <p className="mt-2 font-serif leading-relaxed text-tinta/90">&ldquo;{s.petikan}&rdquo;</p>
        </li>
      ))}
    </ol>
  );
}

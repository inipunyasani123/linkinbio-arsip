import Link from 'next/link';

export default function Kembali({ lampiran }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <Link href="/" className="-my-3 inline-flex min-h-11 items-center font-type text-sm text-tinta underline-offset-4 hover:text-merahpos hover:underline">← kembali ke surat</Link>
      <span className="font-type text-[11px] uppercase text-merahpos">{lampiran}</span>
    </div>
  );
}

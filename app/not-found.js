import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="kertas relative w-full max-w-md -rotate-1 rounded-sm px-8 py-10">
        <div className="absolute right-6 top-6 rotate-[-12deg] rounded border-2 border-merahpos px-2 py-0.5 font-type text-[10px] uppercase tracking-widest text-merahpos" aria-hidden="true">Alamat tidak dikenal</div>
        <p className="font-type text-xs uppercase tracking-[0.25em] text-tinta/75">Kembali ke pengirim · 404</p>
        <h1 className="mt-3 font-type text-3xl text-tinta">Surat ini tidak sampai</h1>
        <p className="mt-3 font-serif italic leading-relaxed text-tinta/80">Halaman yang kamu cari tidak ada di arsip. Mungkin alamatnya salah tulis.</p>
        <Link href="/" className="mt-6 inline-flex min-h-11 items-center font-type text-merahpos underline underline-offset-4">← kembali ke surat utama</Link>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Adab-ı Muaşeret</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Rehberler</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Hakkında</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 bg-clip-text text-transparent">
            Modern Yaşam Kültürü
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
            Görgü kuralları, nezaket ve kişisel gelişim üzerine kapsamlı bir rehber.
            Sadece "nasıl" davranılacağını değil, "neden" öyle davranıldığını keşfedin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black dark:bg-white px-8 text-sm font-medium text-white dark:text-black transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            >
              Okumaya Başla
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 px-8 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              Topluluğa Katıl
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Günlük Nezaket", desc: "Sosyal hayatta zarafet ve incelik." },
            { title: "İş Dünyası", desc: "Profesyonel imaj ve ofis adabı." },
            { title: "Dijital İletişim", desc: "E-posta, mesajlaşma ve sosyal medya kuralları." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

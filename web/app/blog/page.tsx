export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-8">Blog ve Makaleler</h1>
        <div className="grid gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Henüz içerik eklenmedi.</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Çok yakında burada detaylı rehberler bulacaksınız.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

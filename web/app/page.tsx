'use-client';
'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      {/* Header */}
      <header className="flex items-center justify-center p-4 border-b bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Nezaket.ai
          </h1>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
            <Sparkles className="w-16 h-16 text-gray-300 dark:text-gray-700" />
            <h2 className="text-2xl font-semibold">Size nasıl yardımcı olabilirim?</h2>
            <p className="max-w-md text-gray-500">
              "Patronuma nasıl zam isteyebilirim?" veya "Taziye mesajına ne yazılır?" gibi sorular sorabilirsiniz.
            </p>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              "flex gap-4 max-w-3xl mx-auto w-full",
              m.role === 'user' ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
              m.role === 'user' ? "bg-indigo-100 text-indigo-600" : "bg-emerald-100 text-emerald-600"
            )}>
              {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>

            <div className={cn(
              "flex-1 p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed whitespace-pre-wrap",
              m.role === 'user'
                ? "bg-indigo-600 text-white rounded-tr-none"
                : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-tl-none"
            )}>
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-4 max-w-3xl mx-auto w-full animate-pulse">
            <div className="w-8 h-8 rounded-full bg-emerald-100 shrink-0" />
            <div className="flex-1 p-4 rounded-2xl bg-white dark:bg-gray-900 border h-12" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md border-t">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
          <input
            className="flex-1 p-4 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm transition-all"
            value={input}
            onChange={handleInputChange}
            placeholder="Bir soru sorun... (Örn: Düğünde takı merasimi ne zaman olur?)"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Send size={20} />
          </button>
        </form>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-400">Nezaket.ai hata yapabilir. Lütfen önemli kararlarınızda kendi sağduyunuzu kullanın.</p>
        </div>
      </footer>
    </div>
  );
}

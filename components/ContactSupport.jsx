'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, ShieldCheck } from 'lucide-react'

export default function ContactSupport() {
  const [mode, setMode] = useState('chat') // 'chat' | 'email'

  return (
    <section className="bg-white text-zinc-900 py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight">
            Contact Our Support Team
          </h2>
          <p className="text-lg text-zinc-600">
            We’re here to help — fast, friendly, and fully private.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex justify-center gap-6 text-sm font-medium">
          <button
            onClick={() => setMode('chat')}
            className={`px-4 py-2 rounded-full border transition ${
              mode === 'chat'
                ? 'bg-zinc-800 text-white border-zinc-800 shadow'
                : 'text-zinc-600 border-zinc-300 hover:border-zinc-500 hover:text-zinc-800'
            }`}
          >
            <MessageSquare className="inline-block w-4 h-4 mr-1" />
            Live Chat Request
          </button>
          <button
            onClick={() => setMode('email')}
            className={`px-4 py-2 rounded-full border transition ${
              mode === 'email'
                ? 'bg-zinc-800 text-white border-zinc-800 shadow'
                : 'text-zinc-600 border-zinc-300 hover:border-zinc-500 hover:text-zinc-800'
            }`}
          >
            <Mail className="inline-block w-4 h-4 mr-1" />
            Email Support
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-zinc-200 rounded-xl p-8 md:p-12 shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Aulia W."
                className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium">
              {mode === 'chat' ? 'Chat Message' : 'Your Issue or Question'}
            </label>
            <textarea
              rows={5}
              placeholder={
                mode === 'chat'
                  ? 'I’d like to talk to someone about...'
                  : 'I have a concern about order #1234...'
              }
              className="w-full border border-zinc-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold rounded-xl transition">
            <Send size={16} />
            Submit Request
          </button>

          <div className="flex items-center gap-2 text-sm text-zinc-400 mt-2">
            <ShieldCheck size={16} className="text-zinc-500" />
            We respond within 12 hours, 7 days a week — fully private & secure.
          </div>
        </div>
      </div>
    </section>
  )
}

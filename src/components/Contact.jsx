import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';
import useInView from '../hooks/useInView';
import { fadeUp, stagger } from '../lib/animations';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ragavan-v-15a2b3292/',
    icon: Linkedin,
    log: 'NET_GATE: CONNECTED',
    address: 'linkedin.com/in/ragavan-v'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ragavan28v',
    icon: Github,
    log: 'SOURCE_REPOS: OK',
    address: 'github.com/ragavan28v'
  },
  {
    label: 'Email',
    href: 'mailto:ragavvenkat269@gmail.com',
    icon: Mail,
    log: 'COMMS_CHANNEL: READY',
    address: 'ragavvenkat269@gmail.com'
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/uc?export=download&id=1tfAqFMEOjnK1-TJiCBkj9PM4BhfcrCFY',
    icon: FileText,
    log: 'PAYLOAD: DOWNLOAD_READY',
    address: 'ragavan_v_resume.pdf'
  },
];

export default function Contact() {
  const { ref, controls } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-shell min-h-[85vh] lg:min-h-screen flex items-center bg-surface scroll-mt-0 relative overflow-hidden py-10 lg:py-16">
      {/* HUD scanning background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent-surface)_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="section-inner relative z-10 w-full">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-6 text-center lg:text-left">
            <p className="section-kicker">Quantum Transceiver</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">Establish Connection</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Console: Connection Channels (Directory) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              {/* Top: Description text outside the card */}
              <div className="mb-4">
                <div className="border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5 mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase block">
                    CONNECTION CHANNELS [DIR_MODE]
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                  Initiate communication channels. Send a secure message payload directly or link through the terminal channels. Choose any of the live connection points below to synchronize nodes, download the current resume payload, or inspect the repository.
                </p>
              </div>

              {/* Bottom: The card containing only the buttons */}
              <div className="border border-slate-200/50 dark:border-slate-800 bg-slate-50/45 dark:bg-slate-950/20 p-5 rounded-xl relative shadow-sm flex flex-col justify-center">
                {/* Corner Brackets */}
                <span className="cyber-panel-corner cyber-corner-tl" />
                <span className="cyber-panel-corner cyber-corner-tr" />
                <span className="cyber-panel-corner cyber-corner-bl" />
                <span className="cyber-panel-corner cyber-corner-br" />

                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <div key={link.label} className="flex flex-col items-center text-center group">
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="relative w-14 h-14 rounded-full flex items-center justify-center border border-slate-200/50 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20 transition-all duration-300 hover:border-[var(--accent)] hover:bg-accent/5 hover:shadow-md"
                        >
                          {/* Corner Brackets */}
                          <span className="cyber-panel-corner cyber-corner-tl" />
                          <span className="cyber-panel-corner cyber-corner-tr" />
                          <span className="cyber-panel-corner cyber-corner-bl" />
                          <span className="cyber-panel-corner cyber-corner-br" />

                          <Icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                        </a>
                        <span className="text-[10px] font-mono text-primary font-bold mt-2 group-hover:text-accent transition-colors leading-none">
                          {link.label}
                        </span>
                        <span className="text-[8px] font-mono text-secondary mt-1 max-w-[110px] truncate leading-none">
                          {link.address}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Console: Message Transmitter (Form) */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-7 cyber-panel p-5 lg:p-6 flex flex-col justify-between shadow-sm bg-slate-50/45 dark:bg-slate-950/20"
            >
              {/* Corner brackets */}
              <span className="cyber-panel-corner cyber-corner-tl" />
              <span className="cyber-panel-corner cyber-corner-tr" />
              <span className="cyber-panel-corner cyber-corner-bl" />
              <span className="cyber-panel-corner cyber-corner-br" />

              <div>
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                      MESSAGE TRANSMITTER [TX_MODE]
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-secondary">SECURE_SSL: ON</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1 tracking-wider">
                      INPUT_PARAM_01: sender_name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ragavan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-[var(--accent)] dark:focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1 tracking-wider">
                      INPUT_PARAM_02: sender_email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ragavvenkat269@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-[var(--accent)] dark:focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1 tracking-wider">
                      INPUT_PARAM_03: payload_content
                    </label>
                    <textarea
                      required
                      rows="5"
                      placeholder="Enter message details..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-[var(--accent)] dark:focus:border-[var(--accent)] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`relative w-full py-2.5 px-4 border text-xs font-mono font-bold uppercase transition-all duration-300 rounded-lg flex items-center justify-center gap-2 overflow-hidden ${
                      status === 'sending'
                        ? 'border-slate-300 bg-slate-100 text-secondary dark:bg-slate-800 dark:text-slate-400'
                        : 'border-[var(--accent)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 hover:shadow-md'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <span className="scanner-sweep" />
                        Transmit Packet <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                    {status === 'sending' && 'TRANSCEIVING_DATA...'}
                    {status === 'success' && 'PACKET_TRANSMITTED_SUCCESSFULLY'}
                  </button>
                </form>
              </div>

              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-2.5 mt-4.5 text-[9px] font-mono text-secondary flex justify-between">
                <span>BUFFER_STATUS: STABLE</span>
                <span>SYS_READY_OK</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

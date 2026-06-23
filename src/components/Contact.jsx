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
    href: 'mailto:ragavan@example.com',
    icon: Mail,
    log: 'COMMS_CHANNEL: READY',
    address: 'ragavan@example.com'
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
    <section id="contact" className="section-shell min-h-screen flex items-center bg-surface scroll-mt-0 relative overflow-hidden py-16 lg:py-24">
      {/* HUD scanning background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--accent-surface)_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      <div className="section-inner relative z-10 w-full">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={controls}>
          <motion.div variants={fadeUp} className="mb-10 text-center lg:text-left">
            <p className="section-kicker">Quantum Transceiver</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary">Establish Connection</h2>
            <p className="mt-1.5 text-sm text-secondary max-w-xl font-sans leading-relaxed">
              Initiate communication channels. Send a secure message payload directly or link through the terminal channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Console: Message Transmitter (Form) */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-7 cyber-panel p-6 lg:p-8 flex flex-col justify-between shadow-sm bg-slate-50/45 dark:bg-slate-950/20"
            >
              {/* Corner brackets */}
              <span className="cyber-panel-corner cyber-corner-tl" />
              <span className="cyber-panel-corner cyber-corner-tr" />
              <span className="cyber-panel-corner cyber-corner-bl" />
              <span className="cyber-panel-corner cyber-corner-br" />

              <div>
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                      MESSAGE TRANSMITTER [TX_MODE]
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-secondary">SECURE_SSL: ON</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1.5 tracking-wider">
                      INPUT_PARAM_01: sender_name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-accent dark:focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1.5 tracking-wider">
                      INPUT_PARAM_02: sender_email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-accent dark:focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-secondary uppercase block mb-1.5 tracking-wider">
                      INPUT_PARAM_03: payload_content
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Enter message details..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-primary border border-slate-200/60 dark:border-slate-800 rounded-lg bg-white/50 dark:bg-slate-950/30 focus:border-accent dark:focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`relative w-full py-3 px-4 border text-xs font-mono font-bold uppercase transition-all duration-300 rounded-lg flex items-center justify-center gap-2 overflow-hidden ${
                      status === 'sending'
                        ? 'border-slate-300 bg-slate-100 text-secondary'
                        : 'border-accent bg-accent text-white dark:bg-white dark:text-slate-950 hover:bg-opacity-90 hover:shadow-md'
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

              <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-3 mt-6 text-[9px] font-mono text-secondary flex justify-between">
                <span>BUFFER_STATUS: STABLE</span>
                <span>SYS_READY_OK</span>
              </div>
            </motion.div>

            {/* Right Console: Connection Channels (Directory) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
              <span className="text-[10px] font-bold tracking-widest text-secondary uppercase px-2 mb-0.5 block lg:hidden">
                Terminal Channels
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="relative flex items-center gap-4 rounded-xl border border-slate-200/50 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20 p-4 transition-all duration-300 hover:border-accent hover:shadow-md group flex-1"
                    >
                      {/* Corner Brackets */}
                      <span className="cyber-panel-corner cyber-corner-tl" />
                      <span className="cyber-panel-corner cyber-corner-tr" />
                      <span className="cyber-panel-corner cyber-corner-bl" />
                      <span className="cyber-panel-corner cyber-corner-br" />

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-primary group-hover:text-accent transition-colors leading-none">
                            {link.label}
                          </h4>
                          <span className="text-[8px] font-mono text-secondary/60 shrink-0">
                            {link.log}
                          </span>
                        </div>
                        <p className="text-[10px] font-mono text-secondary mt-1.5 truncate">
                          {link.address}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

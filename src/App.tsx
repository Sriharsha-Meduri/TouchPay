/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  WifiOff, Smartphone, ShieldCheck, Lock, 
  ChevronDown, ChevronUp, ArrowRight, CheckCircle2,
  Fingerprint, Zap, History, Shield, Sun, Moon
} from 'lucide-react';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const DashboardMockup = () => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="w-full rounded-2xl border border-white/10 bg-bg overflow-hidden shadow-2xl shadow-accent/5 relative group"
  >
    {/* Subtle animated glow behind mockup */}
    <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
    
    <div className="relative bg-bg">
      {/* Top bar */}
      <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/50" />
        </div>
        <div className="mx-auto h-5 w-48 bg-white/5 rounded-md flex items-center justify-center">
          <span className="text-[10px] text-gray-500">touchpay.app/dashboard</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="hidden md:block col-span-3 space-y-4 border-r border-white/5 pr-6">
          <div className="flex items-center gap-2 mb-8 text-white font-medium">
            <Fingerprint className="text-accent" size={20} />
            Dashboard
          </div>
          {[
            { icon: History, label: 'Transactions', active: true },
            { icon: ShieldCheck, label: 'Security', active: false },
            { icon: Smartphone, label: 'Devices', active: false },
            { icon: Lock, label: 'Settings', active: false },
          ].map((item, i) => (
            <motion.div 
              whileHover={{ x: 4 }}
              key={i} 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${item.active ? 'bg-accent/10 text-accent' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon size={18} />
              {item.label}
            </motion.div>
          ))}
        </div>
        {/* Main */}
        <div className="col-span-1 md:col-span-9 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                Available Balance 
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="w-2 h-2 rounded-full bg-green-500" 
                />
              </div>
              <div className="text-4xl md:text-5xl font-medium text-white flex items-center gap-4">
                ₹1,450.00
                <span className="text-sm px-2 py-1 rounded bg-green-500/20 text-green-400 font-medium flex items-center gap-1">
                  <ArrowRight size={14} className="-rotate-45" /> 2.8%
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Withdraw
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 bg-accent text-black hover:bg-accent/90 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(212,248,112,0.3)]"
              >
                Add Funds
              </motion.button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Offline Limit', value: '₹2,000', sub: '₹500 used', color: 'bg-accent' },
              { label: 'Monthly Spent', value: '₹12,450', sub: '+14% from last month', color: 'bg-blue-400' },
              { label: 'Pending Sync', value: '3 txns', sub: 'Waiting for network', color: 'bg-yellow-400' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.15)' }}
                className="bg-surface border border-white/5 rounded-xl p-5 flex flex-col justify-between transition-colors"
              >
                <div className="text-sm text-gray-400 mb-4">{stat.label}</div>
                <div>
                  <div className="text-2xl font-medium text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${stat.color}`} />
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-surface border border-white/5 rounded-xl p-6">
             <div className="flex justify-between items-center mb-6">
               <div className="text-white font-medium">Spending Overview</div>
               <div className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">This Month</div>
             </div>
             {/* Mock Chart */}
             <div className="h-48 w-full flex items-end gap-2">
               {[...Array(30)].map((_, i) => {
                 const height = Math.random() * 60 + 20;
                 const isAccent = i === 24;
                 return (
                   <div key={i} className="flex-1 group relative h-full flex items-end">
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: `${height}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: i * 0.02, ease: "easeOut" }}
                       className={`w-full rounded-t-sm transition-colors duration-300 ${isAccent ? 'bg-accent shadow-[0_0_10px_rgba(212,248,112,0.5)]' : 'bg-white/10 group-hover:bg-white/30'}`} 
                     />
                     {isAccent && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.8 }}
                         className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-10"
                       >
                         ₹320
                       </motion.div>
                     )}
                   </div>
                 );
               })}
             </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -8 }}
    className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors relative z-10">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-white mb-3 relative z-10">{title}</h3>
    <p className="text-gray-400 leading-relaxed relative z-10">{desc}</p>
  </motion.div>
);

const BentoCard = ({ title, desc, children, className = '' }: { title: string, desc: string, children?: React.ReactNode, className?: string }) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ scale: 1.02 }}
    className={`p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col group ${className}`}
  >
    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    <div className="mt-auto">
      {children}
    </div>
  </motion.div>
);

const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
  <div className="border-b border-white/10">
    <button 
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent text-black shadow-[0_0_10px_rgba(212,248,112,0.4)]' : 'bg-white/5 text-white group-hover:bg-white/10'}`}>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </div>
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white group-hover:text-gray-200'}`}>{title}</span>
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 pl-12 text-gray-400 leading-relaxed">
            {content}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const PricingCard = ({ title, desc, price, features, isPopular }: any) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -10 }}
    className={`p-8 rounded-2xl border transition-all duration-300 ${isPopular ? 'bg-surface2 border-accent/50 relative shadow-[0_0_30px_rgba(212,248,112,0.1)]' : 'bg-surface border-white/5 hover:border-white/20'} flex flex-col`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(212,248,112,0.4)]">
        Most Popular
      </div>
    )}
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-8 h-8 rounded flex items-center justify-center ${isPopular ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white'}`}>
        <Zap size={16} />
      </div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm mb-6">{desc}</p>
    <div className="mb-8">
      <span className="text-4xl font-medium text-white">{price}</span>
      {price !== 'Custom' && <span className="text-gray-400 text-sm"> / month</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f: string, i: number) => (
        <motion.li 
          key={i} 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-sm text-gray-300"
        >
          <CheckCircle2 size={16} className="text-accent shrink-0" />
          {f}
        </motion.li>
      ))}
    </ul>
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-3 rounded-lg font-medium transition-colors ${isPopular ? 'bg-accent text-black hover:bg-accent/90 shadow-[0_0_15px_rgba(212,248,112,0.3)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-white/10">
    <button 
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className={`text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white group-hover:text-gray-200'}`}>{question}</span>
      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }} 
        transition={{ duration: 0.3 }}
        className={`shrink-0 ${isOpen ? 'text-accent' : 'text-gray-500 group-hover:text-white'}`}
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-gray-400 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function App() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const navItems = [
    { label: 'Overview', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '#about' },
  ];

  const teamMembers = [
    {
      name: 'Santosh Srighakollapu',
      role: 'Founder & CEO',
      photo: '/team/srighakollapu-santosh.jpeg',
      photoX: 60,
      photoY: 52,
      photoZoom: 1.3,
    },
    {
      name: 'Ranjit Singh',
      role: 'Co founder & COO',
      photo: '/team/ranjit-singh.jpeg',
      photoX: 10,
      photoY: 52,
      photoZoom: 2,
    },
    {
      name: 'Sriharsha Meduri',
      role: 'Co founder & CTO',
      photo: '/team/sriharsha-meduri.jpeg',
      photoX: 77,
      photoY: 110,
      photoZoom: 3.5,
      noCrop: true,
    },
    {
      name: 'Ratna Sai Sree',
      role: 'UI UX designer',
      photo: '/team/ratna-sai-sree.jpeg',
      photoX: 50,
      photoY: 52,
      photoZoom: 1.2,
    },
    {
      name: 'Shaik Sameena',
      role: 'Research & design',
      photo: '/team/shaik-sameena.jpeg',
      photoX: 44,
      photoY: 42,
      photoZoom: 1.2,
    },
    {
      name: 'Sree Vardhan',
      role: 'Founding Engineer',
      photo: '/team/sree-vardhan.jpeg',
      photoX: 50,
      photoY: 32,
      photoZoom: 1.6,
    },
  ];

  const testimonials = [
    {
      quote:
        "I've tried nearly every UPI app, but TouchPay is the first one that feels truly designed to streamline everyday payments. No more waiting for OTPs or scanning QR codes.",
      name: 'Rahul Sharma',
      role: 'Daily Commuter',
      avatar: 'https://picsum.photos/seed/mainuser/200/200',
    },
    {
      quote:
        'My kirana customers complete payments in seconds even when network drops. The offline queue has reduced failed checkouts during rush hours.',
      name: 'Ananya Patel',
      role: 'Store Owner',
      avatar: 'https://picsum.photos/seed/mainuser2/200/200',
    },
    {
      quote:
        'Fingerprint + PIN fallback gives exactly the balance I wanted: speed for regular rides and safety when my phone is shared at home.',
      name: 'Imran Khan',
      role: 'Auto Driver',
      avatar: 'https://picsum.photos/seed/mainuser3/200/200',
    },
    {
      quote:
        'The privacy-first design is what sold me. I can pay quickly without exposing phone number details to every merchant interaction.',
      name: 'Sneha Iyer',
      role: 'Graduate Student',
      avatar: 'https://picsum.photos/seed/mainuser4/200/200',
    },
    {
      quote:
        'TouchPay made micro-payments on campus frictionless. Students now finish transactions faster than cash and with fewer disputes.',
      name: 'Arjun Mehta',
      role: 'Campus Admin',
      avatar: 'https://picsum.photos/seed/mainuser5/200/200',
    },
  ];

  const faqs = [
    { q: 'Does the merchant need an app?', a: 'No, the merchant needs no app, no device, and no QR code. They just tell you the amount verbally or write it down.' },
    { q: "What if I don't have internet?", a: 'TouchPay works offline with strict limits up to ₹500 per transaction and a total of ₹2,000 pending. It automatically syncs when you are back online.' },
    { q: 'Is my fingerprint safe?', a: "Yes, your fingerprint never leaves your phone's secure hardware. The server only verifies a cryptographic signature, not the fingerprint itself." },
    { q: 'What if the fingerprint fails?', a: 'After 3 failed biometric attempts, the app will ask for your 4-digit PIN. After 3 failed PIN attempts, the account locks for your security.' },
    { q: 'Can I track pending offline payments?', a: 'Yes. The app clearly marks queued, synced, and failed transactions so you always know what still needs internet confirmation.' },
    { q: 'How are failed payments handled?', a: 'If sync fails due to low balance, duplicate request, or policy checks, the app marks it failed and lets you retry safely once resolved.' },
    { q: 'Can I use TouchPay on multiple phones?', a: 'For security, your account is bound to your enrolled device and secure hardware. Device migration requires secure re-enrollment.' },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', isLightMode);
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="touchpay-app min-h-screen font-sans bg-bg overflow-x-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="app-nav-container container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 group cursor-pointer">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Fingerprint className="text-accent" />
            </motion.div>
            TouchPay
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-accent transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLightMode((prev) => !prev)}
              className="theme-toggle w-10 h-10 rounded-lg border border-white/10 text-white flex items-center justify-center transition-colors"
              aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="nav-cta px-5 py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" 
        />

        {/* Floating Elements Left */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[8%] hidden lg:flex flex-col items-center opacity-70 z-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
            <Fingerprint className="text-accent w-8 h-8" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-80 left-[15%] hidden lg:flex flex-col items-center opacity-50 z-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
            <WifiOff className="text-white w-8 h-8" />
          </div>
        </motion.div>

        {/* Floating Elements Right */}
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-32 right-[8%] hidden lg:flex flex-col items-center opacity-70 z-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-md shadow-2xl">
            <span className="text-3xl font-bold text-accent">₹</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-72 right-[12%] hidden lg:flex flex-col items-center opacity-50 z-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center relative"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/10 mb-8 hover:border-accent/30 transition-colors cursor-pointer">
              <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 rounded-full text-accent">New</span>
              <span className="text-sm text-gray-300">Launching a revolution </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="hero-title text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white">
              Pay with your <br />
              <span className="font-serif italic text-accent inline-block">Fingerprint</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="hero-subtitle text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              A mobile payment app that lets you pay merchants using only your fingerprint. No phone number, no OTP, no internet needed.
            </motion.p>
            
            <motion.div variants={fadeUp} className="hero-actions flex flex-wrap items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,248,112,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-lg bg-accent text-black font-medium transition-all"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 rounded-lg font-medium transition-all border ${
                  isLightMode
                    ? 'bg-surface border-border text-text hover:bg-hover shadow-sm'
                    : 'bg-surface border-white/10 text-white hover:bg-white/10'
                }`}
              >
                Learn more
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="hero-mockup mt-20 max-w-5xl mx-auto px-6 relative z-10">
          <DashboardMockup />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Everything you need to <br />
              get <span className="font-serif italic text-accent">Payments Done</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-md">
              Enhance your daily transactions with TouchPay, the ultimate payment platform that simplifies your financial life.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <FeatureCard 
              icon={<WifiOff className="text-accent" />}
              title="No Internet Needed"
              desc="Works even when your phone has no internet. Offline mode with strict limits up to ₹500 per transaction."
            />
            <FeatureCard 
              icon={<Smartphone className="text-accent" />}
              title="No Merchant App"
              desc="Merchant needs no app, no device, no QR code. Just tells the amount verbally or writes it down."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-accent" />}
              title="High Privacy"
              desc="No phone number required for transactions. Your biometric template never leaves your phone."
            />
            <FeatureCard 
              icon={<Lock className="text-accent" />}
              title="Hardware Secured"
              desc="Payment is cryptographically signed with a private key stored in your phone's secure hardware."
            />
          </motion.div>
        </div>
      </section>

      {/* Bento */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">Some of features</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
              We revolutionize your <br />
              <span className="font-serif italic text-accent">Payment Workflow</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
              Elevate your financial management with TouchPay, the cutting-edge payment software created to streamline your life.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <BentoCard 
              title="Enroll Once" 
              desc="Name, fingerprint, and a 4-digit PIN is all you need."
              className="md:col-span-1"
            >
              <div className="h-32 w-full bg-white/5 rounded-xl mt-6 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
                <Fingerprint className="w-12 h-12 text-accent/50 relative z-10" />
                {/* Scanning line animation */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-accent/80 shadow-[0_0_10px_rgba(212,248,112,0.8)] z-20"
                />
              </div>
            </BentoCard>
            
            <BentoCard 
              title="Instant Online Payments" 
              desc="Merchant says amount, you scan finger, payment done."
              className="md:col-span-1"
            >
              <div className="h-32 w-full bg-white/5 rounded-xl mt-6 p-4 flex items-end gap-2 group-hover:bg-white/10 transition-colors">
                 {[...Array(10)].map((_, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ height: '20%' }}
                     whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                     transition={{ duration: 0.5, delay: i * 0.05 }}
                     className="flex-1 bg-accent/20 group-hover:bg-accent/40 rounded-t-sm transition-colors" 
                   />
                 ))}
              </div>
            </BentoCard>
            
            <BentoCard 
              title="Offline Queue" 
              desc="Saves transactions locally, syncs when online."
              className="md:col-span-1"
            >
              <div className="h-32 w-full bg-white/5 rounded-xl mt-6 p-4 flex flex-col gap-3 justify-center group-hover:bg-white/10 transition-colors">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="h-6 w-full bg-white/10 rounded flex items-center px-3 gap-3"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="w-2 h-2 rounded-full bg-accent" 
                    />
                    <div className="h-2 w-16 bg-white/20 rounded" />
                  </motion.div>
                ))}
              </div>
            </BentoCard>
            
            <BentoCard 
              title="Strict Safety Limits" 
              desc="Max ₹500 per offline tx, max ₹2000 total pending."
              className="md:col-span-2"
            >
              <div className="h-40 w-full bg-white/5 rounded-xl mt-6 p-6 flex items-center gap-8 group-hover:bg-white/10 transition-colors">
                <div className="w-24 h-24 rounded-full border-4 border-white/10 border-t-accent flex items-center justify-center relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-4px] rounded-full border-4 border-transparent border-t-accent/50"
                  />
                  <span className="text-white font-medium text-xl">₹500</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '25%' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }} />
                    </motion.div>
                  </div>
                  <div className="text-sm text-gray-400 flex justify-between">
                    <span>₹500 Used</span>
                    <span>₹2000 Limit</span>
                  </div>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard 
              title="Fraud Prevention" 
              desc="Velocity checks and anomaly detection keep you safe."
              className="md:col-span-1"
            >
              <div className="h-40 w-full bg-white/5 rounded-xl mt-6 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-white/10 transition-colors">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute"
                 >
                   <Shield className="w-24 h-24 text-accent" />
                 </motion.div>
                 <div className="relative z-10 text-center bg-surface/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                   <div className="text-xl font-medium text-white mb-1">Active</div>
                   <div className="text-xs text-accent flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                     Monitoring
                   </div>
                 </div>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight mb-12">
                Easily manage your <br />
                <span className="font-serif italic text-accent">Transactions</span>
              </motion.h2>
              
              <motion.div variants={fadeUp} className="space-y-2">
                <AccordionItem 
                  title="View History" 
                  content="Access a complete list of your transactions including date, amount, merchant details, and current status (completed, pending, or failed)."
                  isOpen={openAccordion === 0}
                  onClick={() => setOpenAccordion(0)}
                />
                <AccordionItem 
                  title="Pending & Failed" 
                  content="Easily track payments that are queued offline or those that were rejected during sync due to insufficient balance or fraud rules."
                  isOpen={openAccordion === 1}
                  onClick={() => setOpenAccordion(1)}
                />
                <AccordionItem 
                  title="PIN Fallback" 
                  content="If biometric authentication fails 3 times, the app securely falls back to your 4-digit PIN. After 3 failed PINs, the account locks for your safety."
                  isOpen={openAccordion === 2}
                  onClick={() => setOpenAccordion(2)}
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-accent blur-[100px] rounded-full pointer-events-none" 
              />
              <div className="relative bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-white/20 transition-colors">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-lg font-medium text-white">Recent Transactions</div>
                  <div className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">This Month</div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Kirana Store', amount: '₹320', status: 'Completed', time: 'Today, 10:42 AM' },
                    { name: 'Tea Stall', amount: '₹40', status: 'Pending', time: 'Today, 09:15 AM' },
                    { name: 'Auto Rickshaw', amount: '₹150', status: 'Completed', time: 'Yesterday, 06:30 PM' },
                    { name: 'Supermarket', amount: '₹850', status: 'Completed', time: 'Yesterday, 02:10 PM' },
                  ].map((tx, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <History size={18} className="text-gray-400" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{tx.name}</div>
                          <div className="text-xs text-gray-400">{tx.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">{tx.amount}</div>
                        <div className={`text-xs flex items-center justify-end gap-1 ${tx.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {tx.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />}
                          {tx.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split */}
      <section id="security" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <motion.div 
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-accent blur-[100px] rounded-full pointer-events-none" 
              />
              <div className="relative bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center min-h-[400px] group hover:border-accent/30 transition-colors">
                <div className="relative w-48 h-48 mb-8">
                  <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border-4 border-dashed border-accent/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <ShieldCheck className="w-16 h-16 text-accent drop-shadow-[0_0_15px_rgba(212,248,112,0.5)]" />
                  </motion.div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-white mb-2 group-hover:text-accent transition-colors">Hardware Secured</div>
                  <div className="text-gray-400 bg-white/5 px-4 py-1.5 rounded-full text-sm inline-block">ECDSA P-256 (secp256r1)</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
                Take control of your <br />
                <span className="font-serif italic text-accent">Security</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 mb-10 leading-relaxed">
                Empower your financial privacy with the leading payment platform designed to protect your data. Server never sees your fingerprint or private key.
              </motion.p>
              
              <ul className="space-y-6">
                {[
                  'Fingerprint never leaves the phone (uses built-in biometric hardware).',
                  'Payment is cryptographically signed with a private key stored in secure enclave.',
                  'Every transaction has a unique client-generated ID to prevent replay attacks.',
                  'Server always has final say on balance; client balance is only for fast UI.'
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(212,248,112,0.8)]" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">Pricing Plan</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight">
              A Simple <span className="font-serif italic text-accent">Pricing Plan</span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <PricingCard 
              title="User Plan"
              desc="Perfect for everyday payments"
              price="₹0"
              features={[
                'Lifetime updates',
                'Offline payments up to ₹500',
                'High privacy protection',
                'Biometric authentication',
                'Basic transaction history'
              ]}
            />
            <PricingCard 
              title="Merchant Plan"
              desc="For small shops and vendors"
              price="₹0"
              isPopular
              features={[
                'No app required',
                'Instant settlement',
                'Zero transaction fees',
                'Voice confirmation',
                'Daily summary reports'
              ]}
            />
            <PricingCard 
              title="Enterprise Plan"
              desc="For large scale operations"
              price="Custom"
              features={[
                'Custom offline limits',
                'Admin dashboard',
                'Priority 24/7 support',
                'Advanced fraud rules',
                'API integrations'
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[100px] pointer-events-none" 
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">Testimonials</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight mb-20">
              Loved by thousands of <br />
              <span className="font-serif italic text-accent">Everyday Users</span>
            </motion.h2>
            
            <div className="max-w-3xl mx-auto relative z-10">
              {/* Floating avatars */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-20 top-0 w-12 h-12 rounded-full bg-surface border border-white/10 overflow-hidden shadow-lg shadow-accent/5">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover opacity-80" />
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-10 top-20 w-16 h-16 rounded-full bg-surface border border-white/10 overflow-hidden shadow-lg shadow-accent/5">
                <img src="https://picsum.photos/seed/user2/100/100" alt="User" className="w-full h-full object-cover opacity-80" />
              </motion.div>
              <motion.div animate={{ y: [-5, 15, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-10 bottom-10 w-14 h-14 rounded-full bg-surface border border-white/10 overflow-hidden shadow-lg shadow-accent/5">
                <img src="https://picsum.photos/seed/user3/100/100" alt="User" className="w-full h-full object-cover opacity-80" />
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[activeTestimonial].name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-surface border-2 border-accent overflow-hidden mb-8 shadow-[0_0_20px_rgba(212,248,112,0.3)]">
                    <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                    “{testimonials[activeTestimonial].quote}”
                  </p>

                  <div>
                    <div className="text-accent font-medium text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-8">
                <motion.button whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.9 }} onClick={handlePrevTestimonial} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors" aria-label="Previous testimonial">
                  <ArrowRight className="rotate-180" size={18} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.9 }} onClick={handleNextTestimonial} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors" aria-label="Next testimonial">
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">Asked Question</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Frequently asked <span className="font-serif italic text-accent">Questions</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mt-6">
              Empower your financial management with the leading payment software platform designed to streamline your life.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-2"
          >
            {faqs.map((faq, i) => (
              <motion.div variants={fadeUp} key={i}>
                <FAQItem 
                  question={`${String(i + 1).padStart(2, '0')} ${faq.q}`}
                  answer={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">About Us</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
              Built by a focused <span className="font-serif italic text-accent">TouchPay Team</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
              The people behind TouchPay who designed, built, and shipped this project.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-surface border border-white/10 rounded-2xl p-6 text-center hover:border-accent/30 transition-colors"
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-accent/60 mb-5 shadow-[0_0_20px_rgba(212,248,112,0.15)]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={`w-full h-full ${member.noCrop ? 'object-contain' : 'object-cover'}`}
                    style={{
                      backgroundColor: member.noCrop ? 'var(--color-surface2-val)' : 'transparent',
                      objectPosition: member.noCrop ? 'center' : 'center',
                      transform: `translate(${member.photoX - 50}%, ${member.photoY - 50}%) scale(${member.photoZoom})`,
                      transformOrigin: 'center center',
                    }}
                  />
                </div>
                <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent rounded-t-full blur-[120px] pointer-events-none" 
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-accent text-sm font-medium mb-4 tracking-wider uppercase">Get Started Today</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
              Join the users who <br />
              pay <span className="font-serif italic text-accent">With a Touch</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto mb-16">
              Optimize your financial management with the leading payment software platform designed to streamline your daily transactions.
            </motion.p>
            
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
              <DashboardMockup />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-5">
              <h3 className="text-2xl font-medium text-white mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-6 max-w-sm">
                Join our newsletter for tips, updates, and project highly on the good stuff.
              </p>
              <div className="newsletter-form flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="flex-1 bg-surface border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-black px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(212,248,112,0.2)]"
                >
                  Subscribe <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-white font-medium mb-6">Platform</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-accent transition-colors">Analytics</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Planning</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Collaboration</a></li>
                <li><a href="#features" className="hover:text-accent transition-colors">Data management</a></li>
                <li><a href="#security" className="hover:text-accent transition-colors">Integrations</a></li>
                <li><a href="#security" className="hover:text-accent transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Customers</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Strategic finance</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Ebook & guides</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Webinars & events</a></li>
                <li><a href="#home" className="hover:text-accent transition-colors">Podcast & video</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6">Solutions</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#pricing" className="hover:text-accent transition-colors">Financial</a></li>
                <li><a href="#security" className="hover:text-accent transition-colors">Investors & CEOs</a></li>
                <li><a href="#features" className="hover:text-accent transition-colors">Revenue operation</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Sales & marketing</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Human resources</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-white/5 pt-12 relative overflow-hidden">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[15vw] font-bold text-white/[0.08] leading-none tracking-tighter select-none mb-8"
            >
              TouchPay
            </motion.h1>
            <p className="text-gray-500 text-sm">
              All rights reserved, {new Date().getFullYear()} powered by TouchPay
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

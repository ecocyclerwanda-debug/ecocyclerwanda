/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Sprout,
  Recycle,
  Heart,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Globe,
  Award,
  Zap,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
  Package,
  ShoppingCart,
  FileText,
  CheckCircle,
} from 'lucide-react';
import { Page, NavItem } from './types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import logoImg from './assets/logo.png';
import samImg from './assets/SAM.jpg';
import winnerImg from './assets/winner.jpg';
import aurelieImg from './assets/aurelie.jpg';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TopBar = () => {
  return (
    <div className="bg-emerald-900 text-white py-2 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-emerald-400" />
            <a
              href="mailto:ecocyclerwandaltd@gmail.com"
              className="hover:text-emerald-400 transition-colors"
            >
              ecocyclerwandaltd@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-emerald-400" />
            <a
              href="tel:+250788963938"
              className="hover:text-emerald-400 transition-colors"
            >
              +250 788 963 938
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={14} className="text-emerald-400" />
            <a
              href="https://wa.me/250788963938"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60">Follow us:</span>
          <a
            href="https://www.facebook.com/EcoCycleRwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Facebook size={14} />
          </a>
          <a
            href="https://www.instagram.com/ecocyclerwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Instagram size={14} />
          </a>
          <a
            href="https://www.linkedin.com/company/ecocyclerwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="https://x.com/EcoCycleRwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Twitter size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'products' },
    { label: 'Projects', id: 'projects' },
    { label: 'Impact', id: 'impact' },
    { label: 'Partners', id: 'partners' },
    { label: 'News', id: 'news' },
    { label: 'Donate', id: 'donate' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#fcfcf7]/90 backdrop-blur-md border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <img
              src={logoImg}
              alt="EcoCycle Rwanda Logo"
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-emerald-500',
                  currentPage === item.id
                    ? 'text-emerald-900 border-b-2 border-emerald-900'
                    : 'text-slate-600'
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-800 transition-all shadow-md"
            >
              Get in Touch
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#fcfcf7] border-b border-emerald-900/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'block w-full text-left px-3 py-4 text-base font-medium rounded-md',
                    currentPage === item.id
                      ? 'bg-emerald-900/10 text-emerald-900'
                      : 'text-slate-600 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-center gap-8 py-6 border-t border-emerald-900/5 mt-4">
                <a
                  href="https://www.facebook.com/EcoCycleRwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-500 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/ecocyclerwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-500 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ecocyclerwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/EcoCycleRwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-500 transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src={logoImg}
                alt="EcoCycle Rwanda Logo"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Empowering youth, women, and persons with disabilities through
              sustainable agriculture and circular economy solutions in Rwanda.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/EcoCycleRwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ecocyclerwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ecocyclerwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/EcoCycleRwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-emerald-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-emerald-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-emerald-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('projects')} className="hover:text-emerald-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('donate')} className="hover:text-emerald-400 transition-colors">
                  Donate
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-emerald-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-emerald-400 shrink-0" />
                <span>Bugesera District, Rwanda</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <a href="tel:+250788963938" className="hover:text-emerald-400 transition-colors">
                  +250 788 963 938
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle size={18} className="text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/250788963938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span>ecocyclerwandaltd@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">
              Subscribe to our updates for the latest news and impact stories.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-emerald-400"
              />
              <button
                type="button"
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} EcoCycle Rwanda. All rights reserved.</p>
          <p>Regenerating Agriculture. Empowering Communities. Including Everyone.</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const stats = [
    { label: 'Hectares of soil restored', value: '500+' },
    { label: 'Youth trained', value: '800+' },
    { label: 'Women engaged', value: '600+' },
    { label: 'PWD participants supported', value: '150+' },
  ];

  const services = [
    { title: 'Crop & Horticulture', icon: <Sprout className="w-8 h-8" /> },
    { title: 'Livestock Integration', icon: <Users className="w-8 h-8" /> },
    { title: 'Compost Processing', icon: <Recycle className="w-8 h-8" /> },
    { title: 'Circular Solutions', icon: <Globe className="w-8 h-8" /> },
    { title: 'Empowerment', icon: <Heart className="w-8 h-8" /> },
    { title: 'Inclusion Programs', icon: <Award className="w-8 h-8" /> },
  ];

  return (
    <div className="space-y-24 pb-24">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&q=80&w=1920"
            alt="Lush Rwandan Landscape"
            className="w-full h-full object-cover brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-transparent to-emerald-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block px-6 py-2 bg-emerald-400/20 backdrop-blur-xl border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-black tracking-[0.3em] uppercase mb-12">
              EcoCycle Rwanda
            </span>

            <div className="space-y-2 md:space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white drop-shadow-2xl">
                Regenerating Agriculture.
              </h1>
              <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-emerald-300 drop-shadow-xl">
                Empowering Communities.
              </h2>
              <h3 className="text-lg md:text-2xl font-bold leading-tight tracking-normal text-emerald-100/80">
                Including Everyone.
              </h3>
            </div>

            <p className="text-lg md:text-xl mt-10 text-slate-100 font-light max-w-2xl leading-relaxed drop-shadow-lg">
              Leading the transition to climate-smart circular farming. We restore
              ecosystems while creating opportunities for youth, women, and persons
              with disabilities.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-2xl group"
              >
                Our Products <Package size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-3 group"
              >
                About Us <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-10 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50"
            >
              <div className="text-5xl font-bold text-emerald-900 mb-3">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                What We Do
              </span>
              <h2 className="text-5xl font-bold text-emerald-900 leading-tight">
                Integrated Solutions for Sustainable Growth
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-8 py-4 bg-emerald-900/5 text-emerald-900 rounded-2xl font-bold hover:bg-emerald-900 hover:text-white transition-all flex items-center gap-2"
            >
              View All Services <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-[#fcfcf7] p-10 rounded-[2.5rem] border border-emerald-900/5 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-emerald-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Innovative approaches designed to maximize productivity while
                  preserving our natural resources.
                </p>
                <div className="w-12 h-1 bg-emerald-400/30 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Updates
            </span>
            <h2 className="text-5xl font-bold text-emerald-900">Latest From The Field</h2>
          </div>
          <button
            onClick={() => setCurrentPage('news')}
            className="hidden md:flex items-center gap-3 text-emerald-900 font-bold hover:text-emerald-500 group"
          >
            Explore All News <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative">
                <img
                  src={`https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800&sig=${i}`}
                  alt="News"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-bold flex items-center gap-2">
                    Read Article <ArrowRight size={18} />
                  </span>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-emerald-900 text-xs font-bold shadow-lg">
                  MARCH {i}, 2026
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-500 transition-colors leading-tight">
                EcoCycle Rwanda launches new circular farming initiative in Bugesera
              </h3>
              <p className="text-slate-500 leading-relaxed line-clamp-2">
                Our latest project aims to transform organic waste into high-quality
                compost for local farmers, creating a sustainable loop...
              </p>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage('news')}
          className="md:hidden mt-12 w-full py-5 bg-emerald-900 text-white rounded-2xl font-bold"
        >
          View All News
        </button>
      </section>
    </div>
  );
};

const AboutPage = () => {
  const leaders = [
    {
      name: 'Eng. Samuel NIYIBIZI',
      role: 'Chief Executive Officer',
      bio: 'A visionary leader and professional engineer dedicated to transforming agriculture through sustainable innovation and inclusive growth.',
      image: samImg,
    },
    {
      name: 'SHAMI Winner Igor',
      role: 'Operations Director',
      bio: 'Expert in circular economy and community engagement.',
      image: winnerImg,
    },
    {
      name: 'Aurelie NYIRANSABMANA',
      role: 'Inclusion Specialist',
      bio: 'Focus on empowering women, youth, and persons with disabilities in farming.',
      image: aurelieImg,
    },
  ];

  return (
    <div className="pb-24">
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1920"
            alt="About Us"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold">About EcoCycle Rwanda</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Vision</h2>
              <p className="text-xl text-slate-600 italic leading-relaxed">
                "To become a leading climate-smart circular agriculture enterprise in
                Rwanda, regenerating land, enhancing livelihoods, and empowering
                youth, women, and PWD."
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver integrated agricultural, environmental, and value-chain
                solutions that enhance productivity, restore ecosystems, and empower
                youth, women, and persons with disabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {['Sustainability', 'Inclusion & Equity', 'Innovation', 'Transparency', 'Collaboration'].map(
                (val) => (
                  <div key={val} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="font-medium text-slate-700">{val}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1000"
              alt="Team"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold mb-1">RDB Registered</div>
              <div className="text-emerald-300 text-sm">Official Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Leadership Team</h2>
            <p className="text-slate-500">Dedicated professionals driving inclusion and sustainability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leaders.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-900/5 group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-1">{member.name}</h3>
                  <div className="text-emerald-500 font-medium mb-4">{member.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Integrated Farming Systems',
      desc: 'Mixed crop and livestock production using conservation agriculture techniques. Inclusive training for youth, women, and PWD.',
      icon: <Sprout className="w-10 h-10" />,
    },
    {
      title: 'Climate-Smart Agriculture',
      desc: 'Soil health programs and water-efficient farming. Mentoring vulnerable groups to adapt to climate change.',
      icon: <Zap className="w-10 h-10" />,
    },
    {
      title: 'Circular Economy Solutions',
      desc: 'Organic waste recycling and compost production. Creating green jobs for youth, women, and PWD.',
      icon: <Recycle className="w-10 h-10" />,
    },
    {
      title: 'Agro-Processing & Export',
      desc: 'Value addition, packaging, and export logistics guidance. Training women and youth-led enterprises.',
      icon: <Globe className="w-10 h-10" />,
    },
    {
      title: 'Youth & Women Empowerment',
      desc: 'Skills development, entrepreneurship support, and inclusive employment programs.',
      icon: <Users className="w-10 h-10" />,
    },
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Integrated solutions for a sustainable future in agriculture and community development.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-900/5 hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-500 mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{s.desc}</p>
              <button className="text-emerald-900 font-semibold flex items-center gap-2 hover:text-emerald-500 transition-colors">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Circular Demonstration Farm',
      goal: 'Showcase climate-smart integrated farming',
      impact: 'Train 50 youth, 30 women, 20 PWD in the first year',
      activities: 'Crop production, livestock, composting, training workshops',
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Organic Waste to Compost Initiative',
      goal: 'Transform farm and market waste into compost/fertilizer',
      impact: 'Reduces pollution, creates green jobs for youth, women, and PWD',
      activities: 'Waste collection, composting, distribution to farmers',
      img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">Our Projects</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-world initiatives making a tangible difference in Rwandan communities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {projects.map((p, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={cn(idx % 2 !== 0 && 'lg:order-2')}>
              <img src={p.img} alt={p.title} className="rounded-3xl shadow-2xl" />
            </div>
            <div className={cn(idx % 2 !== 0 && 'lg:order-1')}>
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">{p.title}</h2>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">Goal</h4>
                  <p className="text-slate-700 text-lg">{p.goal}</p>
                </div>
                <div>
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">Impact</h4>
                  <p className="text-slate-700 text-lg">{p.impact}</p>
                </div>
                <div>
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">Activities</h4>
                  <p className="text-slate-700">{p.activities}</p>
                </div>
              </div>
              <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors">
                Support this Project
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const ImpactPage = () => {
  const metrics = [
    { label: 'Hectares Farmed', value: '500+' },
    { label: 'Tons of Compost', value: '200+' },
    { label: 'Youth Jobs', value: '800+' },
    { label: 'Women Jobs', value: '600+' },
    { label: 'PWD Jobs', value: '150+' },
  ];

  const testimonials = [
    {
      quote: 'EcoCycle trained me in climate-smart agriculture — now I run my own micro-farm.',
      author: 'Jane, Youth Beneficiary',
    },
    {
      quote: 'Through EcoCycle, I learned livestock management and composting — my family income increased.',
      author: 'Claudine, Woman Beneficiary',
    },
    {
      quote: 'As a PWD, EcoCycle gave me meaningful work and skills in sustainable farming.',
      author: 'Patrick, PWD Beneficiary',
    },
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Measuring our progress in regenerating land and empowering people.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-24">
          {metrics.map((m, idx) => (
            <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-emerald-900/5">
              <div className="text-3xl font-bold text-emerald-900 mb-2">{m.value}</div>
              <div className="text-xs text-slate-500 uppercase font-medium">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#fcfcf7] rounded-3xl p-12 md:p-24 border border-emerald-900/10">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-16">Stories of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-6">
                  <Heart size={40} />
                </div>
                <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="font-bold text-emerald-900">{t.author}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12">Circular Agriculture Model</h2>
          <div className="max-w-4xl mx-auto aspect-[16/9] bg-white rounded-3xl border-2 border-dashed border-emerald-900/20 flex items-center justify-center">
            <div className="text-slate-400 flex flex-col items-center gap-4">
              <Recycle size={64} />
              <p className="text-xl italic">Infographic: Our Circular Agriculture Model</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NewsPage = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">News & Blog</h1>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {['All', 'Training', 'Projects', 'Impact', 'Media'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full border border-emerald-900/20 text-sm font-medium hover:bg-emerald-900 hover:text-white transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-900/5 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800&sig=${i + 10}`}
                  alt="News"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs text-emerald-500 font-bold uppercase mb-3">Training • March 2026</div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  Empowering Youth through Climate-Smart Training
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  Last week, EcoCycle Rwanda hosted a workshop for 50 youth participants in Bugesera,
                  focusing on organic waste management and sustainable farming techniques.
                </p>
                <button className="text-emerald-900 font-bold flex items-center gap-2 hover:text-emerald-500">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const DonatePage = () => {
  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Your support helps us scale our impact and empower more vulnerable communities in Rwanda.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-emerald-900/5">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">Donate Now</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Youth Programs', 'Women Empowerment', 'PWD Inclusion', 'Environment'].map((opt) => (
                <button
                  key={opt}
                  className="p-6 border-2 border-emerald-900/10 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="font-bold text-emerald-900 group-hover:text-emerald-500 mb-1">{opt}</div>
                  <div className="text-xs text-slate-500">Support this initiative</div>
                </button>
              ))}
            </div>
            <button className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-colors">
              Donate Now
            </button>
          </div>

          <div className="bg-[#fcfcf7] p-12 rounded-3xl border border-emerald-900/10">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">Volunteer Today</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <textarea placeholder="Your Interests" rows={4} className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <button className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors" type="button">
                Volunteer Today
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">Our Products & Market Access</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              EcoCycle Rwanda supplies high-quality planting materials and fresh horticultural produce to local and international markets.
              Our production systems integrate climate-smart agriculture, circular economy principles, and inclusive employment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold uppercase tracking-wider">
              <Sprout size={18} />
              Nursery Products
            </div>
            <h2 className="text-4xl font-bold text-emerald-900">Quality Planting Materials</h2>
            <p className="text-lg text-slate-600">
              EcoCycle Rwanda operates professional nurseries producing high-quality planting materials adapted to Rwanda’s agro-ecological conditions.
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-900/5 space-y-6">
              <h3 className="text-xl font-bold text-emerald-900">Our Nursery Categories:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Horticultural seedlings', icon: '🌿' },
                  { label: 'Forest tree seedlings', icon: '🌳' },
                  { label: 'Agroforestry species', icon: '🌾' },
                  { label: 'Climate-resilient plants', icon: '🌱' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-sm italic border-l-4 border-emerald-500 pl-4">
                All seedlings are produced using sustainable soil management practices and quality-controlled systems to ensure strong root development and high survival rates.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-900">How to Access:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors">
                  <FileText size={20} />
                  Request Catalog
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-emerald-900 text-emerald-900 py-4 rounded-xl font-bold hover:bg-emerald-900 hover:text-white transition-all">
                  <Phone size={20} />
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-bold uppercase tracking-wider">
              <Package size={18} />
              Fresh Produce
            </div>
            <h2 className="text-4xl font-bold text-emerald-900">Local & Export Markets</h2>
            <p className="text-lg text-slate-600">
              Premium horticulture products produced and supplied for local and international markets following climate-smart agricultural practices.
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-900/5 space-y-6">
              <h3 className="text-xl font-bold text-emerald-900">Key Products:</h3>
              <div className="flex flex-wrap gap-3">
                {['🥑 Avocado', '🌶 Chili', '🫘 Green beans', '🍅 Seasonal Fruits'].map((item, i) => (
                  <span key={i} className="px-6 py-3 bg-slate-50 rounded-full font-bold text-slate-700 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-emerald-900">Market Compliance:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Quality grading</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Post-harvest standards</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Traceability systems</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500" /> Proper packaging</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-900">Market Information:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
                  <ShoppingCart size={20} />
                  Request Product List
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-500 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all">
                  <Globe size={20} />
                  Become a Buyer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-emerald-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Inclusive Impact Statement</h2>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                By sourcing products from EcoCycle Rwanda, buyers contribute directly to sustainable and regenerative agricultural systems while supporting marginalized communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Youth employment & entrepreneurship',
                  'Women-led agribusiness development',
                  'Inclusive economic participation for PWD',
                  'Sustainable & regenerative systems',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000"
                  alt="Impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-400 p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-emerald-950 font-black text-2xl">100% Inclusive</p>
                <p className="text-emerald-950/80 font-bold">Market Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for collaborations, inquiries, or support.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-emerald-900 mb-6">Contact Details</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><MapPin size={24} /></div>
                  <div>
                    <div className="font-bold">Address</div>
                    <div className="text-slate-600">Bugesera District, Rwanda</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><Phone size={24} /></div>
                  <div>
                    <div className="font-bold">Phone</div>
                    <a href="tel:+250788963938" className="text-slate-600 hover:text-emerald-500 transition-colors">
                      +250 788 963 938
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><MessageCircle size={24} /></div>
                  <div>
                    <div className="font-bold">WhatsApp</div>
                    <a
                      href="https://wa.me/250788963938"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-emerald-500 transition-colors"
                    >
                      +250 788 963 938
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><Mail size={24} /></div>
                  <div>
                    <div className="font-bold">Email</div>
                    <div className="text-slate-600">ecocyclerwandaltd@gmail.com</div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/EcoCycleRwanda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-emerald-900/5 rounded-2xl hover:text-emerald-500 transition-colors"><Facebook /></a>
                <a href="https://www.instagram.com/ecocyclerwanda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-emerald-900/5 rounded-2xl hover:text-emerald-500 transition-colors"><Instagram /></a>
                <a href="https://www.linkedin.com/company/ecocyclerwanda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-emerald-900/5 rounded-2xl hover:text-emerald-500 transition-colors"><Linkedin /></a>
                <a href="https://x.com/EcoCycleRwanda" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-sm border border-emerald-900/5 rounded-2xl hover:text-emerald-500 transition-colors"><Twitter /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-emerald-900/5">
              <h3 className="text-2xl font-bold text-emerald-900 mb-8">Send a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <input type="email" placeholder="Your Email" className="px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <input type="tel" placeholder="Phone Number" className="md:col-span-2 px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <textarea placeholder="Your Message" rows={6} className="md:col-span-2 px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <button type="button" className="md:col-span-2 bg-emerald-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnersPage = () => {
  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8">Partners & Supporters</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            EcoCycle Rwanda collaborates with government agencies, NGOs, donors, and cooperatives to scale sustainable agricultural solutions and empower youth, women, and PWD.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-24">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Network</span>
          <h2 className="text-4xl font-bold text-emerald-900">Building a Sustainable Ecosystem Together</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-12 rounded-[2rem] shadow-sm border border-emerald-900/5 flex items-center justify-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-full aspect-video bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 font-bold text-lg group-hover:text-emerald-900 transition-colors">
                PARTNER {i}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-32 bg-[#fcfcf7] rounded-[3rem] p-16 md:p-24 text-center border border-emerald-900/5">
          <h3 className="text-4xl font-bold text-emerald-900 mb-8">Interested in collaborating?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
            Join our mission to transform agriculture in Rwanda. We are always looking for partners who share our vision for a sustainable and inclusive future.
          </p>
          <button className="bg-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg">
            Become a Partner
          </button>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'impact':
        return <ImpactPage />;
      case 'partners':
        return <PartnersPage />;
      case 'news':
        return <NewsPage />;
      case 'donate':
        return <DonatePage />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
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
import SplashScreen from './components/SplashScreen';
import LanguageSelector from './components/LanguageSelector';
import { translations, type Language } from './i18n';

import logoImg from './assets/logo.png';
import samImg from './assets/sam.jpg';
import winnerImg from './assets/winner.jpg';
import aurelieImg from './assets/aurelie.jpg';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type T = (typeof translations)[Language];

const TopBar = ({ t }: { t: T }) => {
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
              {t.topbar.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-emerald-400" />
            <a
              href="tel:+250788963938"
              className="hover:text-emerald-400 transition-colors"
            >
              {t.topbar.phone}
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
              {t.topbar.whatsapp}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60">{t.common.followUs}</span>
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
  t,
  language,
  setLanguage,
}: {
  currentPage: Page;
  setCurrentPage: (p: Page) => void;
  t: T;
  language: Language;
  setLanguage: (l: Language) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.products, id: 'products' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.impact, id: 'impact' },
    { label: t.nav.partners, id: 'partners' },
    { label: t.nav.news, id: 'news' },
    { label: t.nav.donate, id: 'donate' },
    { label: t.nav.contact, id: 'contact' },
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

          <div className="hidden md:flex items-center space-x-6">
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

            <div className="flex items-center gap-1 border border-emerald-900/15 rounded-xl p-1">
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'px-2 py-1 text-xs rounded-lg font-bold',
                  language === 'en'
                    ? 'bg-emerald-900 text-white'
                    : 'text-emerald-900 hover:bg-emerald-50'
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('rw')}
                className={cn(
                  'px-2 py-1 text-xs rounded-lg font-bold',
                  language === 'rw'
                    ? 'bg-emerald-900 text-white'
                    : 'text-emerald-900 hover:bg-emerald-50'
                )}
              >
                RW
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={cn(
                  'px-2 py-1 text-xs rounded-lg font-bold',
                  language === 'fr'
                    ? 'bg-emerald-900 text-white'
                    : 'text-emerald-900 hover:bg-emerald-50'
                )}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-emerald-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-800 transition-all shadow-md"
            >
              {t.common.getInTouch}
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

              <div className="flex justify-center gap-2 py-4 border-t border-emerald-900/5 mt-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    'px-3 py-2 text-sm rounded-lg font-bold',
                    language === 'en'
                      ? 'bg-emerald-900 text-white'
                      : 'border border-emerald-900/15 text-emerald-900'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('rw')}
                  className={cn(
                    'px-3 py-2 text-sm rounded-lg font-bold',
                    language === 'rw'
                      ? 'bg-emerald-900 text-white'
                      : 'border border-emerald-900/15 text-emerald-900'
                  )}
                >
                  RW
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={cn(
                    'px-3 py-2 text-sm rounded-lg font-bold',
                    language === 'fr'
                      ? 'bg-emerald-900 text-white'
                      : 'border border-emerald-900/15 text-emerald-900'
                  )}
                >
                  FR
                </button>
              </div>

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

const Footer = ({
  setCurrentPage,
  t,
}: {
  setCurrentPage: (p: Page) => void;
  t: T;
}) => {
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
              {t.footer.description}
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
            <h4 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('services')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('products')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('projects')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('donate')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.donate}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-emerald-400 transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.contactInfo}</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-emerald-400 shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <a href="tel:+250788963938" className="hover:text-emerald-400 transition-colors">
                  {t.topbar.phone}
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
                  {t.footer.whatsappUs}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span>{t.topbar.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t.footer.newsletter}</h4>
            <p className="text-slate-300 text-sm mb-4">{t.footer.newsletterText}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.yourEmail}
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
          <p>
            © {new Date().getFullYear()} EcoCycle Rwanda. {t.footer.rights}
          </p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = ({
  setCurrentPage,
  t,
}: {
  setCurrentPage: (p: Page) => void;
  t: T;
}) => {
  const stats = [
    { label: t.home.stats.soil, value: '500+' },
    { label: t.home.stats.youth, value: '800+' },
    { label: t.home.stats.women, value: '600+' },
    { label: t.home.stats.pwd, value: '150+' },
  ];

  const services = [
    { title: t.home.services.crop, icon: <Sprout className="w-8 h-8" /> },
    { title: t.home.services.livestock, icon: <Users className="w-8 h-8" /> },
    { title: t.home.services.compost, icon: <Recycle className="w-8 h-8" /> },
    { title: t.home.services.circular, icon: <Globe className="w-8 h-8" /> },
    { title: t.home.services.empowerment, icon: <Heart className="w-8 h-8" /> },
    { title: t.home.services.inclusion, icon: <Award className="w-8 h-8" /> },
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
              {t.home.badge}
            </span>

            <div className="space-y-2 md:space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white drop-shadow-2xl">
                {t.home.hero1}
              </h1>
              <h2 className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-emerald-300 drop-shadow-xl">
                {t.home.hero2}
              </h2>
              <h3 className="text-lg md:text-2xl font-bold leading-tight tracking-normal text-emerald-100/80">
                {t.home.hero3}
              </h3>
            </div>

            <p className="text-lg md:text-xl mt-10 text-slate-100 font-light max-w-2xl leading-relaxed drop-shadow-lg">
              {t.home.heroText}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-2xl group"
              >
                {t.common.ourProducts}
                <Package size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-12 py-6 rounded-2xl font-black text-lg transition-all flex items-center gap-3 group"
              >
                {t.common.aboutUs}
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
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
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.common.whatWeDo}
              </span>
              <h2 className="text-5xl font-bold text-emerald-900 leading-tight">
                {t.home.servicesTitle}
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-8 py-4 bg-emerald-900/5 text-emerald-900 rounded-2xl font-bold hover:bg-emerald-900 hover:text-white transition-all flex items-center gap-2"
            >
              {t.common.viewAllServices} <ChevronRight size={20} />
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
                <p className="text-slate-600 leading-relaxed mb-8">{t.home.serviceText}</p>
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
              {t.common.latestUpdates}
            </span>
            <h2 className="text-5xl font-bold text-emerald-900">{t.home.newsTitle}</h2>
          </div>
          <button
            onClick={() => setCurrentPage('news')}
            className="hidden md:flex items-center gap-3 text-emerald-900 font-bold hover:text-emerald-500 group"
          >
            {t.common.exploreAllNews}
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
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
                    {t.home.readArticle} <ArrowRight size={18} />
                  </span>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-emerald-900 text-xs font-bold shadow-lg">
                  MARCH {i}, 2026
                </div>
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-500 transition-colors leading-tight">
                {t.home.newsCardTitle}
              </h3>
              <p className="text-slate-500 leading-relaxed line-clamp-2">
                {t.home.newsCardText}
              </p>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage('news')}
          className="md:hidden mt-12 w-full py-5 bg-emerald-900 text-white rounded-2xl font-bold"
        >
          {t.common.viewAllNews}
        </button>
      </section>
    </div>
  );
};

const AboutPage = ({ t }: { t: T }) => {
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
          <h1 className="text-5xl font-bold">{t.about.title}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.about.vision}</h2>
              <p className="text-xl text-slate-600 italic leading-relaxed">{t.about.visionText}</p>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.about.mission}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{t.about.missionText}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {t.about.values.map((val) => (
                <div key={val} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="font-medium text-slate-700">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1000"
              alt="Team"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold mb-1">{t.about.registered}</div>
              <div className="text-emerald-300 text-sm">{t.about.official}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">{t.about.leadership}</h2>
            <p className="text-slate-500">{t.about.leadershipText}</p>
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

const ServicesPage = ({
  setCurrentPage,
  t,
}: {
  setCurrentPage: (p: Page) => void;
  t: T;
}) => {
  const services = [
    {
      title: t.servicesPage.cards.farming.title,
      desc: t.servicesPage.cards.farming.desc,
      icon: <Sprout className="w-10 h-10" />,
      page: 'service-farming' as Page,
    },
    {
      title: t.servicesPage.cards.climate.title,
      desc: t.servicesPage.cards.climate.desc,
      icon: <Zap className="w-10 h-10" />,
      page: 'service-climate' as Page,
    },
    {
      title: t.servicesPage.cards.circular.title,
      desc: t.servicesPage.cards.circular.desc,
      icon: <Recycle className="w-10 h-10" />,
      page: 'service-circular' as Page,
    },
    {
      title: t.servicesPage.cards.export.title,
      desc: t.servicesPage.cards.export.desc,
      icon: <Globe className="w-10 h-10" />,
      page: 'service-export' as Page,
    },
    {
      title: t.servicesPage.cards.empowerment.title,
      desc: t.servicesPage.cards.empowerment.desc,
      icon: <Users className="w-10 h-10" />,
      page: 'service-empowerment' as Page,
    },
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.servicesPage.title}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            {t.servicesPage.subtitle}
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
              <button
                onClick={() => setCurrentPage(s.page)}
                className="text-emerald-900 font-semibold flex items-center gap-2 hover:text-emerald-500 transition-colors"
              >
                {t.common.learnMore} <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ServiceDetailPage = ({
  title,
  subtitle,
  description,
  features,
  outcomes,
  image,
  setCurrentPage,
  t,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  outcomes: string[];
  image: string;
  setCurrentPage: (p: Page) => void;
  t: T;
}) => {
  return (
    <div className="pb-24">
      <section className="relative h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <button
            onClick={() => setCurrentPage('services')}
            className="mb-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl transition-colors"
          >
            {t.common.backToServices}
          </button>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl">{subtitle}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-emerald-900/5 p-10">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">{t.common.overview}</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-10">{description}</p>

            <h3 className="text-2xl font-bold text-emerald-900 mb-5">{t.common.whatWeOffer}</h3>
            <div className="space-y-4 mb-12">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-1 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-5">{t.common.expectedOutcomes}</h3>
            <div className="space-y-4">
              {outcomes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-1 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#fcfcf7] rounded-3xl border border-emerald-900/10 p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">{t.common.needThisService}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t.contact.subtitle}
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors"
              >
                {t.common.requestThisService}
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-emerald-900/5 p-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">{t.common.whyItMatters}</h3>
              <p className="text-slate-600 leading-relaxed">{t.products.impactText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectsPage = ({ t }: { t: T }) => {
  const projects = [
    {
      ...t.projects.project1,
      img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000',
    },
    {
      ...t.projects.project2,
      img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">{t.projects.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.projects.subtitle}</p>
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
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">
                    {t.projects.goal}
                  </h4>
                  <p className="text-slate-700 text-lg">{p.goal}</p>
                </div>
                <div>
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">
                    {t.projects.impact}
                  </h4>
                  <p className="text-slate-700 text-lg">{p.impact}</p>
                </div>
                <div>
                  <h4 className="text-emerald-500 font-semibold uppercase tracking-wider text-sm mb-1">
                    {t.projects.activities}
                  </h4>
                  <p className="text-slate-700">{p.activities}</p>
                </div>
              </div>
              <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors">
                {t.projects.support}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const ImpactPage = ({ t }: { t: T }) => {
  const metrics = [
    { label: t.impact.metrics.hectares, value: '500+' },
    { label: t.impact.metrics.compost, value: '200+' },
    { label: t.impact.metrics.youth, value: '800+' },
    { label: t.impact.metrics.women, value: '600+' },
    { label: t.impact.metrics.pwd, value: '150+' },
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.impact.title}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">{t.impact.subtitle}</p>
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
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-16">
            {t.impact.stories}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.impact.testimonials.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-6">
                  <Heart size={40} />
                </div>
                <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="font-bold text-emerald-900">{item.author}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12">{t.impact.model}</h2>
          <div className="max-w-4xl mx-auto aspect-[16/9] bg-white rounded-3xl border-2 border-dashed border-emerald-900/20 flex items-center justify-center">
            <div className="text-slate-400 flex flex-col items-center gap-4">
              <Recycle size={64} />
              <p className="text-xl italic">{t.impact.infographic}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NewsPage = ({ t }: { t: T }) => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">{t.news.title}</h1>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {t.news.categories.map((cat) => (
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
                <div className="text-xs text-emerald-500 font-bold uppercase mb-3">
                  {t.news.cardType}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {t.news.cardTitle}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {t.news.cardText}
                </p>
                <button className="text-emerald-900 font-bold flex items-center gap-2 hover:text-emerald-500">
                  {t.common.readMore} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const DonatePage = ({ t }: { t: T }) => {
  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t.donate.title}</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">{t.donate.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-emerald-900/5">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">{t.donate.donateNow}</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {t.donate.options.map((opt) => (
                <button
                  key={opt}
                  className="p-6 border-2 border-emerald-900/10 rounded-2xl text-left hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="font-bold text-emerald-900 group-hover:text-emerald-500 mb-1">
                    {opt}
                  </div>
                  <div className="text-xs text-slate-500">{t.donate.supportText}</div>
                </button>
              ))}
            </div>
            <button className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-colors">
              {t.donate.donateNow}
            </button>
          </div>

          <div className="bg-[#fcfcf7] p-12 rounded-3xl border border-emerald-900/10">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">{t.donate.volunteerToday}</h2>
            <form className="space-y-4">
              <input type="text" placeholder={t.donate.fullName} className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <input type="email" placeholder={t.donate.email} className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <input type="tel" placeholder={t.donate.phone} className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <textarea placeholder={t.donate.interests} rows={4} className="w-full px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
              <button className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors" type="button">
                {t.donate.volunteerToday}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = ({ t }: { t: T }) => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">{t.products.title}</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.products.subtitle}
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
              {t.products.nurseryBadge}
            </div>
            <h2 className="text-4xl font-bold text-emerald-900">{t.products.nurseryTitle}</h2>
            <p className="text-lg text-slate-600">{t.products.nurseryText}</p>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-900/5 space-y-6">
              <h3 className="text-xl font-bold text-emerald-900">{t.products.categoriesTitle}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.products.categories.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <span className="text-2xl">🌿</span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-sm italic border-l-4 border-emerald-500 pl-4">
                {t.products.nurseryNote}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-900">{t.products.accessTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors">
                  <FileText size={20} />
                  {t.products.requestCatalog}
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-emerald-900 text-emerald-900 py-4 rounded-xl font-bold hover:bg-emerald-900 hover:text-white transition-all">
                  <Phone size={20} />
                  {t.products.contactSales}
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
              {t.products.freshBadge}
            </div>
            <h2 className="text-4xl font-bold text-emerald-900">{t.products.freshTitle}</h2>
            <p className="text-lg text-slate-600">{t.products.freshText}</p>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-900/5 space-y-6">
              <h3 className="text-xl font-bold text-emerald-900">{t.products.keyProducts}</h3>
              <div className="flex flex-wrap gap-3">
                {t.products.productList.map((item, i) => (
                  <span key={i} className="px-6 py-3 bg-slate-50 rounded-full font-bold text-slate-700 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-emerald-900">{t.products.marketCompliance}</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  {t.products.compliance.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-emerald-900">{t.products.marketInfo}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors">
                  <ShoppingCart size={20} />
                  {t.products.requestProductList}
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-500 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all">
                  <Globe size={20} />
                  {t.products.becomeBuyer}
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
              <h2 className="text-4xl font-bold mb-8">{t.products.impactTitle}</h2>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                {t.products.impactText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.products.impactItems.map((item, i) => (
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
                <p className="text-emerald-950 font-black text-2xl">{t.products.accessTag1}</p>
                <p className="text-emerald-950/80 font-bold">{t.products.accessTag2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = ({ t }: { t: T }) => {
  return (
    <div className="pb-24">
      <section className="bg-[#fcfcf7] py-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-emerald-900 mb-6">{t.contact.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-emerald-900 mb-6">{t.contact.details}</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><MapPin size={24} /></div>
                  <div>
                    <div className="font-bold">{t.contact.address}</div>
                    <div className="text-slate-600">{t.footer.address}</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><Phone size={24} /></div>
                  <div>
                    <div className="font-bold">{t.contact.phone}</div>
                    <a href="tel:+250788963938" className="text-slate-600 hover:text-emerald-500 transition-colors">
                      {t.topbar.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><MessageCircle size={24} /></div>
                  <div>
                    <div className="font-bold">{t.contact.whatsapp}</div>
                    <a
                      href="https://wa.me/250788963938"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-emerald-500 transition-colors"
                    >
                      {t.topbar.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="p-3 bg-emerald-900/10 rounded-xl text-emerald-900"><Mail size={24} /></div>
                  <div>
                    <div className="font-bold">{t.contact.email}</div>
                    <div className="text-slate-600">{t.topbar.email}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-900 mb-6">{t.contact.follow}</h3>
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
              <h3 className="text-2xl font-bold text-emerald-900 mb-8">{t.contact.formTitle}</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder={t.contact.yourName} className="px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <input type="email" placeholder={t.contact.yourEmail} className="px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <input type="tel" placeholder={t.contact.phoneNumber} className="md:col-span-2 px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <textarea placeholder={t.contact.yourMessage} rows={6} className="md:col-span-2 px-6 py-4 rounded-xl border border-emerald-900/10 focus:outline-none focus:border-emerald-500" />
                <button type="button" className="md:col-span-2 bg-emerald-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-colors">
                  {t.common.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PartnersPage = ({ t }: { t: T }) => {
  return (
    <div className="pb-24">
      <section className="bg-emerald-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-8">{t.partners.title}</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {t.partners.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-24">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.partners.network}
          </span>
          <h2 className="text-4xl font-bold text-emerald-900">{t.partners.ecosystem}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-12 rounded-[2rem] shadow-sm border border-emerald-900/5 flex items-center justify-center group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-full aspect-video bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 font-bold text-lg group-hover:text-emerald-900 transition-colors">
                {t.partners.partner} {i}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-32 bg-[#fcfcf7] rounded-[3rem] p-16 md:p-24 text-center border border-emerald-900/5">
          <h3 className="text-4xl font-bold text-emerald-900 mb-8">{t.partners.collaborationTitle}</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
            {t.partners.collaborationText}
          </p>
          <button className="bg-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg">
            {t.partners.becomePartner}
          </button>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showSplash, setShowSplash] = useState(true);
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('site-language') as Language | null;
    if (savedLanguage === 'en' || savedLanguage === 'rw' || savedLanguage === 'fr') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    if (language) {
      localStorage.setItem('site-language', language);
    }
  }, [language]);

  const safeLanguage: Language = language ?? 'en';
  const t = translations[safeLanguage];

  useEffect(() => {
    if (!language) return;

    const titles: Record<Page, string> = {
      home: `EcoCycle Rwanda`,
      about: `${t.nav.about} - EcoCycle Rwanda`,
      services: `${t.nav.services} - EcoCycle Rwanda`,
      products: `${t.nav.products} - EcoCycle Rwanda`,
      projects: `${t.nav.projects} - EcoCycle Rwanda`,
      impact: `${t.nav.impact} - EcoCycle Rwanda`,
      partners: `${t.nav.partners} - EcoCycle Rwanda`,
      news: `${t.nav.news} - EcoCycle Rwanda`,
      donate: `${t.nav.donate} - EcoCycle Rwanda`,
      contact: `${t.nav.contact} - EcoCycle Rwanda`,
      'service-farming': `${t.servicesPage.cards.farming.title} - EcoCycle Rwanda`,
      'service-climate': `${t.servicesPage.cards.climate.title} - EcoCycle Rwanda`,
      'service-circular': `${t.servicesPage.cards.circular.title} - EcoCycle Rwanda`,
      'service-export': `${t.servicesPage.cards.export.title} - EcoCycle Rwanda`,
      'service-empowerment': `${t.servicesPage.cards.empowerment.title} - EcoCycle Rwanda`,
    };
    document.title = titles[currentPage];
  }, [currentPage, language, t]);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!language) {
    return <LanguageSelector onSelect={setLanguage} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} t={t} />;

      case 'about':
        return <AboutPage t={t} />;

      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} t={t} />;

      case 'service-farming':
        return (
          <ServiceDetailPage
            title={t.serviceDetails.farming.title}
            subtitle={t.serviceDetails.farming.subtitle}
            description={t.serviceDetails.farming.description}
            features={[...t.serviceDetails.farming.features]}
            outcomes={[...t.serviceDetails.farming.outcomes]}
            image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1600"
            setCurrentPage={setCurrentPage}
            t={t}
          />
        );

      case 'service-climate':
        return (
          <ServiceDetailPage
            title={t.serviceDetails.climate.title}
            subtitle={t.serviceDetails.climate.subtitle}
            description={t.serviceDetails.climate.description}
            features={[...t.serviceDetails.climate.features]}
            outcomes={[...t.serviceDetails.climate.outcomes]}
            image="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600"
            setCurrentPage={setCurrentPage}
            t={t}
          />
        );

      case 'service-circular':
        return (
          <ServiceDetailPage
            title={t.serviceDetails.circular.title}
            subtitle={t.serviceDetails.circular.subtitle}
            description={t.serviceDetails.circular.description}
            features={[...t.serviceDetails.circular.features]}
            outcomes={[...t.serviceDetails.circular.outcomes]}
            image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1600"
            setCurrentPage={setCurrentPage}
            t={t}
          />
        );

      case 'service-export':
        return (
          <ServiceDetailPage
            title={t.serviceDetails.export.title}
            subtitle={t.serviceDetails.export.subtitle}
            description={t.serviceDetails.export.description}
            features={[...t.serviceDetails.export.features]}
            outcomes={[...t.serviceDetails.export.outcomes]}
            image="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=1600"
            setCurrentPage={setCurrentPage}
            t={t}
          />
        );

      case 'service-empowerment':
        return (
          <ServiceDetailPage
            title={t.serviceDetails.empowerment.title}
            subtitle={t.serviceDetails.empowerment.subtitle}
            description={t.serviceDetails.empowerment.description}
            features={[...t.serviceDetails.empowerment.features]}
            outcomes={[...t.serviceDetails.empowerment.outcomes]}
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
            setCurrentPage={setCurrentPage}
            t={t}
          />
        );

      case 'projects':
        return <ProjectsPage t={t} />;

      case 'impact':
        return <ImpactPage t={t} />;

      case 'partners':
        return <PartnersPage t={t} />;

      case 'news':
        return <NewsPage t={t} />;

      case 'donate':
        return <DonatePage t={t} />;

      case 'products':
        return <ProductsPage t={t} />;

      case 'contact':
        return <ContactPage t={t} />;

      default:
        return <HomePage setCurrentPage={setCurrentPage} t={t} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar t={t} />
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />

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

      <Footer setCurrentPage={setCurrentPage} t={t} />
    </div>
  );
}
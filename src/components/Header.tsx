'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set the event date (May 1, 2025)
  const eventDate = new Date('2025-05-01T00:00:00');

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', href: '#hero', icon: '🏠' },
    { id: 'about', label: 'About', href: '#about', icon: '📖' },
    { id: 'highlights', label: 'Highlights', href: '#highlights', icon: '✨' },
    { id: 'Why punekar loves Book festival', label: 'Why punekar loves Book festival', href: '#highlights', icon: '🌟' },
    { id: 'schedule', label: 'Multiple events under one roofs', href: '#schedule', icon: '📅' },
    { id: 'speakers', label: 'Speakers', href: '#speakers', icon: '🎤' },
    { id: 'gallery', label: 'Gallery', href: '#gallery', icon: '🖼️' },
    { id: 'sponsors', label: 'Sponsors', href: '#sponsors', icon: '🤝' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update countdown timer
  useEffect(() => {
    if (!isMounted) return;

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [eventDate, isMounted]);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <>
      {/* Animated Top Banner */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 px-4 relative overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ x: [-100, 100], rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 bg-white/10 rounded-full -top-16 -left-16"
          />
          <motion.div 
            animate={{ x: [100, -100], rotate: [360, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-12 -right-12"
          />
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 font-bold"
          >
            <span className="text-yellow-300 text-lg animate-pulse">🏆</span>
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent font-black tracking-wide">
              WORLD RECORD HOLDER
            </span>
            <span className="hidden sm:inline">- Largest Book Festival in India</span>
          </motion.span>
          
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="font-mono font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg"
          >
            {isMounted ? (
              <div className="flex items-center gap-2">
                <span className="animate-pulse">⏰</span>
                <span className="text-yellow-200">
                  {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s to PBF 2025!
                </span>
              </div>
            ) : 'Loading countdown...'}
          </motion.div>
        </div>
      </motion.div>

      {/* Modern Two-Line Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'backdrop-blur-xl bg-white/85 shadow-2xl border-b border-white/20' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
        }`}
        style={{ marginTop: isScrolled ? '0' : '60px' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Line - Logos and Register Button */}
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="block w-5 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-5 h-0.5 bg-white rounded-full my-1"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-5 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Logos Section - Centered and Prominent */}
            <div className="flex-1 flex justify-center">
              <motion.div 
                className="flex items-center space-x-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Government Logos */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200"
                  >
                    <Image
                      src="/ministry-logo.png"
                      alt="Ministry of Education"
                      width={isScrolled ? 58 : 70}
                      height={isScrolled ? 58 : 70}
                      className="object-contain"
                      style={{ width: 'auto', height: isScrolled ? '48px' : '55px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="p-3 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200"
                  >
                    <Image
                      src="/nbs-logo.png"
                      alt="National Book Service"
                      width={isScrolled ? 58 : 70}
                      height={isScrolled ? 58 : 70}
                      className="object-contain"
                      style={{ width: 'auto', height: isScrolled ? '48px' : '55px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Main Festival Logo - Most Prominent */}
                <Link href="/" className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative p-4 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-2 border-orange-200/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                    <Image
                      src="/bookfest-logo.png"
                      alt="BookFest 2025"
                      width={isScrolled ? 58 : 70}
                      height={isScrolled ? 58 : 70}
                      className="object-contain relative z-10 transition-all duration-300"
                      style={{ width: 'auto', height: isScrolled ? '48px' : '50px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            
            {/* Register Button */}
            <div className="hidden lg:block">
              <motion.button 
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 xl:px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  ✨ Register Now
                </span>
              </motion.button>
            </div>
          </div>
          
          {/* Second Line - Navigation Menu */}
          <div className="hidden lg:block border-t border-gray-100 bg-gray-50/50">
            <div className="flex justify-center py-3">
              <nav className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 group whitespace-nowrap ${
                        activeSection === item.id
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                      onClick={() => handleNavClick(item.id)}
                      title={item.label}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="opacity-70 group-hover:opacity-100 transition-opacity text-lg">
                          {item.icon}
                        </span>
                        <span>
                          {item.label}
                        </span>
                      </span>
                    
                      {/* Hover effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 left-0 h-full w-96 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">📚</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">BookFest 2025</h3>
                      <p className="text-xs text-gray-500">Navigation Menu</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 shadow-lg'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-red-500 group-hover:text-white'
                        }`}>
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-base leading-tight block">{item.label}</span>
                          <div className={`h-0.5 mt-2 rounded-full transition-all duration-300 ${
                            activeSection === item.id ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-transparent'
                          }`} />
                        </div>
                        <motion.div
                          className="text-gray-400 group-hover:text-orange-500 transition-colors"
                          animate={{ x: activeSection === item.id ? 5 : 0 }}
                        >
                          →
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile Register Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <motion.button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMenu}
                  >
                    <span className="flex items-center justify-center gap-2">
                      ✨ Register Now
                    </span>
                  </motion.button>
                </motion.div>
                
                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"
                >
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">📅 Event Countdown</p>
                    <div className="font-mono text-sm font-bold text-orange-600">
                      {isMounted && `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m`}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
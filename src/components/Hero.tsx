'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useCountUp from '../hooks/useCountUp';

const Hero: React.FC = () => {
  const { count: visitorsCount, ref: visitorsRef } = useCountUp(10, 2000);
  const { count: stallsCount, ref: stallsRef } = useCountUp(600, 2500);
  const { count: authorsCount, ref: authorsRef } = useCountUp(500, 2200);
  const { count: languagesCount, ref: languagesRef } = useCountUp(10, 1800);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState({
    loaded: false,
    error: false,
    playing: false,
    canPlay: false,
    attempted: false
  });
  const [showDebug, setShowDebug] = useState(true);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    console.log('🎬 Hero component mounted');
    
    // Test video URL accessibility first
    fetch('/main.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('🔍 Video URL check:', response.status, response.statusText);
        if (response.ok) {
          console.log('✅ Video file is accessible via HTTP');
        } else {
          console.error('❌ Video file HTTP check failed:', response.status);
        }
      })
      .catch(error => {
        console.error('❌ Video URL fetch error:', error);
      });
    
    // Force video test after a short delay
    const timer = setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        console.log('🎥 Attempting to load video manually...');
        setVideoState(prev => ({ ...prev, attempted: true }));
        
        // Force load the video
        video.load();
        
        // Try to play after load
        const tryPlay = () => {
          video.play()
            .then(() => {
              console.log('✅ Video playing successfully!');
              setVideoState(prev => ({ ...prev, playing: true }));
            })
            .catch(error => {
              console.error('❌ Video play failed:', error);
            });
        };
        
        video.addEventListener('loadeddata', () => {
          console.log('📊 Video data loaded');
          setVideoState(prev => ({ ...prev, loaded: true, canPlay: true }));
          tryPlay();
        });
        
        video.addEventListener('error', (e) => {
          console.error('❌ Video error:', e);
          console.error('❌ Video error details:', {
            error: e,
            src: video.src,
            networkState: video.networkState,
            readyState: video.readyState
          });
          setVideoState(prev => ({ ...prev, error: true }));
        });
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Direct video test - no overlays or complications */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          controls={process.env.NODE_ENV === 'development'}
          className="w-full h-full object-cover"
          style={{
            zIndex: 5,
            opacity: 1,
            backgroundColor: 'red' // Red background to see if video element exists
          }}
          onLoadStart={() => {
            console.log('🎥 Video load started');
            setVideoState(prev => ({ ...prev, attempted: true }));
          }}
          onLoadedData={() => {
            console.log('📊 Video data loaded');
            setVideoState(prev => ({ ...prev, loaded: true }));
          }}
          onCanPlay={() => {
            console.log('✅ Video can play');
            setVideoState(prev => ({ ...prev, canPlay: true }));
          }}
          onPlaying={() => {
            console.log('▶️ Video is playing');
            setVideoState(prev => ({ ...prev, playing: true }));
          }}
          onError={(e) => {
            console.error('❌ Video error:', e);
            const video = e.target as HTMLVideoElement;
            console.error('Video error details:', {
              error: video.error,
              networkState: video.networkState,
              readyState: video.readyState,
              src: video.src
            });
            setVideoState(prev => ({ ...prev, error: true }));
          }}
        >
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Temporary visual test - bright colored div */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(45deg, blue, green)',
            zIndex: videoState.playing ? -1 : 3,
            opacity: 0.3
          }}
        />
        
        {/* Only show fallback when video actually fails */}
        {videoState.error && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/bookfest-logo.png)',
              filter: 'brightness(0.6)',
              zIndex: 2
            }}
          />
        )}
                
      </div>       
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Pune Book Festival
            </span>
            <br />
            <span className="text-white">2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-orange-200 mb-2">
            World&apos;s Largest Book Festival in India
          </p>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            📅 May 1-9, 2025 | 📍 FC, New Delhi
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="#about" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link 
              href="#schedule" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            <div className="space-y-2" ref={visitorsRef}>
              <div className="text-2xl md:text-4xl font-bold text-orange-400">
                {visitorsCount}+ Lakh
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                Visitors
              </div>
            </div>
            
            <div className="space-y-2" ref={stallsRef}>
              <div className="text-2xl md:text-4xl font-bold text-orange-400">
                {stallsCount}+
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                Book Stalls
              </div>
            </div>
            
            <div className="space-y-2" ref={authorsRef}>
              <div className="text-2xl md:text-4xl font-bold text-orange-400">
                {authorsCount}+
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                Authors
              </div>
            </div>
            
            <div className="space-y-2" ref={languagesRef}>
              <div className="text-2xl md:text-4xl font-bold text-orange-400">
                {languagesCount}+
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                Languages
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
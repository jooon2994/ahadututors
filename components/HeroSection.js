import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  // Array of media elements (images and videos)
  const mediaItems = [
    { type: 'image', src: 'bg1.jpg' },
    { type: 'video', src: 'background.mp4' },
    { type: 'image', src: 'bg2.jpg' },
  ];

  // State to keep track of the current media index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to cycle through the media items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [mediaItems.length]);

  // Current media item to display
  const currentMedia = mediaItems[currentIndex];

  return (
    <section className="relative flex items-center justify-center h-screen text-white text-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        {currentMedia.type === 'image' ? (
          <img src={currentMedia.src} alt="Background" className="w-full h-full object-cover opacity-80" />
        ) : (
          <video
            src={currentMedia.src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-80"
          />
        )}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 p-8 max-w-lg mx-auto bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Unlock Your Potential with the Best Tutors</h1>
        <p className="text-lg mb-8">Get personalized tutoring to help you achieve your academic goals.</p>
        <Link href="/browse-tutors">
          <button className="px-6 py-3 bg-yellow-500 text-blue-800 rounded-lg font-semibold hover:bg-yellow-400">
            Get Started
          </button>
        </Link>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}

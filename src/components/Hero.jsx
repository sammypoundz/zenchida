import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import Particles from './Particles';

const Hero = () => {
  const { ref, isInView } = useInView();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tech Problems';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);
    return () => clearInterval(typing);
  }, []);

  const images = [
    { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', label: 'Software Dev' },
    { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', label: 'Web Apps' },
    { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', label: 'E-Commerce' },
    { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', label: 'Mobile' },
    { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800', label: 'Cloud' },
    { url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800', label: 'AI/ML' },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <Particles />
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-redAccent/20 rounded-full filter blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold leading-tight text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The No:1 solution to your{' '}
              <span className="text-gradient">{typedText}</span>
              <span className="animate-pulse">|</span>
            </motion.h1>
            <p className="text-xl text-muted my-8 leading-relaxed">
              Our goal is to provide a world-class service built on high scope, 
              performance and longevity — ensuring our clients fulfill their business goals.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary hover:bg-redAccent text-white px-10 py-5 rounded-full text-lg font-semibold transition-all shadow-xl shadow-primary/30"
            >
              Start Your Project
            </motion.a>
          </div>

          <div className="relative h-[600px] hidden lg:block perspective">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-redAccent/20 rounded-3xl blur-3xl" />
            
            {visibleImages.map((img, idx) => (
              <motion.div
                key={img.label}
                className="tilt-card absolute w-[450px] h-[550px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                style={{
                  top: `${idx * 20}px`,
                  right: `${idx * 20}px`,
                  zIndex: 30 - idx,
                  rotate: `${idx * 2 - 2}deg`,
                }}
                whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-semibold">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
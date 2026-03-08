import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Adebayo Ogunlesi',
    role: 'CEO, FinTech Corp',
    content: 'Zenchida transformed our digital infrastructure completely. Their team is professional, innovative, and truly cares about client success.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Chioma Okonkwo',
    role: 'Marketing Director, HealthPlus',
    content: 'The branding and web solutions delivered by Zenchida exceeded our expectations. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Founder, EduLearn',
    content: 'Their ICT training programs empowered our staff with the latest skills. Excellent service from start to finish.',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO, ShopFast',
    content: 'Their e-commerce platform increased our conversion by 40%. Outstanding work!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead, LogiTrack',
    content: 'The team delivered a robust logistics solution ahead of schedule. Impressive dedication.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Theme-aware background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What Say <span className="text-gradient">Our Clients!</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-20 max-w-2xl mx-auto">
          Don't just take our word for it — hear from some of our satisfied clients.
        </p>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="glass p-12 rounded-3xl relative overflow-hidden bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-white/10">
            <FaQuoteRight className="text-primary/20 text-9xl absolute -bottom-10 -right-10" />
            
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-6 mb-8">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full border-4 border-primary"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{testimonials[current].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[current].role}</p>
                </div>
              </div>
              <p className="text-xl italic text-gray-700 dark:text-gray-300">{testimonials[current].content}</p>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current 
                    ? 'bg-primary w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
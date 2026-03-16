import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaQuoteRight, FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Mrs Justina E Chira',
    role: 'Director, Golden Light School',
    content: 'Zenchida delivered an outstanding school management website that has streamlined our administration and improved communication with parents. Their team was professional and attentive to our needs.',
    avatar: 'https://i.pravatar.cc/150?u=justina-chira',
  },
  {
    name: 'Dr. Justin Ogbevoen',
    role: 'C.E.O, JVO Event Center',
    content: 'The event booking platform they built for us is intuitive and efficient. It has simplified our reservation process and increased our bookings. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?u=justin-ogbevoen',
  },
  {
    name: 'Mrs. Vivian Ezekeali',
    role: 'Director, Vinos School',
    content: 'Working with Zenchida was a game-changer for our school. Their custom solutions helped us digitize our records and engage with parents seamlessly. Thank you!',
    avatar: 'https://i.pravatar.cc/150?u=vivian-ezekeali',
  },
  {
    name: 'Dr. Olugbenga Abiodun',
    role: 'Editor-in-Chief, AFMJ',
    content: 'The African Medical Journal platform they developed is robust and user-friendly. It has greatly enhanced our publishing workflow and reader experience.',
    avatar: 'https://i.pravatar.cc/150?u=olugbenga-abiodun',
  },
  {
    name: 'Mr. Emmanuel Nimfa',
    role: 'Co-Founder, TechForge',
    content: 'Zenchida’s expertise in software development and ICT training has been invaluable to our startup. They helped us build a solid foundation for our tech initiatives.',
    avatar: 'https://i.pravatar.cc/150?u=emmanuel-nimfa',
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
                {/* Placeholder avatar icon instead of actual image */}
                <div className="w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <FaUserCircle className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                </div>
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
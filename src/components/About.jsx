import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useEffect } from 'react';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const stats = [
    { value: 150, label: 'Projects Completed', suffix: '+' },
    { value: 50, label: 'Happy Clients', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '' },
    { value: 24, label: 'Team Experts', suffix: '' },
  ];

  const timeline = [
    { year: '2021', event: 'Founded in Jigawa' },
    { year: '2022', event: 'Incorporated with CAC officially' },
    { year: '2023', event: 'Held the 1st cohort of Stark Codex' },
    { year: '2024', event: 'Held the 2nd cohort for Stark Codex' },
    { year: '2025', event: 'Launched the AI & Robotics division' },
    { year: '2025', event: 'Held the 1st Kiddies Techies Robotics & AI Bootcamp in Dutse' },
    { year: '2025', event: 'Collaborated with Golden Light School to organize Teacher\'s Training Workshop on Digital skills.' },
    { year: '2025', event: 'Collaborated with TedXDutse as the official Tech Partner for the 1st TedXDutse event.' },
    { year: '2025', event: 'Inaugurated the Digiwise Learning Portal Team' },
    { year: '2026', event: 'Organized an AI Tech event for young digital minds.' },
  ];

  return (
    <section id="about" className="py-32 relative bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker">
      {/* Decorative orbs - contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-20 left-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="hidden sm:block absolute bottom-20 right-20 w-96 h-96 bg-redAccent/10 dark:bg-redAccent/20 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-gradient">Zenchida Nigeria Ltd</span>
        </motion.h2>

        {/* Two‑column layout (text + stats) */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-200">
              Zenchida Nigeria Ltd is a leading creative Software and Web Applications
              design agency registered in Nigeria. We're best known for our unique set
              of quality skills and techniques aimed at ensuring the jobs of our esteemed
              clients are easier.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We provide services that include Software Development, Web Application Development,
              Web Hosting and Domain Name Registration, Creative strategy, Mobile Solutions,
              Graphic Design, and much more.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our goal is to provide a world-class service built on high scope, performance
              and longevity whereby using our platform we ensure that our clients fulfill
              their business goals and objectives.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-gradient">
                    {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix} />}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline in a 4‑column grid with floating animation */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-semibold mb-12 text-center text-primary">Our Journey</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-xl border-l-4 border-redAccent floating-card"
              >
                {/* Pin dot */}
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg" />
                <span className="text-redAccent font-bold block text-center text-lg">
                  {item.year}
                </span>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 text-center leading-tight">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        .floating-card {
          animation: float 3s ease-in-out infinite;
          transition: transform 0.2s ease;
        }
        .floating-card:hover {
          animation-play-state: paused;
          transform: scale(1.02);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default About;
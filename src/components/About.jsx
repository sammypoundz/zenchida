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
    { year: '2018', event: 'Founded in Lagos' },
    { year: '2019', event: 'First international client' },
    { year: '2020', event: 'Expanded to fintech sector' },
    { year: '2021', event: 'Launched AI division' },
    { year: '2022', event: 'Opened second office' },
    { year: '2023', event: 'Winner of Tech Award' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Theme-aware gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-gradient">Zenchida Nigeria Ltd</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
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

          {/* Right column - stats and timeline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
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

            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Journey</h3>
              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="text-redAccent font-mono font-bold">{item.year}</span>
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-600 dark:text-gray-400">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
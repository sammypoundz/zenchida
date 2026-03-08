import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode, FaLaptopCode, FaServer, FaShoppingCart,
  FaBullseye, FaMobileAlt, FaPalette, FaDatabase,
  FaAd, FaTag, FaBriefcase, FaChalkboardTeacher
} from 'react-icons/fa';

const services = [
  { icon: FaCode, title: 'Software Development', shortDesc: 'Custom software tailored to your business needs.', fullDesc: 'We build high-performance, scalable software solutions using modern tech stacks. From concept to deployment, we ensure quality and innovation.' },
  { icon: FaLaptopCode, title: 'Web Application Development', shortDesc: 'Modern, responsive web apps that drive engagement.', fullDesc: 'Our web applications are built with React, Vue, or Angular, ensuring fast performance and seamless user experiences across all devices.' },
  { icon: FaServer, title: 'Web Hosting & Domain', shortDesc: 'Reliable hosting and domain registration services.', fullDesc: 'We provide secure, high-uptime hosting with 24/7 support, plus easy domain registration and management.' },
  { icon: FaShoppingCart, title: 'E-Commerce Solutions', shortDesc: 'End-to-end e-commerce platforms.', fullDesc: 'From storefront to payment integration, we create powerful e-commerce sites that convert visitors into customers.' },
  { icon: FaBullseye, title: 'Creative Strategy', shortDesc: 'Data-driven creative strategies.', fullDesc: 'We help you define your brand voice, target audience, and market positioning with innovative creative campaigns.' },
  { icon: FaMobileAlt, title: 'Mobile Solutions', shortDesc: 'iOS and Android app development.', fullDesc: 'Native and cross-platform mobile apps that deliver exceptional performance and user engagement.' },
  { icon: FaPalette, title: 'Graphic Design Services', shortDesc: 'Stunning visuals and branding.', fullDesc: 'Logos, brochures, social media graphics, and more – designed to make your brand stand out.' },
  { icon: FaDatabase, title: 'Web Database Solutions', shortDesc: 'Robust database design and management.', fullDesc: 'We design, optimize, and maintain databases to ensure your data is secure, fast, and scalable.' },
  { icon: FaAd, title: 'Online Advertisement', shortDesc: 'Targeted ad campaigns across platforms.', fullDesc: 'Maximize ROI with our Google, Facebook, LinkedIn, and Twitter ad campaigns, tailored to your audience.' },
  { icon: FaTag, title: 'Branding & Identity', shortDesc: 'Holistic brand identity development.', fullDesc: 'We craft consistent brand experiences across all touchpoints, from logo to messaging.' },
  { icon: FaBriefcase, title: 'Consultancy', shortDesc: 'Expert IT consulting.', fullDesc: 'Strategic advice to help you leverage technology for growth, efficiency, and competitive advantage.' },
  { icon: FaChalkboardTeacher, title: 'ICT Training', shortDesc: 'Empower your team with ICT skills.', fullDesc: 'Custom training programs in software development, cybersecurity, data science, and more.' },
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Theme-aware gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-gradient">Services</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-20 max-w-2xl mx-auto">
          We provide the following services to help your business thrive in the digital age.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Card container with 3D hover effect - reduced height to h-64 */}
                <motion.div
                  className="relative w-full h-64"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 glass p-6 rounded-2xl flex flex-col items-center text-center bg-white/80 dark:bg-black/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-primary text-5xl mb-4">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{service.shortDesc}</p>
                  </div>
                  
                  {/* Back face */}
                  <div
                    className="absolute inset-0 glass p-6 rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/20 to-redAccent/20"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-gray-800 dark:text-gray-200 text-sm mb-4">{service.fullDesc}</p>
                    <button className="px-4 py-2 bg-primary hover:bg-redAccent text-white rounded-full text-sm transition-all">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
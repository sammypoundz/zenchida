import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

const IMG_BASE_URL = 'https://zenchidanigeria.com.ng/img/';

const projects = [
  {
    name: 'African Medical Journal - An Official Journal of MDCAN - FMC, Abuja',
    logo: 'ajmj.png',
    url: 'https://afmjonline.com',
    active: true,
  },
  {
    name: 'NARD Online Resource Library Website',
    logo: 'nardApp.webp',
    url: 'https://www.nardlibrary.com',
    active: true,
  },
  {
    name: 'NARD Online Library Mobile App',
    logo: 'nardApp.webp',
    url: 'https://play.google.com/store/apps/details?id=nardilibraryapp.com.nardilibraryapp',
    active: true,
  },
  {
    name: 'Golden Light School Website',
    logo: 'golden.png',
    url: 'https://www.goldenlightschool.com',
    active: true,
  },
  {
    name: 'Webtray – Business Inventory System',
    logo: 'webtray.jpg', // replace with actual logo filename
    url: 'https://www.webtray.ng',
    active: true,
  },
  {
    name: 'MM Haruna – Online English Academy',
    logo: 'mmharuna.png', // replace with actual logo filename
    url: 'https://www.mmharuna.com/',
    active: true,
  },
  {
    name: 'Vinos School Website',
    logo: 'vinos.jpeg', // replace with actual logo filename
    url: 'https://vinosschool.com/',
    active: true,
  },
  {
    name: 'JVO Shopping Plaza and Event Centers',
    logo: 'jvo.png', // replace with actual logo filename
    url: 'https://jvoeventcenter.com/',
    active: true,
  },
  {
    name: 'Orient Tabloid  An Online Media News Site',
    logo: 'IMG-20190818-WA0000.jpg',
    url: 'https://orienttabloid.com/',
    active: true,
  },
  {
    name: 'Chira Heritage Foundation Website',
    logo: 'CHIRA LOGO 2.jpg',
    url: null,
    active: false,
  },
  {
    name: 'Zedd Couture Online Shopping Boutique Website',
    logo: 'Zedd Couture.jpg',
    url: null,
    active: false,
  },
  {
    name: 'Arduath.org: An e-library for the Resident Doctors at UniAbuja Teaching Hospital',
    logo: 'ard-uath.jfif',
    url: null,
    active: false,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Theme-aware background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Previous <span className="text-gradient">Projects</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-20 max-w-2xl mx-auto">
          We provided these solutions for the following organisations
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-redAccent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-redAccent p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img
                        src={`${IMG_BASE_URL}${project.logo}`}
                        alt={project.name}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/64?text=Logo';
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 line-clamp-3">
                  {project.name}
                </h3>

                {project.active ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-redAccent text-white px-6 py-3 rounded-full text-sm font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-redAccent/30"
                  >
                    Take a Tour <FiExternalLink />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-semibold cursor-not-allowed"
                  >
                    Unrenewed
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
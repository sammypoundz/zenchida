import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Custom hook to detect mobile screens (JavaScript version)
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

const teamMembers = [
  {
    name: 'Godswill Uche Chira',
    role: 'Managing Director & Chief Operating Officer (COO)',
    avatar: `https://ui-avatars.com/api/?name=Godswill+Uche+Chira&background=3B82F6&color=fff&size=128`,
    linkedin: '#',
    email: 'godswill.chira@smartedufy.ng',
    size: 'tall',
  },
  {
    name: 'Samuel Agbo',
    role: 'Director of Technology & IT Operations',
    avatar: `https://ui-avatars.com/api/?name=Samuel+Agbo&background=10B981&color=fff&size=128`,
    linkedin: '#',
    email: 'samuel.agbo@smartedufy.ng',
    size: 'wide',
  },
  {
    name: 'Prince Christian Emeka',
    role: 'Director of Business Development & Programmes',
    avatar: `https://ui-avatars.com/api/?name=Prince+Christian+Emeka&background=8B5CF6&color=fff&size=128`,
    linkedin: '#',
    email: 'christian.emeka@smartedufy.ng',
    size: 'regular',
  },
  {
    name: 'Stella Chira',
    role: 'Director of Finance & Administration',
    avatar: `https://ui-avatars.com/api/?name=Stella+Chira&background=EC4899&color=fff&size=128`,
    linkedin: '#',
    email: 'stella.chira@smartedufy.ng',
    size: 'regular',
  },
  {
    name: 'Divine Amarachi Ogbonna',
    role: 'Director of Corporate Communications & Public Relations',
    avatar: `https://ui-avatars.com/api/?name=Divine+Amarachi+Ogbonna&background=F59E0B&color=fff&size=128`,
    linkedin: '#',
    email: 'divine.ogbonna@smartedufy.ng',
    size: 'regular',
  },
  {
    name: 'Chukwuemeka Godwin',
    role: 'Director of Operations & Logistics',
    avatar: `https://ui-avatars.com/api/?name=Chukwuemeka+Godwin&background=EF4444&color=fff&size=128`,
    linkedin: '#',
    email: 'chukwuemeka.godwin@smartedufy.ng',
    size: 'regular',
  },
];

const Team = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const isMobile = useMediaQuery('(max-width: 639px)');

  return (
    <section id="team" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      {/* Floating orbs - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="hidden sm:block absolute bottom-20 right-20 w-96 h-96 bg-redAccent/10 dark:bg-redAccent/20 rounded-full filter blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Meet Our <span className="text-gradient">Team</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 sm:mb-20 max-w-2xl mx-auto">
          The passionate experts behind your success.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          style={{
            gridAutoRows: isMobile ? 'minmax(180px, auto)' : 'minmax(220px, auto)',
          }}
        >
          {teamMembers.map((member, index) => {
            // On mobile, all cards are normal (span 1)
            const colSpan = isMobile ? 1 : (member.size === 'wide' ? 2 : 1);
            const rowSpan = isMobile ? 1 : (member.size === 'tall' ? 2 : 1);

            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-6 flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-primary/30 mb-3 sm:mb-4 ring-2 ring-primary/20 group-hover:border-primary transition-all duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3 break-words w-full">
                  {member.role}
                </p>

                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaLinkedinIn size={12} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaEnvelope size={12} />
                  </a>
                </div>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
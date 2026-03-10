import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Helper to encode image URLs (handles spaces, parentheses, etc.)
const encodeImageUrl = (url) => encodeURI(url);

// Base URL for images (same as initiatives)
const baseUrl = 'https://zenchidanigeria.com.ng/img/';

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
    avatar: encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 3.51.27 PM.jpeg'),
    linkedin: 'https://www.linkedin.com/in/uche-chira-3b36b2146',
    email: 'chirauche001@gmail.com',
    size: 'tall',
  },
  {
    name: 'Samuel Agbo',
    role: 'Director of Technology & IT Operations',
    avatar: encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 3.44.23 PM.jpeg'),
    linkedin: 'https://www.linkedin.com/in/sammy-poundz-207749253',
    email: 'sagbo1035@gmail.com',
    size: 'wide',
  },
  {
    name: 'Prince Christian Emeka',
    role: 'Director of Business Development & Programmes',
    avatar: encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-10 at 1.48.16 PM.jpeg'),
    linkedin: 'https://www.linkedin.com/in/prince-christian-emeka-45b666192',
    email: 'princechristianemeka@gmail.com',
    size: 'regular',
  },
  {
    name: 'Stella Chira',
    role: 'Director of Finance & Administration',
    avatar: encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 6.02.02 PM.jpeg'),
    linkedin: 'https://www.linkedin.com/in/stella-chinwe-0122812b8',
    email: 'stellanwaobasi@gmail.com',
    size: 'regular',
  },
  {
    name: 'Divine Amarachi Ogbonna',
    role: 'Director of Corporate Communications & Public Relations',
    avatar:'https://ui-avatars.com/api/?name=Divine+Amarachi+Ogbonna&background=F59E0B&color=fff&size=128',
    linkedin: '#',
    email: 'divine.ogbonna@smartedufy.ng',
    size: 'regular',
  },
  {
    name: 'Chukwuemeka Godwin',
    role: 'Director of Operations & Logistics',
    avatar: encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 3.43.33 PM.jpeg'),
    linkedin: 'https://www.linkedin.com/in/godwin-chukwuemeka-7695a6354',
    email: 'gchukwuemeka256@gmail.com',
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          style={{
            gridAutoRows: isMobile ? 'minmax(220px, auto)' : 'minmax(280px, auto)',
          }}
        >
          {teamMembers.map((member, index) => {
            // On mobile, all cards are normal (span 1)
            const colSpan = isMobile ? 1 : (member.size === 'wide' ? 2 : 1);
            const rowSpan = isMobile ? 1 : (member.size === 'tall' ? 2 : 1);

            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Larger avatar */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-primary/30 mb-4 sm:mb-6 ring-4 ring-primary/20 group-hover:border-primary transition-all duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to UI Avatars if image fails to load
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3B82F6&color=fff&size=128`;
                    }}
                  />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 break-words w-full">
                  {member.role}
                </p>

                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaEnvelope size={14} />
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
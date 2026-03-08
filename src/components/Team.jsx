import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Samuel Agbo',
    role: 'Executive Director',
    avatar: 'https://i.pravatar.cc/400?u=1',
    linkedin: '#',
    email: 'samuel.agbo@zenchida.ng',
    size: 'tall',
  },
  {
    name: 'Aisha Bello',
    role: 'Program Manager',
    avatar: 'https://i.pravatar.cc/400?u=2',
    linkedin: '#',
    email: 'aisha.bello@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'John Musa',
    role: 'Lead Developer',
    avatar: 'https://i.pravatar.cc/400?u=3',
    linkedin: '#',
    email: 'john.musa@zenchida.ng',
    size: 'wide',
  },
  {
    name: 'Fatima Lawal',
    role: 'Community Manager',
    avatar: 'https://i.pravatar.cc/400?u=4',
    linkedin: '#',
    email: 'fatima.lawal@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'David Peter',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/400?u=5',
    linkedin: '#',
    email: 'david.peter@zenchida.ng',
    size: 'tall',
  },
  {
    name: 'Mary James',
    role: 'Academy Coordinator',
    avatar: 'https://i.pravatar.cc/400?u=6',
    linkedin: '#',
    email: 'mary.james@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'Michael Okon',
    role: 'Backend Engineer',
    avatar: 'https://i.pravatar.cc/400?u=7',
    linkedin: '#',
    email: 'michael.okon@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'Grace Emmanuel',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/400?u=8',
    linkedin: '#',
    email: 'grace.emmanuel@zenchida.ng',
    size: 'wide',
  },
  {
    name: 'Victor Okafor',
    role: 'DevOps Engineer',
    avatar: 'https://i.pravatar.cc/400?u=9',
    linkedin: '#',
    email: 'victor.okafor@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'Chidinma Nwosu',
    role: 'Product Manager',
    avatar: 'https://i.pravatar.cc/400?u=10',
    linkedin: '#',
    email: 'chidinma.nwosu@zenchida.ng',
    size: 'tall',
  },
  {
    name: 'Emeka Okafor',
    role: 'QA Engineer',
    avatar: 'https://i.pravatar.cc/400?u=11',
    linkedin: '#',
    email: 'emeka.okafor@zenchida.ng',
    size: 'regular',
  },
  {
    name: 'Ngozi Eze',
    role: 'HR Manager',
    avatar: 'https://i.pravatar.cc/400?u=12',
    linkedin: '#',
    email: 'ngozi.eze@zenchida.ng',
    size: 'regular',
  },
];

const Team = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="team" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Theme-aware background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />
      
      {/* Floating orbs - hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block absolute top-20 left-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="hidden sm:block absolute bottom-20 right-20 w-96 h-96 bg-redAccent/10 dark:bg-redAccent/20 rounded-full filter blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            gridAutoRows: '200px sm:250px',
            gridAutoFlow: 'dense',
          }}
        >
          {teamMembers.map((member, index) => {
            let colSpan = 1;
            let rowSpan = 1;
            if (member.size === 'wide') {
              colSpan = 2;
            } else if (member.size === 'tall') {
              rowSpan = 2;
            }

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

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3">{member.role}</p>

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
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
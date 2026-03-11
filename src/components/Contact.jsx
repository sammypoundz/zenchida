import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      // Replace with the actual path to your PHP script
      const response = await fetch('https://www.zenchidanigeria.com.ng/sendemail/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: data.message, error: null });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus({ submitting: false, success: null, error: data.message });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: null,
        error: 'Network error. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Theme-aware background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-darker dark:via-dark dark:to-darker" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-20 max-w-2xl mx-auto">
          Ready to start your next project? Contact us today and let's build something amazing together.
        </p>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass p-10 rounded-3xl bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 px-0 focus:outline-none focus:border-primary transition-colors text-gray-900 dark:text-white"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 px-0 focus:outline-none focus:border-primary transition-colors text-gray-900 dark:text-white"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 px-0 focus:outline-none focus:border-primary transition-colors resize-none text-gray-900 dark:text-white"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-primary peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>

              {/* Status messages */}
              {status.error && (
                <p className="text-red-500 text-sm">{status.error}</p>
              )}
              {status.success && (
                <p className="text-green-500 text-sm">{status.success}</p>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-primary hover:bg-redAccent text-white py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl"><FaMapMarkerAlt /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">#23, Massenya Street Off Cotonou Crescent Wuse Zone 6, Abuja, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl"><FaPhone /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">+234(0)7080-900-035</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-2xl"><FaEnvelope /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">zenchidanigeria@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-4 rounded-3xl h-64 overflow-hidden border border-gray-200 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.711372677601!2d3.379173414770513!3d6.451323995332062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1645543212345!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
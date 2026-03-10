import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState, useEffect } from 'react';

// Helper to encode image URLs (handles spaces, parentheses, etc.)
const encodeImageUrl = (url) => encodeURI(url);

const baseUrl = 'https://zenchidanigeria.com.ng/img/';

const initiatives = [
  {
    title: 'Starkcodex',
    category: 'Starkcodex',
    description: 'Empowering young minds with coding and computational thinking through hands-on workshops.',
    images: [
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.16 PM.jpeg'),
    ],
    alt: 'Starkcodex coding workshop',
  },
  {
    title: 'Kiddies Techies',
    category: 'Kiddies Techies',
    description: 'Introducing children to robotics, AI, and emerging technologies in a fun, engaging environment.',
    images: [
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.17 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.34.13 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.34.13 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.52 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.51 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.50 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.04 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.03 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.03 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.02 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.01 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.33.00 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-02-24 at 6.32.55 PM.jpeg'),
    ],
    alt: 'Kiddies Techies robotics session',
  },
  {
    title: 'AI Tech Event',
    category: 'AI Tech Event',
    description: 'Annual conference bringing together AI enthusiasts, experts, and innovators to shape the future.',
    images: [
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.14.58 PM.jpeg'),
    ],
    alt: 'AI tech event',
  },
  {
    title: 'TedX',
    category: 'TedX',
    description: 'Independent TEDx events featuring inspiring talks on technology, education, and community.',
    images: [
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.16 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.17 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.14.58 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.14.58 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.00 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.01 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.20 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.17 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.15 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.12 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.10 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.09 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.08 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.07 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.07 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.04 PM.jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.02 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.01 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.15.00 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.14.58 PM (2).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.17 PM (1).jpeg'),
      encodeImageUrl(baseUrl + 'WhatsApp Image 2026-03-09 at 4.12.16 PM (2).jpeg'),
    ],
    alt: 'TEDx event',
  },
];

// Get unique categories for tabs
const categories = ['All', ...new Set(initiatives.map(item => item.category))];

// Number of images per page in category view (only used for 3+ images)
const IMAGES_PER_PAGE = 12;

const Initiatives = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [imageErrors, setImageErrors] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = (id, url) => {
    console.error(`Failed to load image: ${url}`);
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Filter initiatives based on selected category
  const filteredInitiatives = selectedCategory === 'All'
    ? initiatives
    : initiatives.filter(item => item.category === selectedCategory);

  // For category-specific view: all images from filtered initiatives
  const allCategoryImages = filteredInitiatives.flatMap(initiative =>
    initiative.images.map((src, idx) => ({
      src,
      alt: initiative.alt,
      title: initiative.title,
      id: `${initiative.title}-img-${idx}`,
    }))
  );

  // Pagination logic (only used for 3+ images)
  const totalPages = Math.ceil(allCategoryImages.length / IMAGES_PER_PAGE);
  const paginatedImages = allCategoryImages.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Modal handlers
  const openModal = (images, index) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImages.length]);

  // Fallback display when image fails to load
  const renderFallback = (title) => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-redAccent">
      <span className="text-5xl font-bold text-white drop-shadow-lg">
        {title.substring(0, 2).toUpperCase()}
      </span>
    </div>
  );

  // Render a single image thumbnail (used in all layouts)
  const renderImageThumbnail = (img, index, imagesArray, onClick, customClass = '') => (
    <div
      key={img.id}
      className={`rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${customClass}`}
      onClick={onClick}
    >
      <div className="relative bg-gray-300 dark:bg-gray-700 w-full h-full">
        {!imageErrors[img.id] ? (
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={() => handleImageError(img.id, img.src)}
            loading="lazy"
          />
        ) : (
          renderFallback(img.title)
        )}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 flex items-end p-4 opacity-0 hover:opacity-100">
          <span className="text-white font-semibold text-sm">{img.title}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="initiatives" className="py-20 sm:py-32 relative overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Decorative orbs */}
      <div className="hidden sm:block absolute top-20 right-20 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-96 h-96 bg-redAccent/5 dark:bg-redAccent/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-gradient">Initiatives</span>
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Programs we run to inspire, educate, and build the future.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Conditional rendering: "All" vs specific category */}
        {selectedCategory === 'All' ? (
          /* ----- "ALL" VIEW: Description cards with mini galleries ----- */
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{initiative.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {initiative.description}
                </p>
                {initiative.images.length > 0 && (
                  <div>
                    <div className="flex gap-2 mb-2">
                      {initiative.images.slice(0, 3).map((src, idx) => {
                        const imgId = `${initiative.title}-mini-${idx}`;
                        return (
                          <div
                            key={imgId}
                            className="w-20 h-20 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 cursor-pointer"
                            onClick={() => {
                              const categoryImages = initiative.images.map((s, i) => ({
                                src: s,
                                alt: initiative.alt,
                                title: initiative.title,
                                id: `${initiative.title}-modal-${i}`,
                              }));
                              openModal(categoryImages, idx);
                            }}
                          >
                            {!imageErrors[imgId] ? (
                              <img
                                src={src}
                                alt={initiative.alt}
                                className="w-full h-full object-cover"
                                onError={() => handleImageError(imgId, src)}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-primary to-redAccent flex items-center justify-center text-white font-bold">
                                {initiative.title.charAt(0)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <button
                      onClick={() => setSelectedCategory(initiative.category)}
                      className="text-sm text-primary hover:underline"
                    >
                      View all {initiative.images.length} images →
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* ----- SINGLE CATEGORY VIEW: Full-width header + dynamic image layout ----- */
          <>
            {filteredInitiatives.length > 0 && (
              <div className="mb-12 text-center">
                <motion.h3
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredInitiatives[0].title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {filteredInitiatives[0].description}
                </motion.p>
              </div>
            )}

            {/* Dynamic image layout based on count */}
            {allCategoryImages.length > 0 && (
              <>
                {allCategoryImages.length === 1 ? (
                  /* ----- Single image: full‑width, large display ----- */
                  <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {renderImageThumbnail(
                      allCategoryImages[0],
                      0,
                      allCategoryImages,
                      () => openModal(allCategoryImages, 0),
                      'w-full h-auto max-h-[500px]'
                    )}
                  </motion.div>
                ) : allCategoryImages.length === 2 ? (
                  /* ----- Two images: responsive grid (stack on mobile, side‑by‑side on larger) ----- */
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {allCategoryImages.map((img, index) =>
                      renderImageThumbnail(
                        img,
                        index,
                        allCategoryImages,
                        () => openModal(allCategoryImages, index),
                        'w-full h-80' // fixed height for consistency
                      )
                    )}
                  </motion.div>
                ) : (
                  /* ----- Three or more images: masonry columns with pagination ----- */
                  <>
                    <motion.div
                      className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {paginatedImages.map((img, index) =>
                        renderImageThumbnail(
                          img,
                          index,
                          allCategoryImages,
                          () => openModal(allCategoryImages, (currentPage - 1) * IMAGES_PER_PAGE + index),
                          'break-inside-avoid mb-4'
                        )
                      )}
                    </motion.div>

                    {/* Pagination controls */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        <span className="text-gray-700 dark:text-gray-300">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>

      {/* Modal for enlarged image */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
            >
              ✕
            </button>
            {currentImages.length > 0 && (
              <>
                <img
                  src={currentImages[currentImageIndex].src}
                  alt={currentImages[currentImageIndex].alt}
                  className="w-full h-full object-contain"
                />
                {currentImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75"
                    >
                      →
                    </button>
                  </>
                )}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                  {currentImageIndex + 1} / {currentImages.length} • {currentImages[currentImageIndex].title}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Initiatives;
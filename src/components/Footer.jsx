import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass py-12 border-t border-default">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            <img
              src="https://zenchidanigeria.com.ng/img/transparent_logo.png"
              alt="Zenchida Nigeria Ltd"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/p/Zenchida-Nigeria-Limited-61561863330357/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/zenchidanigeria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/posts/uche-chira-3b36b2146_zenchida-digitalsolutions-webdevelopment-activity-7363926560342478850-mA0G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="text-center text-muted text-sm mt-8">
          &copy; {new Date().getFullYear()} Zenchida Nigeria Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
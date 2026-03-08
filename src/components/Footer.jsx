import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

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
            <a href="#" className="text-muted hover:text-primary transition-colors text-xl"><FaTwitter /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors text-xl"><FaGithub /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors text-xl"><FaFacebook /></a>
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
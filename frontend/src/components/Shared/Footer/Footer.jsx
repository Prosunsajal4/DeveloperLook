import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHeart,
  FaNewspaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.53 3H21.5L14.42 10.91L22.75 21H16.19L10.89 14.37L4.91 21H0.94L8.44 12.61L0.42 3H7.13L12 9.13L17.53 3ZM16.37 19.13H18.19L6.5 4.75H4.54L16.37 19.13Z"
      fill="currentColor"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/news", label: "Latest News" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  const supportLinks = [
    { to: "/help", label: "Help & Support" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/privacy-terms", label: "Privacy & Terms" },
  ];

  const legalLinks = [
    { to: "/privacy-terms", label: "Privacy Policy" },
    { to: "/privacy-terms", label: "Terms of Service" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/SajalProsun",
      icon: FaFacebook,
      label: "Facebook",
      hoverColor: "hover:text-blue-500",
    },
    {
      href: "https://www.instagram.com/prosun_mukherjee_sajal/",
      icon: FaInstagram,
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/in/prosun-mukherjee-sajal",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
    {
      href: "https://github.com/Prosunsajal4",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:text-gray-400",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FaNewspaper className="text-2xl text-white" />
              </div>
              <span className="font-bold text-2xl">
                News<span className="text-indigo-400">Hub</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fresh news aggregated for you — searchable, filterable, and
              delivered reliably from multiple sources.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:bg-gray-700`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:text-gray-400 hover:bg-gray-700"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Khulna, Bangladesh</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📧</span>
                </div>
                <a
                  href="mailto:prosunsajal123@gmail.com"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  prosunsajal123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📞</span>
                </div>
                <a
                  href="tel:+8801911572117"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  +8801911572117
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} NewsHub. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> for news
              enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">PP</span>
              </div>
              <div>
                <div className="text-xl font-bold">Primo Pack</div>
                <div className="text-sm opacity-80">It's all about Caring</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading Indian manufacturer of premium packaging machinery solutions.
              Serving industries across India since 2000 with innovative, reliable equipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm opacity-90 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-90 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/industries" className="text-sm opacity-90 hover:text-accent transition-colors">Industries</Link></li>
              <li><Link to="/services" className="text-sm opacity-90 hover:text-accent transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">Strapping Machines</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">Wrapping Machines</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">PET Straps</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">Hand Tools</Link></li>
              <li><Link to="/products" className="text-sm opacity-90 hover:text-accent transition-colors">Wrapping Materials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <div className="text-sm opacity-90">
                  <div>123 Industrial Road</div>
                  <div>Mumbai, Maharashtra 400001</div>
                  <div>India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+919876543210" className="text-sm opacity-90 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@primopack.in" className="text-sm opacity-90 hover:text-accent transition-colors">
                  info@primopack.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80">
            © 2024 Primo Pack. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm opacity-80 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm opacity-80 hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-sm opacity-80 hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
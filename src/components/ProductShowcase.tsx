import React from 'react';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const ProductShowcase = () => {
  const featured = products.slice(0, 3); // first three products

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-gradient">Packaging Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of packaging machinery designed to optimize 
            your production efficiency and ensure reliable, consistent results.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <div 
              key={product.id} 
              className="card-product group animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center justify-center space-x-2">
                      <Eye size={16} />
                      <span>Quick View</span>
                    </button>
                    <button className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors flex items-center justify-center space-x-2">
                      <Download size={16} />
                      <span>Brochure</span>
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex justify-between items-center space-x-2">
                  <div className="text-lg font-semibold text-primary">
                    {product.price}
                  </div>
                  <div className="flex space-x-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn-outline group/btn px-4"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/quote" className="btn-hero px-4">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Link to="/products" className="btn-hero">
            View All Products
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, ArrowRight, Star } from 'lucide-react';
import { products } from '@/data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const categories = [
    'All',
    'Automatic Strapping Machines',
    'Semi-automatic Strapping Machines', 
    'Wrapping Machines',
    'PET Straps',
    'Wrapping Material',
    'Hand Tools'
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleProductComparison = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            Discover our comprehensive range of packaging machinery and accessories designed 
            to meet every industrial packaging need.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Comparison Counter */}
            {selectedProducts.length > 0 && (
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                {selectedProducts.length} products selected for comparison
                <button 
                  className="ml-4 bg-accent text-accent-foreground px-3 py-1 rounded text-sm hover:bg-accent-light transition-colors"
                  onClick={() => {/* Comparison logic */}}
                >
                  Compare
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="card-product group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
                      <button className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center justify-center space-x-2">
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                      <button className="flex-1 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors flex items-center justify-center space-x-2">
                        <Download size={14} />
                        <span>Brochure</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-xs">
                          <div className="w-1 h-1 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-primary">
                      {product.price}
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductComparison(product.id)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <span className="text-sm">Compare</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">

                    <Link to="/contact" className="flex-1 btn-outline text-sm py-2 text-center">
                      View Details
                    </Link>
                    <Link to="/quote" className="flex-1 btn-hero text-sm py-2 text-center">

                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Our engineering team can design custom packaging solutions tailored to your specific requirements.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-300 flex items-center space-x-2 mx-auto">
            <span>Contact Engineering Team</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
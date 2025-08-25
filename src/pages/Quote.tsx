import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Calculator, FileText, Send, Plus, X, CheckCircle } from 'lucide-react';

const Quote = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    location: '',
    productionVolume: '',
    currentPackaging: '',
    timeline: '',
    budget: '',
    additionalRequirements: ''
  });

  const products = [
    { id: 'auto-strap-5000', name: 'AUTO-STRAP 5000', category: 'Automatic Strapping', price: 'From $15,000' },
    { id: 'semi-strap-300', name: 'SEMI-STRAP 300', category: 'Semi-automatic Strapping', price: 'From $8,000' },
    { id: 'wrap-pro-2000', name: 'WRAP-PRO 2000', category: 'Wrapping Machines', price: 'From $25,000' },
    { id: 'pet-straps', name: 'PET Strapping Band', category: 'Strapping Materials', price: 'From $2/kg' },
    { id: 'stretch-film', name: 'Stretch Film Roll', category: 'Wrapping Materials', price: 'From $3/roll' },
    { id: 'manual-tools', name: 'Manual Strapping Tool', category: 'Hand Tools', price: 'From $150' }
  ];

  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request:', { selectedProducts, formData });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get Your <span className="text-accent">Quote</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed animate-fade-in-up">
            Build a custom quote for your packaging needs. Our experts will provide 
            detailed pricing and recommendations tailored to your requirements.
          </p>
        </div>
      </section>

      {/* Quote Builder */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Selection */}
              <div className="lg:col-span-2">
                <div className="card-elegant mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Calculator size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Select Products</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((product) => (
                      <div 
                        key={product.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                          selectedProducts.includes(product.id)
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleProductToggle(product.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{product.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                            <p className="text-primary font-medium">{product.price}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedProducts.includes(product.id)
                              ? 'border-primary bg-primary'
                              : 'border-border'
                          }`}>
                            {selectedProducts.includes(product.id) && (
                              <CheckCircle size={16} className="text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information Form */}
                <div className="card-elegant">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Company Information</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Contact Person *</label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Industry</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Industry</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="automotive">Automotive</option>
                          <option value="electronics">Electronics</option>
                          <option value="food-beverage">Food & Beverage</option>
                          <option value="pharmaceuticals">Pharmaceuticals</option>
                          <option value="textiles">Textiles</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="City, State, Country"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Daily Production Volume</label>
                        <select
                          value={formData.productionVolume}
                          onChange={(e) => handleInputChange('productionVolume', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Volume</option>
                          <option value="low">Less than 100 packages/day</option>
                          <option value="medium">100-500 packages/day</option>
                          <option value="high">500-1000 packages/day</option>
                          <option value="very-high">More than 1000 packages/day</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Implementation Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select Timeline</option>
                          <option value="immediate">Immediate (Within 1 month)</option>
                          <option value="short">Short term (1-3 months)</option>
                          <option value="medium">Medium term (3-6 months)</option>
                          <option value="long">Long term (6+ months)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Current Packaging Method</label>
                      <textarea
                        value={formData.currentPackaging}
                        onChange={(e) => handleInputChange('currentPackaging', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Describe your current packaging process, equipment, and challenges..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range (Optional)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="over-250k">Over $250,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                      <textarea
                        value={formData.additionalRequirements}
                        onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Any specific requirements, customizations, or questions you have..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full btn-hero">
                      Submit Quote Request
                      <Send size={20} className="ml-2" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Quote Summary */}
              <div className="lg:col-span-1">
                <div className="card-elegant sticky top-8">
                  <h3 className="text-xl font-bold mb-6">Quote Summary</h3>
                  
                  {selectedProducts.length > 0 ? (
                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-primary">Selected Products:</h4>
                      {selectedProducts.map(productId => {
                        const product = products.find(p => p.id === productId);
                        return product ? (
                          <div key={productId} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <div className="font-medium text-sm">{product.name}</div>
                              <div className="text-xs text-muted-foreground">{product.category}</div>
                            </div>
                            <button
                              onClick={() => handleProductToggle(productId)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calculator size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Select products to see your quote summary</p>
                    </div>
                  )}

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold mb-4">What's Next?</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Expert review of requirements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Custom solution design</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Detailed pricing proposal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span>Free consultation call</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h5 className="font-semibold text-primary mb-2">Need Help?</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our packaging experts are ready to assist you.
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      Call +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
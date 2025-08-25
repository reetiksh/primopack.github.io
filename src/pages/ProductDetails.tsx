import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getProductById } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const product = getProductById(productId);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="btn-hero">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {product.specs && (
              <>
                <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                <ul className="list-disc list-inside mb-6 space-y-1">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex space-x-4">
              <Link to="/quote" className="btn-hero">
                Get Quote
              </Link>
              <Link to="/products" className="btn-outline flex items-center">
                Back to Products
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;

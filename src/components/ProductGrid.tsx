import { Plus } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useState } from 'react';

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

export default function ProductGrid({ selectedCategory, onAddToCart, searchQuery }: ProductGridProps) {
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all'
      ? true
      : product.category === selectedCategory;

    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    setAddingToCart(product.id);
    onAddToCart(product);
    setTimeout(() => setAddingToCart(null), 300);
  };

  return (
    <div className="flex-1">
      <div className="lg:hidden mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => {}}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="all">All Items</option>
          <option value="popular">Popular Items</option>
          <option value="burgers">Burgers</option>
          <option value="rolls">Rolls</option>
          <option value="biryani">Biryani</option>
          <option value="drinks">Drinks</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500">No items found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-100"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    Rs. {product.price}
                  </span>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all ${
                      addingToCart === product.id ? 'scale-95' : 'scale-100'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

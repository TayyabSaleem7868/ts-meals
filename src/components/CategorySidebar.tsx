import { Flame, Sandwich, WrapText, Utensils, CupSoda, IceCream2, Grid2x2 } from 'lucide-react';
import { categories } from '../data/categories';

interface CategorySidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'grid-2x2': Grid2x2,
  'flame': Flame,
  'burger': Sandwich,
  'wrap-text': WrapText,
  'utensils': Utensils,
  'cup-soda': CupSoda,
  'ice-cream': IceCream2
};

export default function CategorySidebar({ selectedCategory, onCategorySelect }: CategorySidebarProps) {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
        <h3 className="font-semibold text-gray-900 mb-4">Menu Categories</h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-50 text-red-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

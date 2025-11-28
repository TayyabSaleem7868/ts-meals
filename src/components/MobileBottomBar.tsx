import { Home, Search, ShoppingCart, User } from 'lucide-react';

interface MobileBottomBarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function MobileBottomBar({ cartCount, onCartClick }: MobileBottomBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-red-600">
          <Home className="h-6 w-6" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900">
          <Search className="h-6 w-6" />
          <span className="text-xs">Search</span>
        </button>

        <button
          onClick={onCartClick}
          className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 relative"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900">
          <User className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}

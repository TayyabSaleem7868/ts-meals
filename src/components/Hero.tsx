import { Star, Clock, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">TS Meals</h2>
            <p className="text-red-50 mb-3">Authentic Pakistani Cuisine</p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                <span className="font-semibold">4.8</span>
                <span className="text-red-50">(500+ ratings)</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>25-35 min</span>
              </div>

              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>Free delivery on orders above Rs. 500</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="h-12 w-12 bg-white/30 rounded-full flex items-center justify-center text-2xl">
              🍽️
            </div>
            <div>
              <p className="text-xs text-red-50">Cuisine</p>
              <p className="font-semibold">Pakistani</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

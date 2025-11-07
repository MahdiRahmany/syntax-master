import { Search, ShoppingCart, User } from "lucide-react";

export default function NavbarAction() {
  return (
    <div className="flex items-center space-x-4">
      <button
        aria-label="Search"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        <Search size={20} />
      </button>

      <button
        aria-label="Cart"
        className="relative text-gray-600 hover:text-blue-600 transition"
      >
        <ShoppingCart size={20} />
        <span className="absolute -top-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
          2
        </span>
      </button>

      <button
        aria-label="Account"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        <User size={20} />
      </button>

      <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
        LOGIN
      </button>
    </div>
  );
}

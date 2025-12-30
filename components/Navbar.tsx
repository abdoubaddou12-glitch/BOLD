
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              المغرب <span className="text-emerald-600">التقني</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-reverse space-x-8 text-gray-600 font-medium">
            <a href="#" className="hover:text-emerald-600 transition-colors">الرئيسية</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">تقنية</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">تطوير الذات</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">أفلييت</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">عن المدونة</a>
          </div>
          <div className="flex items-center">
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md">
              اشترك الآن
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

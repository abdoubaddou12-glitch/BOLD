
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import AIAssistant from './components/AIAssistant';
import { BLOG_POSTS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredPosts = activeCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-16 px-4 md:py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-800/30 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">جديدنا لعام 2024</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              بوابتك نحو عالم <span className="text-emerald-400">التقنية</span> والنمو في المغرب
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto md:mr-0">
              نشاركك أحدث أخبار التكنولوجيا، استراتيجيات التسويق بالعمولة المجربة، ودروساً ملهمة لتطوير ذاتك وتحقيق حلمك المهني.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl">
                ابدأ رحلتك
              </button>
              <button className="bg-emerald-800 border border-emerald-700 px-8 py-3 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all">
                الأكثر قراءة
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/morocco/600/400" 
                alt="Morocco Tech" 
                className="rounded-3xl shadow-2xl border-4 border-emerald-800/50"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl text-emerald-900 max-w-[200px]">
                <div className="text-3xl font-black">+10k</div>
                <div className="text-sm font-medium opacity-70">متابع شغوف بالتقنية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Tabs */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-bold text-gray-900">أحدث المقالات</h2>
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
            {[
              { id: 'all', label: 'الكل' },
              { id: 'tech', label: 'تقنية' },
              { id: 'growth', label: 'تطوير' },
              { id: 'affiliate', label: 'أفلييت' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-emerald-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">لا توجد مقالات في هذا القسم حالياً.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-24 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">انضم إلى مجتمعنا البريدي</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            احصل على ملخص أسبوعي لأهم فرص الربح من الإنترنت، وأحدث أخبار التكنولوجيا في المغرب مباشرة إلى بريدك.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="flex-1 px-6 py-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg">
              اشترك مجاناً
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-6">لا تقلق، نحن نكره المزعجين أيضاً.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-black text-gray-900">
              المغرب <span className="text-emerald-600">التقني</span>
            </span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-gray-500 font-medium">
            <a href="#" className="hover:text-emerald-600">سياسة الخصوصية</a>
            <a href="#" className="hover:text-emerald-600">اتصل بنا</a>
            <a href="#" className="hover:text-emerald-600">من نحن</a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} المغرب التقني. جميع الحقوق محفوظة. صُمم بكل ❤️ للمجتمع المغربي.
          </p>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;

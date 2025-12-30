
import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'مستقبل الشركات الناشئة في المغرب: عام 2024 وما بعده',
    excerpt: 'استعراض شامل لنمو قطاع التكنولوجيا المالية (FinTech) في الدار البيضاء والرباط، والفرص المتاحة للشباب المغربي.',
    content: 'تفاصيل كاملة حول الشركات الناشئة...',
    category: 'tech',
    date: '15 مايو 2024',
    author: 'أمين العلمي',
    imageUrl: 'https://picsum.photos/seed/morocco-tech/800/450',
    readTime: '5 دقائق'
  },
  {
    id: '2',
    title: 'كيف تبدأ في مجال الأفلييت (التسويق بالعمولة) من الصفر؟',
    excerpt: 'دليل عملي للمغاربة الراغبين في دخول عالم الربح من الإنترنت عبر الأفلييت، مع نصائح حول استهداف السوق المحلي والدولي.',
    content: 'خطوات البدء في التسويق بالعمولة...',
    category: 'affiliate',
    date: '12 مايو 2024',
    author: 'سارة الإدريسي',
    imageUrl: 'https://picsum.photos/seed/affiliate/800/450',
    readTime: '8 دقائق'
  },
  {
    id: '3',
    title: 'إدارة الوقت: تقنيات فعالة لزيادة الإنتاجية في العمل الحر',
    excerpt: 'هل تعاني من التشتت؟ اكتشف كيف ينظم المحترفون وقتهم لتحقيق أقصى استفادة من يومهم وتحقيق التوازن بين الحياة والعمل.',
    content: 'نصائح تطوير الذات...',
    category: 'growth',
    date: '10 مايو 2024',
    author: 'ياسين بنجلون',
    imageUrl: 'https://picsum.photos/seed/growth/800/450',
    readTime: '6 دقائق'
  },
  {
    id: '4',
    title: 'تغطية خاصة: إطلاق الجيل الخامس 5G في المدن الكبرى بالمغرب',
    excerpt: 'ماذا يعني وصول الـ 5G للمستهلك المغربي وللمقاولات الصغرى والمتوسطة؟ التحديات والآفاق.',
    content: 'تفاصيل الـ 5G في المغرب...',
    category: 'tech',
    date: '08 مايو 2024',
    author: 'أمين العلمي',
    imageUrl: 'https://picsum.photos/seed/5g/800/450',
    readTime: '4 دقائق'
  }
];

export const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  tech: { label: 'أخبار التقنية', color: 'bg-blue-100 text-blue-700' },
  growth: { label: 'تطوير الذات', color: 'bg-emerald-100 text-emerald-700' },
  affiliate: { label: 'أفلييت وماركتينج', color: 'bg-purple-100 text-purple-700' }
};

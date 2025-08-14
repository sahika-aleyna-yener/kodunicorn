import type { BlogPost } from '../components/Blog/types';

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Kapat Uygulamaları: 1 Temmuz\'a Kadar Sessizlikte Büyümek',
    slug: 'kapat-uygulamalari-sessizlikte-buyumek',
    content: `
      <h2>🦄 Kodunicorn Günlükleri | Mayıs 2025</h2>
      
      <p>Hayat bazen çok gürültülü ve bunların içinde kaybolabiliyoruz. Ekranlar, bildirimler, sürekli değişen içerikler, bir türlü yetişilemeyen bilgiler…</p>
      
      <p>Bir noktada durmak, derin bir nefes almak ve şu soruyu sormak gerekiyor: <strong>"Ben bu kadar çok şeye maruz kalırken gerçekten bir şeye dönüşebiliyor muyum?"</strong></p>
      
      <p>Ben bu soruyu kendime sordum ve cevabım netti: <em>Hayır.</em></p>
      
      <h3>Neden Uygulamaları Kapatıyorum?</h3>
      
      <ul>
        <li>Dikkat dağınıklığından kurtulmak</li>
        <li>Daha derin düşünmek</li>
        <li>Kendi projelerime odaklanmak</li>
        <li>Gerçek bağlantılar kurmak</li>
      </ul>
      
      <p>Bu süreçte neler yapacağım:</p>
      
      <blockquote>
        "Sessizlik, en büyük öğretmendir. Onu dinlemeyi öğrenmek, hayatın en değerli becerisidir."
      </blockquote>
    `,
    excerpt: 'Hayat bazen çok gürültülü ve bunların içinde kaybolabiliyoruz. Ekranlar, bildirimler, sürekli değişen içerikler...',
    category: 'daily-life',
    tags: ['dijital-detoks', 'farkındalık', 'üretkenlik'],
    author: {
      name: 'Şahika Aleyna Yener',
      avatar: '/assets/author-avatar.jpg',
      bio: 'Bilgisayar Bilimleri öğrencisi, teknoloji tutkunu'
    },
    publishDate: new Date('2025-05-20'),
    readingTime: 5,
    coverImage: '/assets/blog/post-1-cover.jpg',
    featured: true,
    likes: 42,
    comments: []
  },
  {
    id: '2',
    title: 'KodUnicorn Glow-Up Günlüğü (22 Nisan – 1 Temmuz)',
    slug: 'kodunicorn-glow-up-gunlugu',
    content: `
      <h2>🌟 Genel Hedefler:</h2>
      
      <p>Bu süreçte hem fiziksel hem zihinsel olarak kendimi geliştirmeyi hedefliyorum.</p>
      
      <h3>📆 Haftalara Göre Glow-Up Planı:</h3>
      
      <h4>HAFTA 1: Yenilenme Zamanı (22–28 Nisan)</h4>
      <ul>
        <li>Dijital detoks başlat</li>
        <li>Uyku düzenini iyileştir</li>
        <li>Su tüketimini artır</li>
      </ul>
      
      <h4>HAFTA 2: Temiz Başlangıçlar (29 Nisan–5 Mayıs)</h4>
      <ul>
        <li>Oda düzenini yap</li>
        <li>Yeni rutinler oluştur</li>
        <li>Hedefleri netleştir</li>
      </ul>
      
      <h4>HAFTA 3: Ruhunu Besle (6–12 Mayıs)</h4>
      <ul>
        <li>Kitap okuma alışkanlığı</li>
        <li>Yaratıcı aktiviteler</li>
        <li>Doğa ile bağlantı</li>
      </ul>
    `,
    excerpt: 'Bu süreçte hem fiziksel hem zihinsel olarak kendimi geliştirmeyi hedefliyorum. Haftalık planlar ve hedefler...',
    category: 'daily-life',
    tags: ['kişisel-gelişim', 'glow-up', 'hedefler'],
    author: {
      name: 'Şahika Aleyna Yener',
      avatar: '/assets/author-avatar.jpg',
      bio: 'Bilgisayar Bilimleri öğrencisi, teknoloji tutkunu'
    },
    publishDate: new Date('2025-04-22'),
    readingTime: 8,
    coverImage: '/assets/blog/post-2-cover.jpg',
    featured: true,
    likes: 67,
    comments: []
  },
  {
    id: '3',
    title: 'Teknolojide Kadın Olmak: Deneyimlerim ve Önerilerim',
    slug: 'teknolojide-kadin-olmak',
    content: `
      <h2>👩‍💻 Teknoloji Dünyasında Kadın Olmak</h2>
      
      <p>Bilgisayar bilimleri alanında kadın olarak var olmak, hem heyecan verici hem de zorlu bir deneyim. Bu yazıda kendi deneyimlerimi paylaşmak istiyorum.</p>
      
      <h3>Karşılaştığım Zorluklar:</h3>
      
      <ul>
        <li>Stereotipler ve önyargılar</li>
        <li>Kendini kanıtlama baskısı</li>
        <li>Az sayıda kadın rol model</li>
        <li>İş-yaşam dengesi</li>
      </ul>
      
      <h3>Nasıl Başa Çıkıyorum:</h3>
      
      <p>Bu zorluklarla başa çıkmak için kullandığım stratejiler:</p>
      
      <ol>
        <li><strong>Topluluk desteği:</strong> Diğer kadın teknoloji profesyonelleriyle bağlantı kurmak</li>
        <li><strong>Sürekli öğrenme:</strong> Yeni teknolojileri takip etmek</li>
        <li><strong>Mentorluk:</strong> Deneyimli profesyonellerden destek almak</li>
        <li><strong>Kendine inanmak:</strong> Yeteneklerine güvenmek</li>
      </ol>
      
      <blockquote>
        "Teknoloji dünyasında kadın olarak var olmak, sadece kod yazmak değil, aynı zamanda bir yol açıcı olmaktır."
      </blockquote>
    `,
    excerpt: 'Bilgisayar bilimleri alanında kadın olarak var olmak, hem heyecan verici hem de zorlu bir deneyim...',
    category: 'women-in-tech',
    tags: ['kadın', 'teknoloji', 'deneyim', 'mentorluk'],
    author: {
      name: 'Şahika Aleyna Yener',
      avatar: '/assets/author-avatar.jpg',
      bio: 'Bilgisayar Bilimleri öğrencisi, teknoloji tutkunu'
    },
    publishDate: new Date('2025-04-15'),
    readingTime: 6,
    coverImage: '/assets/blog/post-3-cover.jpg',
    featured: true,
    likes: 89,
    comments: []
  },
  {
    id: '4',
    title: 'Python ile Veri Analizi: Başlangıç Rehberi',
    slug: 'python-veri-analizi-baslangic',
    content: `
      <h2>🐍 Python ile Veri Analizi: Başlangıç Rehberi</h2>
      
      <p>Veri analizi, günümüzün en popüler ve gelecek vaat eden alanlarından biri. Python, bu alanda en çok tercih edilen programlama dillerinden biri.</p>
      
      <h3>Gerekli Kütüphaneler:</h3>
      
      <pre><code>pip install pandas numpy matplotlib seaborn</code></pre>
      
      <h3>Basit Bir Veri Analizi Örneği:</h3>
      
      <pre><code>import pandas as pd
import matplotlib.pyplot as plt

# Veri yükleme
df = pd.read_csv('veriler.csv')

# Temel istatistikler
print(df.describe())

# Görselleştirme
df.plot(kind='hist')
plt.show()</code></pre>
      
      <h3>Öğrenme Yol Haritası:</h3>
      
      <ol>
        <li><strong>Temel Python:</strong> Değişkenler, döngüler, fonksiyonlar</li>
        <li><strong>Pandas:</strong> Veri manipülasyonu ve analizi</li>
        <li><strong>NumPy:</strong> Sayısal hesaplamalar</li>
        <li><strong>Matplotlib/Seaborn:</strong> Veri görselleştirme</li>
        <li><strong>Makine Öğrenmesi:</strong> Scikit-learn ile temel ML</li>
      </ol>
      
      <p>Bu yolculukta size yardımcı olacak kaynaklar:</p>
      
      <ul>
        <li>Kaggle Learn</li>
        <li>DataCamp</li>
        <li>Coursera</li>
        <li>YouTube eğitim kanalları</li>
      </ul>
    `,
    excerpt: 'Veri analizi, günümüzün en popüler ve gelecek vaat eden alanlarından biri. Python ile başlangıç rehberi...',
    category: 'computer-science',
    tags: ['python', 'veri-analizi', 'pandas', 'eğitim'],
    author: {
      name: 'Şahika Aleyna Yener',
      avatar: '/assets/author-avatar.jpg',
      bio: 'Bilgisayar Bilimleri öğrencisi, teknoloji tutkunu'
    },
    publishDate: new Date('2025-04-10'),
    readingTime: 10,
    coverImage: '/assets/blog/post-4-cover.jpg',
    featured: false,
    likes: 156,
    comments: []
  }
]; 
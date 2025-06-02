import Link from 'next/link';
import styles from '../../styles/reports.module.css';

const API_URL = 'https://crossspark.microcms.io/api/v1/articles';
const API_KEY = process.env.MICROCMS_API_KEY;

// microCMS articlesモデルの型定義
interface Member {
  role: string;
  opinion: string;
  color: string;
  name?: string;
}

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  views: number;
  members: Member[];
  discoveries: string[];
  content: string;
  thumbnail?: string;
}

interface ArticleListResponse {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
}

async function fetchArticles(): Promise<ArticleListResponse> {
  const res = await fetch(API_URL, {
    headers: { 'X-API-KEY': API_KEY! },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

const industries = [
  { key: 'engineer', label: 'エンジニア', color: '#00aaff' },
  { key: 'designer', label: 'デザイナー', color: '#ff3366' },
  { key: 'chef', label: '料理人', color: '#00ff88' },
  { key: 'teacher', label: '教師', color: '#ff8800' },
  { key: 'marketer', label: 'マーケター', color: '#aa00ff' },
  { key: 'doctor', label: '医師', color: '#ff6600' },
  { key: 'artist', label: 'アーティスト', color: '#9944ff' },
  { key: 'other', label: 'その他', color: '#666666' },
];

function safeText(val: string | number | Member | string[] | undefined | null): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return val.toString();
  if (Array.isArray(val)) return val.map(safeText).join(', ');
  if (val && typeof val === 'object' && 'name' in val) return val.name ?? '';
  return '';
}

export default async function ReportsPage() {
  const data = await fetchArticles();
  const articles = data.contents || [];

  return (
    <div className={styles.reportsContainer}>
      <h1 className={styles.pageTitle}>BUG REPORTS</h1>
      <div className={styles.reportList}>
        {articles.length === 0 && <div className={styles.noResult}>記事がありません</div>}
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.id}`} className={styles.reportCard}>
            <div className={styles.reportMeta}>
              <span className={styles.reportCategory}>{safeText(article.category)}</span>
              <span className={styles.reportDate}>{safeText(article.date)}</span>
              <span className={styles.reportViews}>{safeText(article.views)} 閲覧</span>
            </div>
            <h2 className={styles.reportTitle}>{safeText(article.title)}</h2>
            <p className={styles.reportExcerpt}>{safeText(article.subtitle)}</p>
            <div className={styles.reportIndustries}>
              {Array.isArray(article.members) && article.members.map((m, i) => {
                const info = industries.find(x => x.key === safeText(m.role));
                return (
                  <span key={i} className={styles.industryTag} style={{ background: m.color || info?.color, color: safeText(m.role) === '料理人' ? '#000' : '#fff', borderColor: m.color || info?.color }}>{safeText(m.role)}</span>
                );
              })}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
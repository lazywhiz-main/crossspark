import { notFound } from 'next/navigation';
import styles from '../../../styles/article.module.css';

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

async function fetchArticle(id: string): Promise<Article | null> {
  const res = await fetch(`${API_URL}/${id}`, {
    headers: { 'X-API-KEY': API_KEY! },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

const stickyAngles = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg'];

function safeText(val: string | number | Member | string[] | undefined | null): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return val.toString();
  if (Array.isArray(val)) return val.map(safeText).join(', ');
  if (val && typeof val === 'object' && 'name' in val) return val.name ?? '';
  return '';
}

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = await fetchArticle(params.id);
  if (!article) return notFound();

  return (
    <div className={styles.articleContainer}>
      <div className={styles.header}>
        <span className={styles.categoryTag}>{safeText(article.category)}</span>
        <h1 className={styles.title}>{safeText(article.title)}</h1>
        <div className={styles.subtitle}>{safeText(article.subtitle)}</div>
        <div className={styles.meta}>
          <span>{safeText(article.date)}</span>
          <span>{safeText(article.views)} 閲覧</span>
        </div>
      </div>
      <div className={styles.membersSection}>
        <h2 className={styles.sectionTitle}>参加メンバー</h2>
        <div className={styles.memberTags}>
          {Array.isArray(article.members) && article.members.map((m, i) => (
            <span key={i} className={styles.memberTag} style={{ background: safeText(m.color), color: safeText(m.role) === '料理人' ? '#000' : '#fff', borderColor: safeText(m.color) }}>{safeText(m.role)}{m.name ? `（${safeText(m.name)}）` : ''}</span>
          ))}
        </div>
      </div>
      <div className={styles.opinionsSection}>
        <h2 className={styles.sectionTitle}>各業種の意見</h2>
        <div className={styles.opinionCards}>
          {Array.isArray(article.members) && article.members.map((m, i) => (
            <div
              key={i}
              className={styles.opinionCard}
              style={{ background: safeText(m.color), color: safeText(m.role) === '料理人' ? '#000' : '#fff', borderColor: safeText(m.color), transform: `rotate(${stickyAngles[i % stickyAngles.length]})` }}
            >
              <div className={styles.opinionRole}>{safeText(m.role)}{m.name ? `（${safeText(m.name)}）` : ''}</div>
              <div className={styles.opinionText}>{safeText(m.opinion)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.discoverySection}>
        <h2 className={styles.sectionTitle}>発見・気づき</h2>
        <ul className={styles.discoveryList}>
          {Array.isArray(article.discoveries)
            ? article.discoveries.map((d, i) => <li key={i}>{safeText(d)}</li>)
            : (safeText(article.discoveries) || '').split('\n').map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
      <div className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>本文</h2>
        {/* contentはリッチエディタ想定。dangerouslySetInnerHTMLで描画 */}
        <div className={styles.contentText} dangerouslySetInnerHTML={{ __html: safeText(article.content) }} />
      </div>
    </div>
  );
} 
'use client';
import React from 'react';
import styles from '../../styles/article.module.css';

const article = {
  title: '美しさとは何か？',
  subtitle: '5つの異なる業種が語る「美」の定義から見えてきた驚きの共通点とは？',
  category: '予想外の発見',
  date: '2024.01.15',
  views: 1247,
  members: [
    { role: 'エンジニア', color: '#00aaff', opinion: 'シンプルで理解しやすく、拡張性があること' },
    { role: 'デザイナー', color: '#ff3366', opinion: '感情を動かすもの、バランスと調和' },
    { role: '料理人', color: '#00ff88', opinion: '旬の素材を活かすこと、五感で感じる美しさ' },
    { role: '教師', color: '#ff8800', opinion: '成長や発見の瞬間に宿るもの' },
    { role: 'マーケター', color: '#aa00ff', opinion: 'データと感性の絶妙なバランス' },
  ],
  discoveries: [
    '全員が「調和・バランス」について言及',
    'エンジニアの「無駄がない」と料理人の「素材を活かす」は本質的に同じ',
    '教師だけが「プロセス」に美しさを見出している',
  ],
};

const stickyAngles = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg'];

export default function ArticlePage() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.header}>
        <span className={styles.categoryTag}>{article.category}</span>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.subtitle}>{article.subtitle}</div>
        <div className={styles.meta}>
          <span>{article.date}</span>
          <span>{article.views} 閲覧</span>
        </div>
      </div>
      <div className={styles.membersSection}>
        <h2 className={styles.sectionTitle}>書いたメンバー</h2>
        <div className={styles.memberTags}>
          {article.members.map((m, i) => (
            <span key={i} className={styles.memberTag} style={{ background: m.color, color: m.role === '料理人' ? '#000' : '#fff', borderColor: m.color }}>{m.role}</span>
          ))}
        </div>
      </div>
      <div className={styles.opinionsSection}>
        <h2 className={styles.sectionTitle}>気付き・発見</h2>
        <div className={styles.opinionCards}>
          {article.members.map((m, i) => (
            <div
              key={i}
              className={styles.opinionCard}
              style={{ background: m.color, color: m.role === '料理人' ? '#000' : '#fff', borderColor: m.color, transform: `rotate(${stickyAngles[i % stickyAngles.length]})` }}
            >
              <div className={styles.opinionRole}>{m.role}</div>
              <div className={styles.opinionText}>{m.opinion}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.discoverySection}>
        <h2 className={styles.sectionTitle}>サマリー</h2>
        <ul className={styles.discoveryList}>
          {article.discoveries.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
      <div className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>本文</h2>
        <h3 className={styles.contentHeading}>美しさの定義は業種でどう違う？</h3>
        <p className={styles.contentText}>
          エンジニアは「無駄がない設計」、デザイナーは「感情を動かすもの」、料理人は「素材を活かすこと」など、業種ごとに美しさの捉え方が異なることが明らかになった。
        </p>
        <h3 className={styles.contentHeading}>共通点としての「調和・バランス」</h3>
        <p className={styles.contentText}>
          すべての業種が「調和・バランス」について言及。異なる分野でも本質的な価値観が重なる瞬間があることが分かった。
        </p>
        <h3 className={styles.contentHeading}>プロセスに宿る美しさ</h3>
        <p className={styles.contentText}>
          教師だけが「プロセス」に美しさを見出している点が特徴的。結果だけでなく、成長や発見の過程にも価値があるという視点が新鮮だった。
        </p>
      </div>
    </div>
  );
} 
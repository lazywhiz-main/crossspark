'use client';
import React, { useState } from 'react';
import styles from '../../styles/about.module.css';

const faqs = [
  {
    q: 'CROSS SPARKとは何ですか？',
    a: '異業種の人々が一つの話題について意見を交わし、化学反応のような新しい発見を生み出すメディアです。',
  },
  {
    q: '誰でも参加できますか？',
    a: 'はい、どなたでも参加可能です。業種・経験は問いません。',
  },
  {
    q: '投稿にルールはありますか？',
    a: '他者を尊重し、誹謗中傷や差別的な内容は禁止です。ガイドラインをご確認ください。',
  },
  {
    q: 'どんな話題が投稿できますか？',
    a: '仕事・生活・社会・趣味など、ジャンルを問わず「異業種の視点が交わる」テーマならOKです。',
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>ABOUT</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>ミッション</h2>
        <p className={styles.sectionText}>
          異業種の化学反応から新しい発見を生み出す。<br />
          「バグを起こしたい！」という好奇心を原動力に、<br />
          さまざまな業種の人が自由に意見を交わす場を提供します。
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>プロセス</h2>
        <ol className={styles.processList}>
          <li>1. 話題を提案 or 既存話題に参加</li>
          <li>2. 業種を選んで意見を投稿</li>
          <li>3. 異業種の視点を楽しみ、発見を共有</li>
        </ol>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q} <span className={styles.faqIcon}>{openIndex === i ? '▲' : '▼'}</span>
              </button>
              {openIndex === i && (
                <div className={styles.faqAnswer}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>統計情報</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}><span className={styles.statNumber}>47</span><div className={styles.statLabel}>バグレポート</div></div>
          <div className={styles.statItem}><span className={styles.statNumber}>156</span><div className={styles.statLabel}>参加者</div></div>
          <div className={styles.statItem}><span className={styles.statNumber}>23</span><div className={styles.statLabel}>業種</div></div>
          <div className={styles.statItem}><span className={styles.statNumber}>89</span><div className={styles.statLabel}>新発見</div></div>
        </div>
      </section>
      <section className={styles.sectionCta}>
        <h2 className={styles.ctaTitle}>異業種の化学反応に参加しよう！</h2>
        <a href="/submit" className={styles.ctaButton}>今すぐ投稿する</a>
      </section>
    </div>
  );
} 
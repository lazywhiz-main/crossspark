'use client';
import React, { useState } from 'react';
import styles from '../../styles/submit.module.css';

const industryColors: Record<string, string> = {
  engineer: '#00aaff',
  designer: '#ff3366',
  chef: '#00ff88',
  teacher: '#ff8800',
  marketer: '#aa00ff',
  doctor: '#ff6600',
  artist: '#9944ff',
  other: '#666666',
};

const industries = [
  { key: 'engineer', label: 'エンジニア' },
  { key: 'designer', label: 'デザイナー' },
  { key: 'chef', label: '料理人' },
  { key: 'teacher', label: '教師' },
  { key: 'marketer', label: 'マーケター' },
  { key: 'doctor', label: '医師' },
  { key: 'artist', label: 'アーティスト' },
  { key: 'other', label: 'その他' },
];

const categories = [
  { key: 'experimental', label: '実験進行中' },
  { key: 'success', label: '爆発的成果' },
  { key: 'discovery', label: '予想外の発見' },
  { key: 'learning', label: '失敗からの学び' },
];

export default function SubmitPage() {
  const [mode, setMode] = useState('new');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showGuideline, setShowGuideline] = useState(false);

  return (
    <div className={styles.submitContainer}>
      <h1 className={styles.submitTitle}>バグレポート投稿</h1>
      <div className={styles.modeSwitch}>
        <button className={mode === 'new' ? styles.activeMode : ''} onClick={() => setMode('new')}>新しい話題を提案</button>
        <button className={mode === 'join' ? styles.activeMode : ''} onClick={() => setMode('join')}>既存話題に参加</button>
      </div>
      <form className={styles.submitForm}>
        <div className={styles.formGroup}>
          <label>お名前</label>
          <input type="text" className={styles.input} placeholder="ニックネーム" />
        </div>
        <div className={styles.formGroup}>
          <label>業種</label>
          <div className={styles.industrySelect}>
            {industries.map((ind) => (
              <button
                type="button"
                key={ind.key}
                className={selectedIndustry === ind.key ? styles.industryBtnActive : styles.industryBtn}
                style={{ background: industryColors[ind.key], color: ind.key === 'chef' ? '#000' : '#fff', borderColor: selectedIndustry === ind.key ? '#000' : industryColors[ind.key] }}
                onClick={() => setSelectedIndustry(ind.key)}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>カテゴリー</label>
          <div className={styles.categorySelect}>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.key}
                className={selectedCategory === cat.key ? styles.categoryBtnActive : styles.categoryBtn}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>意見・コメント</label>
          <textarea className={styles.textarea} rows={5} placeholder="あなたの意見や発見を書いてください"></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>投稿する</button>
      </form>
      <div className={styles.guidelineSection}>
        <button className={styles.guidelineToggle} onClick={() => setShowGuideline((v) => !v)}>
          投稿ガイドライン {showGuideline ? '▲' : '▼'}
        </button>
        {showGuideline && (
          <div className={styles.guidelineContent}>
            <ul>
              <li>他者を尊重した意見交換を心がけましょう</li>
              <li>誹謗中傷や差別的な内容は禁止です</li>
              <li>個人情報は書き込まないでください</li>
              <li>運営が不適切と判断した投稿は非公開となる場合があります</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 
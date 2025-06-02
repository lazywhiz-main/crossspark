import styles from '../styles/home.module.css';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ヘッダー */}
      {/* ヘッダー部分（headerタグ）を全て削除 */}

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>CROSS SPARK</h1>
          <p className={styles.heroSubtitle}>異業種の化学反応メディア</p>
        </div>
      </section>

      {/* カテゴリーバー */}
      <div className={styles.categoryBar}>
        <div className={styles.categoryContainer}>
          <Link href="/reports?category=experimental" className={styles.categoryLink}>実験進行中</Link>
          <Link href="/reports?category=success" className={styles.categoryLink}>爆発的成果</Link>
          <Link href="/reports?category=discovery" className={styles.categoryLink}>予想外の発見</Link>
          <Link href="/reports?category=learning" className={styles.categoryLink}>失敗からの学び</Link>
          <Link href="/reports" className={styles.categoryLink}>全て見る</Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className={styles.mainContainer}>
        <div className={styles.contentArea}>
          {/* 注目のバグレポート */}
          <section className={styles.featuredReport}>
            <article className={styles.featuredCard}>
              <div className={styles.featuredImage}>SPARK</div>
              <div className={styles.featuredCategory}>予想外の発見</div>
              <h1 className={styles.featuredTitle}>美しさとは何か？</h1>
              <p className={styles.featuredExcerpt}>
                エンジニア、デザイナー、料理人、教師、マーケター。5つの異なる業種が語る「美」の定義から見えてきた驚きの共通点とは？すべての業種が「調和・バランス」について言及し、エンジニアの「無駄がない」と料理人の「素材を活かす」が本質的に同じことを表現していることが判明。
              </p>
              <div className={styles.featuredParticipants}>
                <span className={`${styles.participantTag} ${styles.engineer}`}>エンジニア</span>
                <span className={`${styles.participantTag} ${styles.designer}`}>デザイナー</span>
                <span className={`${styles.participantTag} ${styles.chef}`}>料理人</span>
                <span className={`${styles.participantTag} ${styles.teacher}`}>教師</span>
                <span className={`${styles.participantTag} ${styles.marketer}`}>マーケター</span>
              </div>
              <div className={styles.featuredMeta}>
                <span>5業種参加</span>
                <span>2024.01.15</span>
                <span>1,247 閲覧</span>
              </div>
              <button className={styles.readMoreBtn}>詳細を読む</button>
            </article>
          </section>

          {/* 最新バグレポート */}
          <section className={styles.latestReports}>
            <article className={styles.reportCard}>
              <div className={`${styles.reportImage} ${styles.success}`}>SUCCESS</div>
              <div className={`${styles.reportCategory} ${styles.categorySuccess}`}>爆発的成果</div>
              <h2 className={styles.reportTitle}>創造性を育む環境とは？</h2>
              <p className={styles.reportExcerpt}>
                アーティスト、プログラマー、シェフ、建築家が考える「創造的な空間」から見えてきた共通点。物理的環境だけでなく、心理的安全性についても議論が展開...
              </p>
              <div className={styles.reportMeta}>
                <span>4業種参加</span>
                <span>2024.01.10</span>
              </div>
            </article>
            <article className={styles.reportCard}>
              <div className={`${styles.reportImage} ${styles.learning}`}>LEARN</div>
              <div className={`${styles.reportCategory} ${styles.categoryLearning}`}>失敗からの学び</div>
              <h2 className={styles.reportTitle}>失敗をどう捉えるか？</h2>
              <p className={styles.reportExcerpt}>
                スタートアップCEO、研究者、スポーツコーチ、パティシエが語る失敗観。「失敗は成功の母」は本当か？各業界の失敗との向き合い方から見えた新たな視点...
              </p>
              <div className={styles.reportMeta}>
                <span>4業種参加</span>
                <span>2024.01.08</span>
              </div>
            </article>
            <article className={styles.reportCard}>
              <div className={`${styles.reportImage} ${styles.discovery}`}>TEAM</div>
              <div className={`${styles.reportCategory} ${styles.categoryDiscovery}`}>予想外の発見</div>
              <h2 className={styles.reportTitle}>チームワークの本質とは？</h2>
              <p className={styles.reportExcerpt}>
                オーケストラ指揮者、サッカー監督、外科チーム、開発チームリーダーが語るチームマネジメント。音楽とスポーツと医療とITに共通する意外な法則...
              </p>
              <div className={styles.reportMeta}>
                <span>4業種参加</span>
                <span>2024.01.03</span>
              </div>
            </article>
            <article className={styles.reportCard}>
              <div className={`${styles.reportImage} ${styles.experimental}`}>COMM</div>
              <div className={`${styles.reportCategory} ${styles.categoryExperimental}`}>実験進行中</div>
              <h2 className={styles.reportTitle}>効率的なコミュニケーションとは？</h2>
              <p className={styles.reportExcerpt}>
                営業、エンジニア、医師、保育士が語る「伝える技術」の違い。同じ「伝える」でも業界によってこんなに違うなんて...現在も議論継続中！
              </p>
              <div className={styles.reportMeta}>
                <span>4業種参加中</span>
                <span>2024.01.12</span>
              </div>
            </article>
          </section>
        </div>

        {/* サイドバー */}
        <aside className={styles.sidebar}>
          {/* 人気記事 */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>人気のバグレポート</h3>
            <div className={styles.trendingItem}>
              <span className={styles.trendingNumber}>1</span>
              <div className={styles.trendingTitle}>デザイナーと料理人が語る「美しさ」の共通点</div>
            </div>
            <div className={styles.trendingItem}>
              <span className={styles.trendingNumber}>2</span>
              <div className={styles.trendingTitle}>エンジニアと教師の「問題解決」アプローチ</div>
            </div>
            <div className={styles.trendingItem}>
              <span className={styles.trendingNumber}>3</span>
              <div className={styles.trendingTitle}>営業と医師が考える「コミュニケーション」</div>
            </div>
            <div className={styles.trendingItem}>
              <span className={styles.trendingNumber}>4</span>
              <div className={styles.trendingTitle}>起業家とシェフの「創造性」への取り組み</div>
            </div>
            <div className={styles.trendingItem}>
              <span className={styles.trendingNumber}>5</span>
              <div className={styles.trendingTitle}>建築家とプログラマーの「設計思想」</div>
            </div>
          </div>

          {/* カテゴリー別アクセス */}
          <div className={styles.quickAccess}>
            <h3 className={styles.quickAccessTitle}>カテゴリー別</h3>
            <div className={styles.accessButtons}>
              <a href="#" className={styles.accessBtn}>予想外の発見</a>
              <a href="#" className={styles.accessBtn}>爆発的成果</a>
              <a href="#" className={styles.accessBtn}>実験進行中</a>
              <a href="#" className={styles.accessBtn}>失敗からの学び</a>
            </div>
            <div className={styles.statsMini}>
              <div className={styles.statMini}>
                <span className={styles.statMiniNumber}>47</span>
                <div className={styles.statMiniLabel}>レポート</div>
              </div>
              <div className={styles.statMini}>
                <span className={styles.statMiniNumber}>23</span>
                <div className={styles.statMiniLabel}>業種</div>
              </div>
            </div>
          </div>

          {/* 業種別アクセス */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>業種別で探す</h3>
            <div className={styles.trendingItem}>
              <div className={styles.trendingTitle}>🔧 エンジニアの視点を見る</div>
            </div>
            <div className={styles.trendingItem}>
              <div className={styles.trendingTitle}>🎨 デザイナーの視点を見る</div>
            </div>
            <div className={styles.trendingItem}>
              <div className={styles.trendingTitle}>👨‍🍳 料理人の視点を見る</div>
            </div>
            <div className={styles.trendingItem}>
              <div className={styles.trendingTitle}>📚 教師の視点を見る</div>
            </div>
            <div className={styles.trendingItem}>
              <div className={styles.trendingTitle}>📈 マーケターの視点を見る</div>
            </div>
          </div>

          {/* 最新コメント */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>読者の反応</h3>
            <div className={styles.trendingItem}>
              <div style={{ fontWeight: 900, fontSize: 12, marginBottom: 5 }}>建築家_YUKI:</div>
              <div style={{ fontSize: 12 }}>&quot;料理人さんの「素材を活かす」に深く共感...&quot;</div>
            </div>
            <div className={styles.trendingItem}>
              <div style={{ fontWeight: 900, fontSize: 12, marginBottom: 5 }}>音楽家_TAKE:</div>
              <div style={{ fontSize: 12 }}>&quot;デザイナーの「余白」は音楽の休符と同じ...&quot;</div>
            </div>
            <div className={styles.trendingItem}>
              <div style={{ fontWeight: 900, fontSize: 12, marginBottom: 5 }}>起業家_CEO:</div>
              <div style={{ fontSize: 12 }}>&quot;ビジネスモデルにも美しさがある...&quot;</div>
            </div>
          </div>
        </aside>
      </main>

      {/* 統計セクション */}
      <section className={styles.statsSection}>
        <h2 className={styles.statsTitle}>CROSS SPARKの化学反応</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>47</span>
            <div className={styles.statLabel}>バグレポート</div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>156</span>
            <div className={styles.statLabel}>参加者</div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>23</span>
            <div className={styles.statLabel}>業種</div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>89</span>
            <div className={styles.statLabel}>新発見</div>
          </div>
        </div>
      </section>

      {/* 下部メインCTA */}
      <section className={styles.bottomCta}>
        <div className={styles.bottomCtaContainer}>
          <h2 className={styles.bottomCtaTitle}>異業種の化学反応</h2>
          <p className={styles.bottomCtaSubtitle}>バグを起こしたい！</p>
          <p className={styles.bottomCtaDescription}>
            エンジニア、デザイナー、料理人、教師...異なるスキルセットを持つ人々が一つの話題について語るとき、<br />
            そこには予想もしない発見と創造的な化学反応が生まれる。
          </p>
          <a href="#" className={styles.mainCtaButton}>今すぐ参加する</a>
        </div>
      </section>

      {/* フッター */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerText}>
            CROSS SPARK - 異業種の化学反応から生まれる新しい発見
          </div>
        </div>
      </footer>
    </>
  );
}

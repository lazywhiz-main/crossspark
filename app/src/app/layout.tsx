import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

export const metadata: Metadata = {
  title: 'CROSS SPARK - 異業種化学反応メディア',
  description: '異業種の化学反応から新しい発見を生み出すメディアサイト',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <Link href="/" className={styles.logo}>CROSS SPARK</Link>
            <nav className={styles.navMenu}>
              <Link href="/" className={styles.navItem}>HOME</Link>
              <Link href="/reports" className={styles.navItem}>BUG REPORTS</Link>
              <Link href="/submit" className={styles.navItem}>SUBMIT</Link>
              <Link href="/about" className={styles.navItem}>ABOUT</Link>
            </nav>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footerText}>
              CROSS SPARK - 異業種の化学反応から生まれる新しい発見
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

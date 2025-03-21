"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import styles from './navbar.module.css'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoHighlight}>Code</span>Takapon vlog
          </Link>

          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>ホーム</Link>
            <Link href="/blog/categories/javascript" className={styles.navLink}>JavaScript</Link>
            <Link href="/blog/categories/typescript" className={styles.navLink}>TypeScript</Link>
            <Link href="/blog/categories/react" className={styles.navLink}>React</Link>
            <Link href="/blog/categories/nextjs" className={styles.navLink}>Next.js</Link>
            <button onClick={toggleSearch} className={styles.searchButton}>
              <Search className={styles.searchIcon} />
            </button>
          </nav>

          <div className={styles.mobileNav}>
            <button onClick={toggleSearch} className={styles.searchButton}>
              <Search className={styles.searchIcon} />
            </button>
            <button onClick={toggleMenu} className={styles.menuButton}>
              {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="記事を検索..."
              className={styles.searchInput}
              autoFocus
            />
          </div>
        )}

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>ホーム</Link>
            <Link href="/blog/categories/javascript" className={styles.mobileNavLink} onClick={toggleMenu}>JavaScript</Link>
            <Link href="/blog/categories/typescript" className={styles.mobileNavLink} onClick={toggleMenu}>TypeScript</Link>
            <Link href="/blog/categories/react" className={styles.mobileNavLink} onClick={toggleMenu}>React</Link>
            <Link href="/blog/categories/nextjs" className={styles.mobileNavLink} onClick={toggleMenu}>Next.js</Link>
          </div>
        )}
      </div>
    </header>
  )
}

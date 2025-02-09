"use client";

// Hooks and utility
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "./header.module.css";

const links = [
  { name: "Home", href: "/" },
  { name: "Sperm In-Cyte", href: "/Sperm-In-Cyte" },
  { name: "Morphology", href: "/Morphology" },
  { name: "Resources", href: "/Resources" },
  { name: "Blog", href: "/Blog" },
  { name: "Store", href: "/Store" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => {
      console.log("Menu state: ", !prev);
      return !prev;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Sperm In-Cyte</Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMobileMenuOpen ? (
          <IonIcon className="icons" icon={closeOutline} />
        ) : (
          <IonIcon className="icons" icon={menuOutline} />
        )}
      </div>

      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.active : ""
        } ${styles.desktop}`}
      >
        <ul className={styles.menuList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

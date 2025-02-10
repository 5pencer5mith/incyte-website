"use client";

// Hooks and Utility
import { useState, useEffect } from "react";

// Components
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoYoutube, logoInstagram } from "ionicons/icons";
import Link from "next/link";

// Styles
import styles from "@/app/components/footer/footer.module.css";

export default function Footer() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Link href="/">Sperm In-Cyte</Link>
      </div>

      <div className={styles.footerNav}>
        <Link href="/#about">About Us</Link>
        <Link href="/#contact">Contact Us</Link>
        <Link href="/" scroll={false}>
          Blog
        </Link>

        <div className={styles.socials}>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon className="icons" icon={logoFacebook} />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon className="icons" icon={logoYoutube} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon className="icons" icon={logoInstagram} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

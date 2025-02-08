"use client";
import styles from "./page.module.css";

import { IonIcon } from "@ionic/react";
import { cogOutline } from "ionicons/icons";

import { useState, useEffect } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  if (!isHydrated) return null;

  return (
    <div className={styles.page}>
      <div className={styles.messageContainer}>
        <h1>The Sperm In-Cyte Website: Coming Soon!</h1>
        <p>
          The Sperm In-Cyte Website is currently under construction. Check back
          soon for more details and content.
        </p>
        <IonIcon className={styles.gear} icon={cogOutline} />
      </div>
    </div>
  );
}

"use client";

// Hooks and Utility
import { useState, useEffect } from "react";

// Components
import ProductHero from "@/app/components/hero/productHero/ProductHero";
import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  cogOutline,
  trendingUpOutline,
  cashOutline,
  hardwareChipOutline,
  shieldCheckmarkOutline,
  flashOutline,
} from "ionicons/icons";

// Styles
import styles from "@/app/Sperm-In-Cyte/page.module.css";

export default function SpermIncyte() {
  const [isHydrated, setIsHydrated] = useState(false); // This is a state variable that is used to determine if the page has been hydrated or not.

  // This useEffect hook is used to set the isHydrated state variable to true once the page has been hydrated.
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <>
      <ProductHero />

      <div className={styles.contentWrapper}>
        <div className={styles.productIntro}>
          <h1>
            An Automated Computer Vision System for Bull Fertility Analysis
          </h1>

          <div className={styles.colsSplit}>
            <div className={styles.col1}>
              <h2>
                Sperm In-Cyte Identifies Sperm Morphology That Lead To
                Subfertility And Infertility. This Information Can Keep Herds
                Healthy And Saves Money.
              </h2>
            </div>

            <div className={styles.iconGroup}>
              <IonIcon className={styles.icons} icon={searchOutline} />
              <IonIcon className={styles.icons} icon={trendingUpOutline} />
              <IonIcon className={styles.icons} icon={cashOutline} />
            </div>
          </div>

          <p>
            Infertility and subfertility in bulls pose significant challenges to
            the cattle industry, leading to economic losses, inefficiencies, and
            reduced productivity. Traditional breeding soundness exams
            (B.B.S.E.) are often manual, imprecise, and costly, making it
            difficult for cattle producers to accurately assess bull fertility.
            These outdated methods can miss subtle signs of infertility,
            resulting in longer calving seasons, lighter weaning weights, and
            inconsistent herd reproduction. The lack of standardized,
            high-quality semen evaluations creates a gap in the industry,
            leaving producers with unreliable results and poor decision-making
            tools.
          </p>

          <div className={styles.stack}>
            <div className={styles.col2}>
              <h2>
                Using Computer Vision Technology, Sperm In-Cyte Gives You Faster
                And More Reliable Results Than Traditional Manual Analysis{" "}
              </h2>
            </div>

            <div className={styles.iconGroup2}>
              <IonIcon className={styles.icons} icon={hardwareChipOutline} />
              <IonIcon className={styles.icons} icon={flashOutline} />
              <IonIcon className={styles.icons} icon={shieldCheckmarkOutline} />
            </div>
          </div>

          <p>
            Sperm In-Cyte transforms the way bull fertility is assessed by
            automating the semen analysis process. Using cutting-edge computer
            vision technology, our system captures high-resolution microscopic
            images of sperm and analyzes them with unprecedented precision. By
            identifying and classifying sperm abnormalities, Sperm In-Cyte
            delivers fast, accurate, and consistent results that surpass the
            limitations of traditional manual evaluations. This innovation
            empowers cattle producers with dependable data, helping them make
            informed breeding decisions that enhance productivity, improve herd
            health, and drive long-term economic success.
          </p>
        </div>

        <div className={styles.productAnnounce}>
          <h2>
            Sperm In-Cyte is currently in development. Check back later for more
            updates!
          </h2>
          <IonIcon className={styles.iconsGear} icon={cogOutline} />
        </div>
      </div>
    </>
  );
};
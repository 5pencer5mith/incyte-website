// Sidekick component: A thin image banner used on most pages
// Components
import Image from "next/image";

// Styles
import styles from "./sidekick.module.css";

export default function Sidekick({ pageTitle, subTitle }) {
  return (
    <div className={styles.sidekick}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{pageTitle}</h1>
          <h2>{subTitle}</h2>
        </div>
      </div>
      <Image
        src="/img/index/mother-and-calf.jpg"
        alt="mother and calf"
        fill
        style={{ objectFit: "cover", objectPosition: "center 95%" }}
        quality={100}
        priority
      />
    </div>
  );
};
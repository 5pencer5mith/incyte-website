// Components
import Image from "next/image";
// import Slider from '@/app/components/slider/Slider'
// TODO: add images for the slider

// Styles
import styles from "../page.module.css";

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function DecapitatedHead() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Decapitated Head
          <Image
            src="/img/morphology/DecapitatedHead/Decapitated.png"
            alt="Decapitated Head Sperm Morphology inline image"
            width={150}
            height={150}
          />
        </h1>
      </div>

      <div className={styles.sliderContainer}>
        {/* <Slider imageData={images} /> */}
      </div>

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Decapitated head defect is characterized by the separation of the
            sperm head from the tail, with the tail often displaying vigorous
            motility. This defect can be distinguished from loose or detached
            heads by the presence of the proximal droplet still attached to the
            tail.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Decapitated heads are considered an uncompensable defect and
            significantly reduce fertility. This condition often affects 80-100%
            of sperm in the ejaculate, leading to sterility. The defect prevents
            the affected sperm from reaching and fertilizing the ova​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Decapitated heads can appear shortly after stress events or due to
            genetic factors. They are typically observed in ejaculates following
            severe testicular degeneration or other significant disruptions in
            spermatogenesis​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Genetic Factors:</strong> Inherited conditions,
              particularly noted in Guernsey and Hereford bulls
            </li>
            <li>
              <strong>Severe Environmental Stress:</strong> Heat stress or other
              significant stressors
            </li>
            <li>
              <strong>Testicular Degeneration:</strong> Severe disruptions in
              spermatogenesis leading to structural weaknesses
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Decapitated heads are often seen in conjunction with other severe
            sperm defects. The vigorous motility of the separated tails can help
            differentiate this defect from other types of detached heads. Bulls
            exhibiting this defect typically require immediate evaluation and
            management to prevent significant impacts on fertility​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Decapitated Heads on Fertility</h3>

          <p>
            A case study involving a Guernsey bull with 90% decapitated heads in
            its ejaculate showed severe infertility. This emphasizes the
            critical impact of this defect on overall fertility​​.
          </p>
        </section>
      </article>
    </div>
  );
}

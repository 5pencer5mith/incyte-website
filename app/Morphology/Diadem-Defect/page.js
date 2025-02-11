// Components
// import Image from 'next/image';
// import Slider from '@/app/components/slider/Slider'
// TODO: Add images to slider

// Styles
import styles from "../page.module.css";

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function DiademDefect() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Diadem Defect
          {/* <Image
                        src='/morphology/'
                        alt=''
                        width={150}
                        height={150}
                    /> */}
        </h1>
      </div>

      <div className={styles.sliderContainer}>
        {/* <Slider imageData={images} /> */}
      </div>

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Diadem defects, also known as diadem vacuoles, are characterized by
            vacuoles located in the equatorial region of the sperm head. These
            vacuoles can appear as a single vacuole or multiple vacuoles often
            arranged in a line. The size of the vacuoles can vary, with very
            small ones being challenging to detect.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Diadem defects can significantly impact fertility. Bulls with more
            than 20% of sperm affected by diadem defects typically exhibit
            reduced pregnancy rates. This defect is considered uncompensable as
            affected sperm often fail to fertilize ova or produce non-viable
            embryos.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Diadem defects can appear approximately 20 days following a stress
            event such as heat stress or scrotal insulation​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Environmental Stress:</strong> Extreme temperatures or
              stress events
            </li>
            <li>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop vacuoles
            </li>
            <li>
              <strong>Nutritional Factors:</strong> High concentrate rations and
              other dietary imbalances
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Diadem defects are more commonly observed in some breeds and are
            associated with fluctuations in prevalence between ejaculates. These
            vacuoles can be challenging to see on standard eosin-nigrosin smears
            and are more easily identified using phase contrast or Feulgen
            staining.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Diadem Defects on Fertility</h3>

          <p>
            A case study involving a Simmental bull with high numbers of diadem
            defects demonstrated severe infertility. This bull produced high
            numbers of sperm with diadem defects, which were incompatible with
            embryonic development despite normal motility and morphology
            assessments​.
          </p>
        </section>
      </article>
    </div>
  );
}

// Components
// import Image from 'next/image';
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/SmallNuclearVacuoles/SNV1.png",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
  {
    src: "/img/morphology/SmallNuclearVacuoles/SNV2.jpg",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
  {
    src: "/img/morphology/SmallNuclearVacuoles/SNV3.jpg",
    alt: "Small Nuclear Vacuoles Sperm Morphology example",
    caption: "Small Nuclear Vacuoles",
  },
];

export default function SmallNuclearVacuoles() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Small Nuclear Vacuoles
          {/* <Image
                        src='/morphology/'
                        alt=''
                        width={150}
                        height={150}
                    /> */}
        </h1>
      </div>

      <div className={styles.sliderContainer}>
        <Slider imageData={images} />
      </div>

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Small nuclear vacuoles are small, clear inclusions located within
            the nucleus of the sperm. They can appear as single or multiple
            vacuoles and are often seen in conjunction with other head defects.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Small nuclear vacuoles can significantly impact fertility. Sperm
            with multiple nuclear vacuoles have a reduced ability to fertilize
            ova, and high levels of this defect (greater than 20%) are
            associated with decreased pregnancy rates​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Nuclear vacuoles can appear approximately 20-30 days following a
            stress event such as ruminal acidosis or dexamethasone
            treatment​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop vacuoles
            </li>
            <li>
              <strong>Hormonal Imbalance:</strong> Disruptions in the hormonal
              environment of the testis may lead to vacuole formation
            </li>
            <li>
              <strong>Environmental Stress:</strong> Extreme temperatures or
              stress events
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Nuclear vacuoles are more commonly observed in Bos indicus cross
            bulls than in Bos taurus breeds. This abnormality can be transient,
            with fluctuations in prevalence between ejaculates​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Nuclear Vacuoles on Fertility</h3>

          <p>
            A study involving a bull with 62% vacuolated nuclei, including small
            nuclear vacuoles, demonstrated severe infertility. These findings
            highlight the significant impact of nuclear vacuoles on fertility,
            particularly when present at high levels​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

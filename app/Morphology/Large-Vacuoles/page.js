// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/LargeVacuoles/LV1.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV2.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV3.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV4.png",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV5.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV6.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV7.png",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
  {
    src: "/img/morphology/LargeVacuoles/LV8.jpg",
    alt: "Large Vacuoles sperm morphology example",
    caption: "Large Vacuoles",
  },
];

export default function LargeVacuoles() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Large Vacuoles
          <Image
            src="/img/morphology/LargeVacuoles/Vacuoles.png"
            alt="Large Vacuoles Sperm Morphology inline image"
            width={150}
            height={150}
          />
        </h1>
      </div>

      <div className={styles.sliderContainer}>
        <Slider imageData={images} />
      </div>

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Large vacuoles, also known as confluent vacuoles, appear as large,
            crater-like inclusions on the sperm head. These vacuoles can vary in
            size, sometimes appearing as a ‘bite’ missing from the side of the
            head.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Large vacuoles are considered an uncompensable defect and can
            significantly reduce fertility. Studies have shown that bulls with
            more than 20% of sperm affected by large vacuoles exhibit reduced
            pregnancy rates. Sperm with large vacuoles often fail to fertilize
            ova or produce non-viable embryos​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Large vacuoles can appear 30 days after a stress event such as
            ruminal acidosis or 20 days following dexamethasone treatment​​​​.
          </p>
        </section>

        <section>
          <h3>Causes</h3>

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
              <strong>Hormonal Imbalance:</strong> Disruptions in the hormonal
              environment of the testis may lead to vacuole formation
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Large vacuoles are more commonly observed in Bos indicus cross bulls
            than in Bos taurus breeds. This abnormality can be transient, with
            fluctuations in prevalence between ejaculates​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Large Vacuoles on Fertility</h3>

          <p>
            A study involving a bull with 62% vacuolated nuclei, including 7%
            large confluent vacuoles, demonstrated severe infertility. These
            findings highlight the significant impact of large vacuoles on
            fertility, particularly when present at high levels​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

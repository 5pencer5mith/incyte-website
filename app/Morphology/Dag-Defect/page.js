// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/DagDefect/dagd1.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd2.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd3.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd4.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd5.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd6.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd7.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
  {
    src: "/img/morphology/DagDefect/dagd8.jpg",
    alt: "Dag Defect Sperm Morphology Example",
    caption: "Dag Defect",
  },
];

export default function DagDefect() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Dag Defect
          <Image
            src="/img/morphology/DagDefect/Dag.png"
            alt="Dag Defect Sperm Morphology inline image"
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
            The Dag defect, also known as the Dag-like defect, is characterized
            by a sharp bend in the midpiece and tail of the sperm, often
            resulting in a coiled appearance. This defect can reflect
            disturbances in the testicle or epididymis and can be hereditary.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            The Dag defect can significantly impair fertility when present in
            large numbers. While it is a compensable trait, meaning affected
            sperm are not forwardly motile and thus less likely to reach the
            oocyte, fertility is notably impaired when more than 30% of the
            sperm exhibit this defect and less than 70% of the sperm are
            normal​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Dag defects can appear shortly after stress events or disturbances
            in spermatogenesis, typically observable within 20-30 days following
            the initial insult​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Genetic Factors:</strong> The dag defect can be inheritied
            </li>
            <li>
              <strong>Environmental Stress:</strong> Such as heat stress or
              nutritional deficiences
            </li>
            <li>
              <strong>Disturbances in Spermatogenesis:</strong> Distruption
              during sperm developtment and maturation
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            The Dag defect is a serious concern when present in high numbers
            (greater than 50%), as it indicates significant impairment in the
            reproductive capability of the bull. It is essential to monitor and
            manage bulls exhibiting this defect closely to ensure they do not
            negatively impact herd fertility​​​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Dag Defect on Fertility</h3>

          <p>
            A study involving bulls with high levels of the Dag defect (greater
            than 50%) showed a significant reduction in pregnancy rates. This
            highlights the importance of identifying and managing this defect to
            maintain optimal fertility in breeding programs​​​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images used for the slider
const images = [
  {
    src: "/img/morphology/CoiledTail/coiledtail1.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail2.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail3.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail4.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail5.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail6.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail7.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
  {
    src: "/img/morphology/CoiledTail/coiledtail8.jpg",
    alt: "Coiled Tail Sperm Morphology Example",
    caption: "Coiled Tail",
  },
];

export default function CoiledTail() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Coiled Tail
          <Image
            src="/img/morphology/CoiledTail/Coiled.png"
            alt="Coiled Tail Sperm Morphology inline image"
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
            Coiled tails are characterized by the tail of the sperm forming a
            loop or coil. This defect can involve the principal piece or the
            terminal segment of the tail.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Coiled tails are generally considered a compensable defect, meaning
            that their presence can be mitigated by increasing the sperm count
            in the ejaculate. Sperm with coiled tails have impaired motility and
            cannot reach the site of fertilization. Bulls with up to 30% of
            sperm exhibiting this defect can still maintain acceptable fertility
            levels if the remaining sperm are normal​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Coiled tails can appear shortly after stress events or environmental
            factors such as heat stress or exposure to cold shock. They can also
            be seen following prolonged storage of sperm in the epididymis​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Environmental Stress:</strong> Such as heat stress or cold
              shock
            </li>
            <li>
              <strong>Handling Errors:</strong> Improper handling or exposure to
              hypotonic solutions during semen processing
            </li>
            <li>
              <strong>Prolonged Storage:</strong> Accumulation of sperm in the
              epididymis over time
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Coiled tails can also be associated with other tail defects and may
            indicate underlying issues in spermiogenesis. It is essential to
            monitor and manage bulls exhibiting this defect closely to maintain
            optimal fertility​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Coiled Tails on Fertility</h3>

          <p>
            A study involving bulls with high levels of coiled tails (more than
            30%) demonstrated reduced fertility. However, bulls with up to 25%
            of this defect did not show a significant impact on fertility,
            emphasizing its compensable nature​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

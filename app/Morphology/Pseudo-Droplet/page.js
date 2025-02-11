// Components
import Image from "next/image";
import Slider from "../../components/slider/Slider";

// Styles
import styles from "../page.module.css";

// Images for the slider
const images = [
  {
    src: "/img/morphology/PseudoDroplets/PD1.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD2.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD3.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD4.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD5.jpg",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD6.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD7.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
  {
    src: "/img/morphology/PseudoDroplets/PD8.png",
    alt: "Pseudo Droplet Sperm Morphology Example",
    caption: "Pseudo Droplets",
  },
];

export default function PseudoDroplets() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Pseudo Droplets
          <Image
            src="/img/morphology/PseudoDroplets/Pseudo Droplet.png"
            alt="Pseudo Droplet Sperm Morphology inline image"
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
            Pseudo-droplets are characterized by a thickening of the mid-piece,
            often associated with a bend or fracture. This defect mimics a
            cytoplasmic droplet but is located within the mitochondrial sheath.
            Under light microscopy, it can appear similar to a broken neck.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Pseudo-droplets have little to no effect on fertility. Bulls with up
            to 90% of sperm affected by pseudo-droplets have been reported to
            maintain normal fertility over multiple breeding seasons. This
            defect is considered compensable as it does not significantly impair
            sperm motility or fertilization capacity​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Pseudo-droplets can be observed shortly after stress events or
            nutritional imbalances. They can be transient or permanent; if the
            defect persists in two tests conducted ten weeks apart, it is
            considered permanent​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Nutritional Factors:</strong> High levels of gossypol in
              the diet
            </li>
            <li>
              <strong>Viral Infections:</strong> Conditions such as Bovine
              Ephemeral Fever
            </li>
            <li>
              <strong>Genetic Predisposition:</strong> Some bulls may have a
              hereditary tendency to develop this defect
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Pseudo-droplets are often confused with true cytoplasmic droplets.
            However, under transmission electron microscopy (TEM),
            pseudo-droplets reveal an accumulation of dense granules within the
            thickened areas of the mid-piece. This abnormality is often found in
            conjunction with other mid-piece defects​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Pseudo-Droplets on Fertility</h3>

          <p>
            A study involving a bull with 90% of sperm showing pseudodroplets
            maintained normal fertility over three breeding seasons, indicating
            the minimal impact of this defect on fertility​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

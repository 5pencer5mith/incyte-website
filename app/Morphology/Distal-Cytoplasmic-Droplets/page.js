// Components
import Image from "next/image";
// import Slider from '@/app/components/slider/Slider'
// Add images to slider

// Styles
import styles from "../page.module.css";

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function DistalCytoplasmicDroplet() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Distal Cytoplasmic Droplets
          <Image
            src="/img/morphology/DistalCytoplasmicDroplet/Cytoplasmic Droplet.png"
            alt="Distal Cytoplasmic Droplets Sperm Morphology inline image"
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
            Distal cytoplasmic droplets are remnants found at the distal end of
            the midpiece and are a sign of incomplete maturation. They are
            generally not considered to negatively affect fertility in bulls.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Recent studies have shown that distal cytoplasmic droplets are not
            associated with infertility in bulls. Spermatozoa with distal
            droplets will often lose the droplet during short periods of
            incubation or gentle agitation, and case studies using bulls with
            high numbers of distal droplets in natural service achieve normal
            pregnancy rates​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Distal droplets can be observed 7-10 days after a stress event,
            though their presence may vary widely between sequential
            ejaculates​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Incomplete maturation:</strong> Sperm retain droplets as a
              residual body during epididymal transit
            </li>
            <li>
              <strong>Stress:</strong> Such as heat stress or physical exertion
            </li>
            <li>
              <strong>Nutritional deficiencies:</strong> Suboptimal diet
              affecting spermatogenesis and epididymal function
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            The presence of distal cytoplasmic droplets may indicate that the
            sperm has not acquired essential binding proteins from the seminal
            vesicle fluid, which are necessary for binding to the zona
            pellucida​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <p>
            Case studies highlight that bulls with high numbers of distal
            droplets still achieve normal pregnancy rates, emphasizing that
            these droplets should not be considered a defect when present in
            isolation​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

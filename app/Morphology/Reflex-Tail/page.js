// Components
// import Image from 'next/image';
// import Slider from '@/app/components/slider/Slider'

// Styles
import styles from "../page.module.css";

// Images for slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function ReflexTail() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Reflex Tail
          {/* <Image
                        src='/morphology/Reflex-Tail/Coiled.png'
                        alt='Reflex Tail Sperm Morphology inline image'
                        width={150}
                        height={150}
                    /> */}
        </h1>
      </div>

      {/* <div className={styles.sliderContainer}>

                <Slider imageData={images} />

            </div> */}

      <article>
        <section>
          <h2>Description</h2>

          <p>
            Reflex tails, also known as coiled principal piece defects, are
            characterized by the terminal part of the tail coiling back on
            itself. This defect can appear as a simple bend or a complete coil
            and is often observed in conjunction with other tail defects.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Reflex tails are generally considered a compensable defect due to
            the lack of forward progressive motility. High levels of this defect
            (greater than 30%) can significantly reduce fertility, as affected
            sperm are unable to reach and fertilize the ova​​​​​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Reflex tails can appear within a few days of a thermal insult, such
            as heat stress or cold shock. This defect is often transient and may
            resolve with improved environmental conditions​​​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Environmental Stress:</strong> Heat stress, cold shock, or
              other stress events
            </li>
            <li>
              <strong>Handling Errors:</strong> Improper handling or exposure to
              hypotonic solutions during semen processing
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
            Reflex tails are the most common abnormality of the sperm tail and
            are often of epididymal origin. This defect is considered
            compensable because affected sperm display reverse motility and
            cannot penetrate the zona pellucida, allowing normal sperm to
            compensate in fertilization​​​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Reflex Tails on Fertility</h3>

          <p>
            A study involving bulls with high levels of reflex tails (greater
            than 30%) demonstrated reduced fertility. However, bulls with up to
            25% of this defect did not show a significant impact on fertility,
            emphasizing its compensable nature​​​​.
          </p>
        </section>
      </article>
    </div>
  );
}

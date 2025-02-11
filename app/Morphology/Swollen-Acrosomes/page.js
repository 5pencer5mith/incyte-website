// Components
// import Image from 'next/image';
// import Slider from '@/app/components/slider/Slider'

// Styles
import styles from "../page.module.css";

// Images for the slider
// const images = [
//     { src: '/morphology/', alt: '', caption: '' },
//     { src: '/morphology/', alt: '', caption: '' }
// ];

export default function SwollenAcrosomes() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Swollen Acrosomes
          {/* <Image
                        src='/morphology/'
                        alt=''
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
            Swollen acrosomes, also known as ruffled acrosomes, are
            characterized by the abnormal enlargement and lifting of the
            acrosome from the sperm head. This condition often results in the
            detachment of the acrosome, which can appear as a separate cap in
            the sample.
          </p>
        </section>

        <section>
          <h2>Potential Effects on Fertility</h2>

          <p>
            Swollen acrosomes can negatively impact fertility. The swelling and
            subsequent sloughing of the acrosome mimic the capacitation process,
            rendering the sperm incapable of binding to and penetrating the
            oocyte. This defect is often associated with aging sperm and is
            considered an uncompensable defect, as affected sperm cannot
            fertilize ova​​.
          </p>
        </section>

        <section>
          <h2>Days from Insult to Identificaiton</h2>

          <p>
            Swollen acrosomes can appear shortly after stress events or as a
            result of sperm aging. They are often observed in older sperm or
            sperm that have accumulated due to infrequent ejaculation​​.
          </p>
        </section>

        <section>
          <h2>Causes</h2>

          <p>Possible causes include:</p>

          <ul>
            <li>
              <strong>Aging of Sperm:</strong> Prolonged storage in the
              epididymis can lead to acrosomal swelling
            </li>
            <li>
              <strong>Rusty Load Syndrome:</strong> Accumulation of sperm in the
              epididymis over time
            </li>
            <li>
              <strong>Environmental Stress:</strong> Heat stress and physical
              exertion
            </li>
            <li>
              <strong>Handling Errors:</strong> Improper semen handling or
              processing can also contribute to this condition
            </li>
          </ul>
        </section>

        <section>
          <h2>Other Important Data</h2>

          <p>
            Swollen acrosomes are often seen in conjunction with other head
            abnormalities, such as knobbed acrosomes, because the latter can
            cause premature initiation of the acrosome reaction. In such cases,
            the swollen acrosome may hide the knobbed defect during initial
            observations​​.
          </p>
        </section>

        <section>
          <h2>Case Studies</h2>

          <h3>Case Study: Impact of Swollen Acrosomes on Fertility</h3>

          <p>
            A study involving bulls with high levels of swollen acrosomes showed
            significantly lower fertility rates. In cases where swollen
            acrosomes were present in conjunction with other defects, such as
            knobbed acrosomes, fertility was further reduced, highlighting the
            importance of comprehensive semen analysis for accurate diagnosis​​.
          </p>
        </section>
      </article>
    </div>
  );
}

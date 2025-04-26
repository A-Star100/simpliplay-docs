import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cross Platform',
    Svg: require('@site/static/img/cross-platform.svg').default,
    description: (
      <>
        SimpliPlay is a cross-platform media player that reliably supports
        the most popular media formats with ease.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/ide.svg').default,
    description: (
      <>
        SimpliPlay is open-source, allowing even the average user to improve the app
        if they can program.
      </>
    ),
  },
  {
    title: 'Simple Everywhere',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        SimpliPlay has a user-friendly interface with powerful features on every platform.
        Everyone gets something, no matter where they are.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

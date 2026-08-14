import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.eyebrow}><span /> Nixie 1.2.5 · .NET 8</div>
        <Heading as="h1" className={styles.title}>
          Concurrency that<br/><em>speaks your types.</em>
        </Heading>
        <p className={styles.subtitle}>
          A lightweight actor framework for C# with typed messages, predictable
          lifecycles, and fast in-process delivery.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="/docs/getting-started">Start building <span>→</span></Link>
          <Link className={styles.secondaryButton} to="https://github.com/kahunakv/nixie">View on GitHub</Link>
        </div>
        <div className={styles.install}><span>$</span><code>dotnet add package Nixie --version 1.2.5</code></div>
      </div>
    </header>
  );
}

const features = [
  {number: '01', title: 'Typed by default', body: 'Actor references encode request and response types, moving entire classes of messaging errors to compile time.'},
  {number: '02', title: 'Built for pressure', body: 'Bound inboxes, admission-aware TryAsk and TrySend, and priority control messages give overload an explicit shape.'},
  {number: '03', title: 'Small & composable', body: 'Actors, routers, timers, dependency injection, and graceful shutdown—without a distributed runtime to operate.'},
];

function CodeSample() {
  return <section className={styles.codeSection}>
    <div className={`container ${styles.codeGrid}`}>
      <div>
        <span className={styles.kicker}>A complete actor in minutes</span>
        <Heading as="h2">State stays close.<br/>Messages stay clear.</Heading>
        <p>Implement one interface, spawn a typed reference, and send. Nixie serializes each actor’s work while the Task Parallel Library handles execution.</p>
        <Link to="/docs/actors/fire-and-forget" className={styles.textLink}>Learn the actor model <span>↗</span></Link>
      </div>
      <div className={styles.codeWindow}>
        <div className={styles.codeTop}><i/><i/><i/><span>CounterActor.cs</span></div>
        <pre><code><span className={styles.keyword}>public sealed class</span> <span className={styles.type}>CounterActor</span>{'\n'}  : IActor&lt;<span className={styles.type}>Increment</span>&gt;{'\n'}{'{'}{'\n'}  <span className={styles.keyword}>private int</span> count;{'\n\n'}  <span className={styles.keyword}>public</span> Task Receive(Increment _) {'{'}{'\n'}    count++;{'\n'}    <span className={styles.keyword}>return</span> Task.CompletedTask;{'\n'}  {'}'}{'\n'}{'}'}{'\n\n'}<span className={styles.keyword}>using</span> ActorSystem system = <span className={styles.keyword}>new</span>();{'\n'}<span className={styles.keyword}>var</span> counter = system.Spawn&lt;CounterActor, Increment&gt;();{'\n'}counter.Send(<span className={styles.keyword}>new</span> Increment());</code></pre>
      </div>
    </div>
  </section>;
}

export default function Home(): ReactNode {
  return (
    <Layout title="Typed actors for modern .NET" description="Nixie is a lightweight, strongly typed actor framework for C# and .NET.">
      <HomepageHeader />
      <main>
        <section className={styles.featureSection}>
          <div className={`container ${styles.featureGrid}`}>
            {features.map((feature) => <article key={feature.number}>
              <span>{feature.number}</span><Heading as="h3">{feature.title}</Heading><p>{feature.body}</p>
            </article>)}
          </div>
        </section>
        <CodeSample />
      </main>
    </Layout>
  );
}

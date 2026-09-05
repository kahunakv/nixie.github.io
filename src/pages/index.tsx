import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.topology} aria-hidden="true">
        <svg viewBox="0 0 760 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.route} d="M92 414C184 414 177 282 270 282C362 282 352 144 458 144C550 144 543 282 654 282" />
          <path className={`${styles.route} ${styles.routeSlow}`} d="M72 146C165 146 170 396 285 396C393 396 389 244 485 244C585 244 579 104 695 104" />
          <path className={`${styles.route} ${styles.routeQuiet}`} d="M170 502C212 502 221 452 270 452C320 452 326 508 382 508C438 508 437 399 510 399" />
          <circle className={styles.node} cx="92" cy="414" r="7" />
          <circle className={styles.node} cx="270" cy="282" r="10" />
          <circle className={styles.node} cx="458" cy="144" r="7" />
          <circle className={styles.node} cx="654" cy="282" r="10" />
          <circle className={`${styles.node} ${styles.nodeMuted}`} cx="72" cy="146" r="6" />
          <circle className={`${styles.node} ${styles.nodeMuted}`} cx="485" cy="244" r="6" />
          <circle className={`${styles.node} ${styles.nodeMuted}`} cx="695" cy="104" r="6" />
        </svg>
      </div>
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

const performance = [
  {value: '20M', label: 'messages / second', detail: 'Struct actor · Send'},
  {value: '14M', label: 'messages / second', detail: 'Class actor · Send'},
  {value: '1.9µs', label: 'round-trip latency', detail: 'Class actor · Ask'},
];

function Performance() {
  return <section className={styles.performanceSection}>
    <div className={`container ${styles.performanceGrid}`}>
      <div className={styles.performanceIntro}>
        <span className={styles.kicker}>Measured, not assumed</span>
        <Heading as="h2">Speed where<br/>messages matter.</Heading>
        <p>Nixie keeps the fast path deliberately small: typed in-process delivery built on the Task Parallel Library, with struct messages available when every allocation counts.</p>
        <Link className={styles.textLink} to="https://github.com/andresgutierrez/nixie/blob/main/BENCHMARKS.md">Read the benchmark method <span>↗</span></Link>
      </div>
      <div className={styles.metricPanel}>
        <div className={styles.metricHeader}><span>Throughput snapshot</span><i>●</i> .NET 8</div>
        <div className={styles.metrics}>
          {performance.map((metric) => <div className={styles.metric} key={metric.value}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.detail}</small>
          </div>)}
        </div>
        <p className={styles.benchmarkNote}>Apple Arm64 · 8 logical cores · .NET 8.0.8 · no-op counter handler. Results vary with hardware and handler work.</p>
      </div>
    </div>
  </section>;
}

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
        <Performance />
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

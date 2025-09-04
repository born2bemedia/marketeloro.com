import {
  AboutUs,
  CoreServices,
  Hero,
  HowWeWork,
  Outcomes,
  Plans,
  Stats,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Stats />
      <HowWeWork />
      <CoreServices />
      <Plans />
      <Outcomes />
    </main>
  );
}

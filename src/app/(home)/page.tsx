import {
  AboutUs,
  CoreServices,
  Hero,
  HowWeWork,
  IndustriesWeServe,
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
      <IndustriesWeServe />
      <CoreServices />
      <Plans />
      <Outcomes />
    </main>
  );
}

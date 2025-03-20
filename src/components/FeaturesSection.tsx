import ideFeatures from "../features";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  const features = ideFeatures();

  console.log(features);

  return (
    <section className="features flex flex-col px-24 min-h-[100vh] justify-center items-center">
      <div>
        <h1 className="text-4xl font-medium pb-24">Why use Sleep Deprived?</h1>
      </div>

      <div className="features w-full flex flex-wrap justify-between text-center gap-12">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

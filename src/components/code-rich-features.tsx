import { featureCards } from "../utils/features.list";
import IntegratedTerminalCard from "./card-features-item";

export default function CodeRichFeatures() {
  return (
    <section className="py-5 px-5 bg-black opacity-95 md:px-[6rem]">
      <div className="md:flex md:flex-col md:justify-center md:items-center md:text-center md:px-50 md:py-10">
        <h2 className="text-3xl font-semibold	text-white">
          Code with rich features
        </h2>
        <p className="mt-3 text-base text-version_text py-2">
          There's a lot more to an editor. Whether it's using built-in features
          or rich extensions, there's something for everyone.
        </p>
      </div>
      <aside className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((feature, index) => (
          <IntegratedTerminalCard key={index} feature={feature} />
        ))}
      </aside>
    </section>
  );
}

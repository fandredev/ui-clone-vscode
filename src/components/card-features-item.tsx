import { FeatureCard } from "../utils/features.list";

interface IntegratedTerminalCardProps {
  feature: FeatureCard;
}

export default function IntegratedTerminalCard({
  feature,
}: IntegratedTerminalCardProps) {
  return (
    <div className="bg-background_cards_extensions opacity-95 text-white p-6 rounded-lg shadow-lg w-full h-52">
      <div className="mb-4">
        <div className="bg-gray-700 p-3 rounded-full w-10">
          <img src={`${feature.icon}`} alt={feature.title} />
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </div>
  );
}

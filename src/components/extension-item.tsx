import { Extensions } from "../utils/extensions-list";

interface ExtensionItemProps {
  extension: Extensions;
}

export default function ExtensionItem({ extension }: ExtensionItemProps) {
  return (
    <div className="border bg-background_cards_extensions border-none p-4 gap-2 flex flex-row items-center justify-center rounded-md no-underline">
      <img
        className={`w-8 ${extension.name === "Jupyter" && "rounded-md"}`}
        src={extension.image}
        alt={extension.name}
      />
      <div className="hidden xl:flex xl:justify-around xl:flex-col">
        <span className="text-white">{extension.name}</span>
        <p className="text-version_text">{extension.description}</p>
      </div>
    </div>
  );
}

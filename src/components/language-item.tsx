import { Language } from "./languages";

interface LanguageItemProps {
  language: Language;
}

export default function LanguageItem({ language }: LanguageItemProps) {
  return (
    <div className="flex items-center gap-3">
      <img className="w-10" src={language.image} alt={language.name} />
      <code className="text-version_text">{language.name}</code>
    </div>
  );
}

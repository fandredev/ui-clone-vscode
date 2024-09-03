import { languages } from "../utils/languages-list";
import LanguageItem from "./language-item";

export default function CodeAnyLanguage() {
  return (
    <section className="py-5 px-5 bg-black opacity-95 md:grid md:grid-cols-[1fr_65%] md:gap-16 md:px-[6rem] md:pb-32">
      <div>
        <h2 className="text-3xl font-semibold	text-white">
          Code in any language
        </h2>
        <p className="mt-3 text-lg text-version_text">
          VS Code supports almost every major programming language. Several ship
          in the box, like JavaScript, TypeScript,{" "}
          <abbr title="Cascading Style Sheets">CSS</abbr>, and HTML, but
          extensions for others can be found in the VS Code Marketplace.
        </p>
      </div>

      <aside className="my-4 grid grid-cols-3	gap-2 medium-range:grid-cols-2">
        {languages.map((language, index) => (
          <LanguageItem key={index} language={language} />
        ))}
      </aside>
    </section>
  );
}

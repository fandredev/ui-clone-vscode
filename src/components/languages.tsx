type LanguageName =
  | "Javascript"
  | "Typescript"
  | "Python"
  | "C#"
  | "C++"
  | "HTML"
  | "Java"
  | "JSON"
  | "PHP"
  | "Markdown"
  | "Powershell"
  | "YAML";

type LanguageImage =
  | "images/languages/js.png"
  | "images/languages/ts.png"
  | "images/languages/python.png"
  | "images/languages/cs.png"
  | "images/languages/cpp.png"
  | "images/languages/html.png"
  | "images/languages/java.png"
  | "images/languages/json.png"
  | "images/languages/php.png"
  | "images/languages/markdown.png"
  | "images/languages/powershell.png"
  | "images/languages/yaml.png";

interface Language {
  name: LanguageName;
  image: LanguageImage;
}

const languages: Language[] = [
  {
    name: "Javascript",
    image: "images/languages/js.png",
  },
  {
    name: "Typescript",
    image: "images/languages/ts.png",
  },
  {
    name: "Python",
    image: "images/languages/python.png",
  },
  {
    name: "C#",
    image: "images/languages/cs.png",
  },
  {
    name: "C++",
    image: "images/languages/cpp.png",
  },
  {
    name: "HTML",
    image: "images/languages/html.png",
  },
  {
    name: "Java",
    image: "images/languages/java.png",
  },
  {
    name: "JSON",
    image: "images/languages/json.png",
  },
  {
    name: "PHP",
    image: "images/languages/php.png",
  },
  {
    name: "Markdown",
    image: "images/languages/markdown.png",
  },

  {
    name: "Powershell",
    image: "images/languages/powershell.png",
  },

  {
    name: "YAML",
    image: "images/languages/yaml.png",
  },
];

export default function CodeAnyLanguage() {
  return (
    <section className="py-5 px-5 bg-black opacity-95">
      <h2 className="text-3xl font-semibold	text-white">Code in any language</h2>
      <p className="mt-3 text-lg text-version_text">
        VS Code supports almost every major programming language. Several ship
        in the box, like JavaScript, TypeScript,{" "}
        <abbr title="Cascading Style Sheets">CSS</abbr>, and HTML, but
        extensions for others can be found in the VS Code Marketplace.
      </p>

      <aside className="my-4 grid grid-cols-2	gap-y-2">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center gap-3">
            <img className="w-10" src={language.image} alt={language.name} />
            <code className="text-version_text">{language.name}</code>
          </div>
        ))}
      </aside>
    </section>
  );
}

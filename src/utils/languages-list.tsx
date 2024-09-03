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

export interface Language {
  name: LanguageName;
  image: LanguageImage;
}

export const languages: Language[] = [
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

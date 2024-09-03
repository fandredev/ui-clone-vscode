import IntegratedTerminalCard from "./card-features-item";

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Integrated terminal",
    description:
      "Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor.",
    icon: "images/codicon-terminal.svg", // Nome do ícone fictício
  },
  {
    title: "Run code",
    description: "Run and debug your code without leaving your editor.",
    icon: "images/codicon-debug.svg",
  },
  {
    title: "Version control",
    description:
      "Built-in support for git and many other source control providers.",
    icon: "images/codicon-version-control.svg",
  },
  {
    title: "Build tasks",
    description: "Run tools and analyze their results from within VS Code.",
    icon: "images/codicon-build-tasks.svg",
  },
  {
    title: "Local history",
    description:
      "Never lose your changes with automatically tracked local history.",
    icon: "images/codicon-local-history.svg",
  },
  {
    title: "Themes",
    description:
      "Your theme is an extension of your personality. Add some flair to your editor and add your touch.",
    icon: "images/codicon-themes.svg",
  },
  {
    title: "Accessibility",
    description:
      "Optimized experience for screen readers, high contrast themes, and keyboard-only navigation.",
    icon: "images/codicon-accessibility.svg",
  },
  {
    title: "Web support",
    description:
      "Whether you are on your phone, tablet, or desktop, you can access your code from anywhere.",
    icon: "images/codicon-web.svg",
  },
];

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

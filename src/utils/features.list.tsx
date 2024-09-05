export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export const featureCards: FeatureCard[] = [
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

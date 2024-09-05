export interface Extensions {
  name: string;
  image: string;
  description: string;
}

export const extensions: Extensions[] = [
  {
    name: "Python",
    image: "images/python-extension.png",
    description: "Adds rich language support for Python",
  },
  {
    name: "Typescript",
    image: "images/copilot-extension.png",
    description: "Your AI pair programmer",
  },
  {
    name: "C/C++",
    image: "images/c-extension.png",
    description: "Adds rich language support for C/C++",
  },
  {
    name: "Jupyter",
    image: "images/jupyter-extension.png",
    description: "Language support for Jupyter Notebooks",
  },
  {
    name: "GitLens",
    image: "images/gitlens-extension.png",
    description: "Supercharge your Git experience",
  },
  {
    name: "C# Dev Kit",
    image: "images/cs-dev-kit-extension.png",
    description: "Powerful tools for your C# development",
  },
  {
    name: "GitHub Codespaces",
    image: "images/github-pull-requests-extension.png",
    description: "Fully configured dev environments in the cloud",
  },
  {
    name: "GitHub Pull Requests",
    image: "images/github-pull-requests-extension.png",
    description: "Collaborate on issues and pull requests",
  },
  {
    name: "PHP",
    image: "images/remote-extension.png",
    description: "Open folders in a container on a remote machine",
  },
];
